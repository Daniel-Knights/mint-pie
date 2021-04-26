import { ExtensionContext, workspace } from 'vscode'
import CompletionProvider from './completion'
import ColorProvider from './color'
import FormattingProvider from './format'
import Commands from './commands'

export let workspaceConfig = workspace.getConfiguration('mint-pie')

workspace.onDidChangeConfiguration(() => {
  workspaceConfig = workspace.getConfiguration('mint-pie')
})

export function activate(context: ExtensionContext): void {
  if (workspaceConfig.enableCompletions) {
    new CompletionProvider(context.subscriptions)
  }

  if (workspaceConfig.enableFormatter) {
    new FormattingProvider(context.subscriptions)
  }

  new Commands()
  new ColorProvider(context.subscriptions)
}
