import { ExtensionContext } from 'vscode'
import CompletionProvider from './completion'
import ColorProvider from './color'
// import FormattingProvider from './format'

export function activate(context: ExtensionContext): void {
  new CompletionProvider(context.subscriptions)
  new ColorProvider(context.subscriptions)
  // new FormattingProvider(context.subscriptions)
}
