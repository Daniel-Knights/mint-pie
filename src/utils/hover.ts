import { TextDocument, Position, Hover, MarkdownString } from 'vscode'
import { Delimiters, isWithinRegexMatch, matchRecursive } from './parse'
import { workspaceConfig } from '../extension'
import regex from '../resources/regex'

function removeIndentation(text: string): string {
  return text.replace(/^(?: {2}|\t)/gm, '').replace(/\t/gm, '  ')
}

function getRegexFromRange(
  document: TextDocument,
  position: Position,
  rangeRegex: RegExp,
  searchRegex: Delimiters
): RegExp | undefined {
  if (!workspaceConfig.enableHovers) return
  if (isWithinRegexMatch(document, position, regex.stringOrComment)) return

  const range = document.getWordRangeAtPosition(position, rangeRegex)

  if (!range) return

  const typedText = document.getText(range)

  return new RegExp(`${searchRegex.start}\\b${typedText}\\b${searchRegex.end}`)
}

export function parseAndProvideHover(
  document: TextDocument,
  position: Position,
  rangeRegex: RegExp,
  searchRegex: Delimiters
): Hover | undefined {
  const formattedRegex = getRegexFromRange(document, position, rangeRegex, searchRegex)

  if (!formattedRegex) return

  const docText = document.getText()
  const matchedText = docText.match(formattedRegex)

  if (!matchedText) return

  const markdownText = '```mint\n' + removeIndentation(matchedText[0].trimEnd()) + '\n```'
  const hoverText = new Hover(new MarkdownString(markdownText))

  return hoverText
}

export function parseBlockAndProvideHover(
  document: TextDocument,
  position: Position,
  rangeRegex: RegExp,
  searchRegex: Delimiters
): Hover | undefined {
  const blockStartRegex = getRegexFromRange(document, position, rangeRegex, searchRegex)

  if (!blockStartRegex) return

  const docText = document.getText()
  const block = docText.split(blockStartRegex)
  const matchedText = block && matchRecursive(block[1], { start: '{', end: '}' })
  const blockStart = docText.match(blockStartRegex)

  if (!matchedText || !blockStart) return

  const markdownText =
    '```mint\n' + blockStart[0] + '{' + removeIndentation(matchedText) + '}\n```'
  const hoverText = new Hover(new MarkdownString(markdownText))

  return hoverText
}
