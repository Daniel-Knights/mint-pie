import { TextDocument, Position } from 'vscode'
import regex from '../resources/regex'

/**
 * Recursively match nested boundaries.
 *
 * Adapted from https://blog.stevenlevithan.com/archives/javascript-match-nested
 *
 * @param boundaries - 2-character pair of delimiters, i.e. `'{}'`
 */
export function matchRecursive(matchString: string, boundaries: string): string {
  const iterator = new RegExp(`${boundaries[0]}|${boundaries[1]}`, 'g')

  let openTokens = 0
  let matchStartIndex
  let match

  while ((match = iterator.exec(matchString))) {
    if (match[0] === boundaries[0]) {
      if (!openTokens) {
        matchStartIndex = iterator.lastIndex
      }

      openTokens += 1
    } else if (openTokens) {
      openTokens -= 1

      if (!openTokens) {
        return matchString.slice(matchStartIndex, match.index)
      }
    }
  }

  return ''
}

/**
 * Determines if the given position is within any matched portion of text.
 */
export function isWithinRegexMatch(
  document: TextDocument,
  position: Position,
  regex: RegExp
): boolean {
  const docText = document.getText()
  const matches = docText.match(regex)

  if (!matches) return false

  const offset = document.offsetAt(position)

  let isWithin = false
  let indexOfPos = 0

  matches.forEach((block) => {
    if (isWithin) return

    const blockIndex = docText.indexOf(block, indexOfPos)
    const blockLength = blockIndex + block.length

    indexOfPos = blockLength
    isWithin = offset > blockIndex && offset < blockLength + 1
  })

  return isWithin
}

/**
 * Uses `startRegex` to carve up the document, then tests if the given position is between two boundaries.
 *
 * @param startRegex - e.g. `fun\s*[^:|{]*:\s*Html\s*(?={)`, starting boundary mustn't be included
 * @param boundaries - 2-character pair of delimiters, e.g. `'{}'`
 */
export function isWithinMultilineDelimiters(
  document: TextDocument,
  position: Position,
  startRegex: RegExp,
  boundaries: string
): boolean {
  const docText = document.getText()
  const carvedDocText = docText.split(startRegex)

  carvedDocText.shift()

  const blockMatches = carvedDocText.map((section) => {
    const matchText = `${boundaries[0]}${section}${boundaries[1]}}`

    return matchRecursive(matchText, boundaries)
  })

  if (!blockMatches) return false

  const offset = document.offsetAt(position)

  let isWithin = false
  let indexOfPos = 0

  blockMatches.forEach((block) => {
    if (isWithin) return

    const blockIndex = docText.indexOf(block, indexOfPos)
    const blockLength = blockIndex + block.length

    indexOfPos = blockLength
    isWithin = offset > blockIndex && offset < blockLength + 1
  })

  return isWithin
}

/**
 * Determines if the given position is within HTML tags.
 *
 * @param anyTag - defaults to checking between opening and closing tag, `false` limits checks to within any opening or self-closing tag
 */
export function isWithinTags(
  document: TextDocument,
  position: Position,
  anyTag = true
): boolean {
  const docText = document.getText()
  const tagMatches = docText.match(anyTag ? regex.anyTag : regex.openingTag)

  if (!tagMatches) return false

  const cursorPos = document.offsetAt(position)

  let isWithinTag = false
  let indexOfPos = 0

  tagMatches.forEach((tag) => {
    const tagStart = docText.indexOf(tag, indexOfPos)
    const tagEnd = tagStart + tag.length

    indexOfPos = tagEnd

    if (cursorPos > tagStart && cursorPos <= tagEnd) {
      isWithinTag = true
    }
  })

  return isWithinTag
}

/**
 * Determines if the given position is within a block typed to return HTML.
 */
export function isWithinHtmlBlock(document: TextDocument, position: Position): boolean {
  return isWithinMultilineDelimiters(document, position, regex.htmlFunOpening, '{}')
}

/**
 * Determines if the given position is within a style block.
 */
export function isWithinStyleBlock(document: TextDocument, position: Position): boolean {
  return isWithinMultilineDelimiters(document, position, regex.styleBlockOpening, '{}')
}

/**
 * Determines if the current line already contains a section of the given text before a hyphen.
 *
 * e.g. if we type this: `background-c` and focus away before selecting a completion,
 * the provider will autocomplete `background-background-color` without making this determination.
 */
export function hasExistingHyphen(
  document: TextDocument,
  position: Position,
  body: string
): string {
  const range = document.getWordRangeAtPosition(position, /(?:\w|-)+\w*/)
  const typedText = document.getText(range)

  if (!typedText || !range) return body

  const typedTextAtLastHyphen = typedText.slice(0, typedText.lastIndexOf('-') + 1)
  const matchingLengthBody = body.slice(0, typedText.lastIndexOf('-') + 1)

  if (typedTextAtLastHyphen === matchingLengthBody) {
    return body.slice(typedText.lastIndexOf('-') + 1)
  }

  return body
}
