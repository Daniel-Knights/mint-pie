import { Disposable, IndentAction, languages } from 'vscode'

export default class LanguageConfig {
  constructor(subscriptions: Disposable[]) {
    subscriptions.push(this.configDisposable)
  }

  private readonly ignoreTags =
    'area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr'

  private configDisposable = languages.setLanguageConfiguration('mint', {
    indentationRules: {
      increaseIndentPattern: /<(?!\?|(?:area|base|br|col|frame|hr|html|img|input|keygen|link|menuitem|meta|param|source|track|wbr)\b|[^>]*\/>)([-_\.A-Za-z0-9]+)(?=\s|>)\b[^>]*>(?!.*<\/\1>)|<!--(?!.*-->)|\{[^}"']*$/,
      decreaseIndentPattern: /^\s*(<\/(?!html)[-_\.A-Za-z0-9]+\b[^>]*>|-->|\})/,
    },
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
    onEnterRules: [
      {
        beforeText: new RegExp(
          `<(?!(?:${this.ignoreTags}))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$`,
          'i'
        ),
        afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>/i,
        action: { indentAction: IndentAction.IndentOutdent },
      },
      {
        beforeText: new RegExp(
          `<(?!(?:${this.ignoreTags}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,
          'i'
        ),
        action: { indentAction: IndentAction.Indent },
      },
    ],
  })
}
