import { Disposable, languages, Position, TextDocument } from 'vscode'
import { parseAndProvideHover, parseBlockAndProvideHover } from './utils'

/** SEARCH LOCALSCOPE, IF NOT, SEARCH EXPOSING, IF NOT, SEARCH GLOBAL */
/** WHAT IF MULTIPLE GLOBAL DEFINITIONS IN SAME FILE */
/** WHAT IF LINE WRAPS - CHECK FOR KEYWORD AS TERMINATOR INSTEAD OF NEWLINE? */

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
      start: 'style\\s+',
      end: '\\s*(?:\\([^){]*\\)\\s*)?(?={)',
    })
  }

  private provideFunHover(document: TextDocument, position: Position) {
    return parseBlockAndProvideHover(
      document,
      position,
      /(?<!fun\s|[a-zA-Z0-9\.<])[a-z][a-zA-Z0-9]*(?![=a-zA-Z0-9])/,
      {
        start: 'fun\\s+',
        end: '\\s*(?:\\([^){]*\\)\\s*)?(?::\\s*[A-Z][a-z]*\\s*)?(?={)',
      }
    )
  }

  private provideComputedHover(document: TextDocument, position: Position) {
    return parseBlockAndProvideHover(
      document,
      position,
      /(?<!get\s|[a-zA-Z0-9\.<])[a-z][a-zA-Z0-9]*(?![=a-zA-Z0-9])/,
      {
        start: 'get\\s+',
        end: '\\s*(?:\\:\\s*[a-zA-Z0-9(), ]*\\s*)?(?={)',
      }
    )
  }

  private providePropertyAndStateHover(document: TextDocument, position: Position) {
    return parseAndProvideHover(
      document,
      position,
      /(?<!property\s|state\s|[a-zA-Z0-9\.<])[a-z][a-zA-Z0-9]*(?![=a-zA-Z0-9])/,
      {
        start: '(?:property\\s+|state\\s+)',
        end:
          '(?:\\:\\s*[a-zA-Z0-9(), ]*\\s*)?[\\s\\S]*?(?=property|state|get|fun|const|connect)',
      }
    )
  }

  private provideConstHover(document: TextDocument, position: Position) {
    return parseAndProvideHover(
      document,
      position,
      /(?<!const\s|[a-zA-Z0-9\.<:]):?[A-Z0-9_]+(?![=a-zA-Z0-9\._])/,
      {
        start: 'const\\s+',
        end: '\\s*=[\\s\\S]*?(?=property|state|get|fun|const|connect)',
      }
    )
  }
}
