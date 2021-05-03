import { TextDocument, Position } from 'vscode'
import regex from '../resources/regex'

export type Delimiters = {
  start: string
  end: string
}

/**
 * Recursively match nested delimiters.
 *
 * Adapted from https://blog.stevenlevithan.com/archives/javascript-match-nested
 *
 * @param delimiters - `{ start: string, end: string }`
 * @returns the matched text
 */
export function matchRecursive(matchString: string, delimiters: Delimiters): string {
  const { start, end } = delimiters
  const iterator = new RegExp(`\\${start}|\\${end}`, 'g')

  let openTokens = 0
  let matchStartIndex
  let match

  while ((match = iterator.exec(matchString))) {
    if (match[0] === delimiters.start) {
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
 * Uses `startRegex` to carve up the document, then tests if the given position is between two delimiters.
 *
 * @param startRegex - e.g. `fun\s*[^:|{]*:\s*Html\s*(?={)`, **starting boundary mustn't be included**
 * @param delimiters - 2-character pair of delimiters, e.g. `'{}'`
 */
export function isWithinMultilineDelimiters(
  document: TextDocument,
  position: Position,
  startRegex: RegExp,
  delimiters: Delimiters
): boolean {
  const docText = document.getText()
  const carvedDocText = docText.split(startRegex)

  carvedDocText.shift()

  const blockMatches = carvedDocText.map((section) => {
    const matchText = `${delimiters.start}${section}${delimiters.end}}`

    return matchRecursive(matchText, delimiters)
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
  return isWithinMultilineDelimiters(document, position, regex.htmlFunOpening, {
    start: '{',
    end: '}',
  })
}

/**
 * Determines if the given position is within a style block.
 */
export function isWithinStyleBlock(document: TextDocument, position: Position): boolean {
  return isWithinMultilineDelimiters(document, position, regex.styleBlockOpening, {
    start: '{',
    end: '}',
  })
}
