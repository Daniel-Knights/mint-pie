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
import { getWorkspaceConfig } from './utils'

type Snippet = {
  prefix: string
  body: string
  description?: string
}

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
    if (!getWorkspaceConfig().enableCompletions) return
    if (!isWithinTags(document, position, false)) return

    return tagAttributes.map((attr) => {
      const attrCopy = { ...attr }

      attrCopy.body = hasExistingHyphen(document, position, attr.body)

      return createCompletionItem(attrCopy)
    })
  }

  private cssPropertyCompletions(document: TextDocument, position: Position) {
    if (!getWorkspaceConfig().enableCompletions) return
    if (!isWithinStyleBlock(document, position)) return

    const { text: lineText } = document.lineAt(position)
    const lastLineChar = lineText[position.character]

    if (lastLineChar === ';') return

    return cssProperties.map((prop) => {
      const propCopy = { ...prop }

      propCopy.body = hasExistingHyphen(document, position, prop.body)

      const snippetCompletion = createCompletionItem(propCopy, '(CSS)')

      snippetCompletion.command = {
        command: 'editor.action.triggerSuggest',
        title: '',
      }

      return snippetCompletion
    })
  }

  private cssValueCompletions(document: TextDocument, position: Position) {
    if (!getWorkspaceConfig().enableCompletions) return

    const snippetCompletions: ProviderResult<CompletionItem[] | CompletionList> = []
    const range = document.getWordRangeAtPosition(position, /(?:\w|-)*:\s[^;]*;/)

    if (!range) return

    const typedText = document.getText(range)
    const addSemi = !typedText.includes(';')

    cssProperties.forEach((prop) => {
      const bodyRegex = new RegExp(`(?<!-)${prop.body.split('$1').join('[^;]*')}?`)

      if (!bodyRegex.test(typedText) || !prop.values) return

      prop.values.forEach((val) => {
        const propBody = addSemi ? val + ';' : val
        const body = hasExistingHyphen(document, position, propBody)
        const completionItem = createCompletionItem({ prefix: val, body }, '', 11)

        snippetCompletions.push(completionItem)
      })
    })

    return snippetCompletions
  }

  private htmlTagCompletions(document: TextDocument, position: Position) {
    if (!getWorkspaceConfig().enableCompletions) return
    if (!isWithinHtmlBlock(document, position)) return
    if (isWithinTags(document, position, false)) return

    return htmlTags.map((tag) => createCompletionItem(tag, '(HTML)'))
  }
}
