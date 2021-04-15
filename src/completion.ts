import {
  Disposable,
  languages,
  CompletionItem,
  SnippetString,
  MarkdownString,
  CompletionList,
  ProviderResult,
  Position,
  TextDocument,
} from 'vscode'
import {
  isWithinStyleBlock,
  isWithinHtmlBlock,
  isWithinTags,
  hasExistingHyphen,
} from './utils/parse'
import { tagAttributes, cssProperties, htmlTags } from './snippets'
import type { Snippet } from './typings'

function createCompletionItem(snippet: Snippet, detail?: string, kind?: number) {
  const snippetCompletion = new CompletionItem(snippet.prefix)

  snippetCompletion.detail = `Mint Pie ${detail}`
  snippetCompletion.documentation = new MarkdownString(snippet.description)
  snippetCompletion.insertText = new SnippetString(snippet.body)
  snippetCompletion.kind = kind

  return snippetCompletion
}

export default class CompletionProvider {
  constructor(subscriptions: Disposable[]) {
    const completions = [
      this.attributeCompletions,
      this.cssPropertyCompletions,
      this.cssValueCompletions,
      this.htmlTagCompletions,
    ]

    const providers = completions.map((completion) =>
      languages.registerCompletionItemProvider('mint', {
        provideCompletionItems: completion,
      })
    )

    subscriptions.push(...providers)
  }

  private attributeCompletions(document: TextDocument, position: Position) {
    if (!isWithinTags(document, position, false)) return

    const { text: lineText } = document.lineAt(position)

    return tagAttributes.map((attr) => {
      const attrCopy = { ...attr }

      attrCopy.body = hasExistingHyphen(lineText, attr.body)

      return createCompletionItem(attrCopy)
    })
  }

  private cssPropertyCompletions(document: TextDocument, position: Position) {
    if (!isWithinStyleBlock(document, position)) return

    const { text: lineText } = document.lineAt(position)
    const lastLineChar = lineText[position.character]

    if (lastLineChar === ';') return

    return cssProperties.map((prop) => {
      const propCopy = { ...prop }

      propCopy.body = hasExistingHyphen(lineText, prop.body)

      const snippetCompletion = createCompletionItem(propCopy, '(CSS)')

      snippetCompletion.command = {
        command: 'editor.action.triggerSuggest',
        title: '',
      }

      return snippetCompletion
    })
  }

  private cssValueCompletions(document: TextDocument, position: Position) {
    if (!isWithinStyleBlock(document, position)) return

    const snippetCompletions: ProviderResult<CompletionItem[] | CompletionList> = []
    const { text: lineText } = document.lineAt(position)
    const addSemi = !lineText.includes(';')

    cssProperties.forEach((prop) => {
      const bodyRegex = new RegExp(prop.body.split('$1').join('.*') + '?')

      if (!bodyRegex.test(lineText) || !prop.values) return

      prop.values.forEach((val) => {
        const propBody = addSemi ? val + ';' : val
        const body = hasExistingHyphen(lineText, propBody)
        const completionItem = createCompletionItem({ prefix: val, body }, '(CSS)', 11)

        snippetCompletions.push(completionItem)
      })
    })

    return snippetCompletions
  }

  private htmlTagCompletions(document: TextDocument, position: Position) {
    if (!isWithinHtmlBlock(document, position)) return
    if (isWithinTags(document, position)) return

    return htmlTags.map((tag) => createCompletionItem(tag, '(HTML)'))
  }
}
