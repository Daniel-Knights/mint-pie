import {
  Disposable,
  languages,
  CompletionItem,
  SnippetString,
  MarkdownString,
  CompletionList,
  ProviderResult,
  TextDocument,
  Position,
} from 'vscode'
import { tagAttributes, cssProperties, htmlTags } from './snippets'

interface Snippet {
  prefix: string
  body: string
  description?: string
}

function createCompletionItem(snippet: Snippet, detail: string, kind?: number) {
  const snippetCompletion = new CompletionItem(snippet.prefix)

  snippetCompletion.detail = detail
  snippetCompletion.documentation = new MarkdownString(snippet.description)
  snippetCompletion.insertText = new SnippetString(snippet.body)
  snippetCompletion.kind = kind

  return snippetCompletion
}

function matchRecursive(matchString: string, boundaries: string) {
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

function isWithinBlock(
  document: TextDocument,
  position: Position,
  regex: RegExp
): boolean {
  const docText = document.getText()
  const carvedDocText = docText.split(regex)

  carvedDocText.shift()

  const blockMatches = carvedDocText.map((section) =>
    matchRecursive(`{${section}}`, '{}')
  )

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

  if (isWithin) return true
  else return false
}

function isWithinTag(document: TextDocument, position: Position, regex: RegExp): boolean {
  const docText = document.getText()
  const tagMatches = docText.match(regex)

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

function hasExistingHyphen(lineText: string, body: string): string {
  const hyphenSections = lineText.match(/[^\s]*-/g)

  if (!hyphenSections) return body

  for (let i = 0; i < hyphenSections.length; i++) {
    const section = hyphenSections[i]
    const matchingLengthBody = body.slice(0, section.length)

    if (section === matchingLengthBody) {
      return body.split(section)[1]
    }
  }

  return body
}

export default class Completion {
  constructor(subscriptions: Disposable[]) {
    const attributeProvider = languages.registerCompletionItemProvider('mint', {
      provideCompletionItems(document, position) {
        const tagRegex = /<[^/](?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/gm

        if (!isWithinTag(document, position, tagRegex)) return

        const { text: lineText } = document.lineAt(position)

        return tagAttributes.map((attr) => {
          const attrCopy = { ...attr }

          attrCopy.body = hasExistingHyphen(lineText, attr.body)

          return createCompletionItem(attrCopy, 'Mint Pie')
        })
      },
    })

    const cssPropertyProvider = languages.registerCompletionItemProvider('mint', {
      provideCompletionItems(document, position) {
        const { text: lineText } = document.lineAt(position)
        const lastLineChar = lineText[position.character]

        if (lastLineChar === ';') return
        if (!isWithinBlock(document, position, /style[^{]+{/)) return

        return cssProperties.map((prop) => {
          const propCopy = { ...prop }

          propCopy.body = hasExistingHyphen(lineText, prop.body)

          const snippetCompletion = createCompletionItem(propCopy, 'Mint Pie (CSS)')

          snippetCompletion.command = {
            command: 'editor.action.triggerSuggest',
            title: '',
          }

          return snippetCompletion
        })
      },
    })

    const cssValueProvider = languages.registerCompletionItemProvider('mint', {
      provideCompletionItems(document, position) {
        const snippetCompletions: ProviderResult<CompletionItem[] | CompletionList> = []
        const { text: lineText } = document.lineAt(position)
        const addSemi = !lineText.includes(';')

        cssProperties.forEach((prop) => {
          const bodyRegex = new RegExp(prop.body.split('$1').join('.*') + '?')

          if (!bodyRegex.test(lineText) || !prop.values) return

          prop.values.forEach((val) => {
            const propBody = addSemi ? val + ';' : val
            const body = hasExistingHyphen(lineText, propBody)
            const completionItem = createCompletionItem({ prefix: val, body }, '', 11)

            snippetCompletions.push(completionItem)
          })
        })

        return snippetCompletions
      },
    })

    const htmlTagProvider = languages.registerCompletionItemProvider('mint', {
      provideCompletionItems(document, position) {
        const renderFunRegex = /fun\s+render\s+{|fun\s+.+:\s*Html\s*{/
        const htmlTagRegex = /<\/?(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])*>/gm

        if (!isWithinBlock(document, position, renderFunRegex)) return
        if (isWithinTag(document, position, htmlTagRegex)) return

        return htmlTags.map((tag) => createCompletionItem(tag, 'Mint Pie (HTML)'))
      },
    })

    subscriptions.push(
      attributeProvider,
      cssPropertyProvider,
      cssValueProvider,
      htmlTagProvider
    )
  }
}
