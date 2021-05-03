import { Disposable, languages, Position, TextDocument } from 'vscode'
import regex from './resources/regex'
import { parseAndProvideHover, parseBlockAndProvideHover } from './utils'

/** SEARCH LOCALSCOPE, IF NOT, SEARCH EXPOSING, IF NOT, SEARCH GLOBAL */
/** WHAT IF MULTIPLE GLOBAL DEFINITIONS IN SAME FILE */
/** INTERPOLATION */

// global scope = ['global\\s+component', 'component', 'module', 'store', 'record', 'enum',]
// local scope = ['property', 'state', 'style', 'fun', 'const', 'get']

export default class HoverProvider {
  constructor(subscriptions: Disposable[]) {
    const providers = [
      this.provideStyleHover,
      this.provideFunHover,
      this.provideComputedHover,
      this.providePropertyAndStateHover,
      this.provideConstHover,
    ]

    providers.forEach((provider) => {
      const hoverDisposable = languages.registerHoverProvider('mint', {
        provideHover: provider.bind(this),
      })

      subscriptions.push(hoverDisposable)
    })
  }

  private provideStyleHover(document: TextDocument, position: Position) {
    return parseBlockAndProvideHover(document, position, /(?<=::)[a-z][a-zA-Z0-9]*/, {
      start: '\\bstyle\\b\\s+',
      end: `\\s*${regex.funParens}(?={)`,
    })
  }

  private provideFunHover(document: TextDocument, position: Position) {
    return parseBlockAndProvideHover(
      document,
      position,
      /(?<!fun\s|[a-zA-Z0-9\.<])[a-z][a-zA-Z0-9]*(?![=a-zA-Z0-9])/,
      {
        start: '\\bfun\\b\\s+',
        end: `\\s*${regex.funParens}${regex.type}(?={)`,
      }
    )
  }

  private provideComputedHover(document: TextDocument, position: Position) {
    return parseBlockAndProvideHover(
      document,
      position,
      /(?<!get\s|[a-zA-Z0-9\.<])[a-z][a-zA-Z0-9]*(?![=a-zA-Z0-9])/,
      {
        start: '\\bget\\b\\s+',
        end: `\\s*${regex.type}(?={)`,
      }
    )
  }

  private providePropertyAndStateHover(document: TextDocument, position: Position) {
    return parseAndProvideHover(
      document,
      position,
      /(?<!property\s|state\s|[a-zA-Z0-9\.<])[a-z][a-zA-Z0-9]*(?![=a-zA-Z0-9])/,
      {
        start: '\\b(?:property|state)\\b\\s+',
        end: `${regex.type}${regex.untilLocalKeyword}`,
      }
    )
  }

  private provideConstHover(document: TextDocument, position: Position) {
    return parseAndProvideHover(
      document,
      position,
      /(?<!const\s|[a-zA-Z0-9\.<]|[^:]:)[A-Z0-9_]+(?![=a-zA-Z0-9\._])(?!:)/,
      {
        start: '\\bconst\\b\\s+',
        end: `\\s*=${regex.untilLocalKeyword}`,
      }
    )
  }
}
