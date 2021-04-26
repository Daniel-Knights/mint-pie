import { ExtensionContext, workspace } from 'vscode'
import CompletionProvider from './completion'
import ColorProvider from './color'
import FormattingProvider from './format'

export function activate(context: ExtensionContext): void {
  const workspaceConfig = workspace.getConfiguration('mint-pie')

  if (workspaceConfig.enableCompletions) {
    new CompletionProvider(context.subscriptions)
  }

  if (workspaceConfig.enableFormatter) {
    new FormattingProvider(context.subscriptions)
  }

  new ColorProvider(context.subscriptions)
}
