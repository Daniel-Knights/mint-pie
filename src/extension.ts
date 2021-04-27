import { ExtensionContext, workspace } from 'vscode'
import CompletionProvider from './completion'
import ColorProvider from './color'
import FormattingProvider from './format'
import Commands from './commands'
import LanguageConfig from './language'

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

  new LanguageConfig(context.subscriptions)
  new ColorProvider(context.subscriptions)
  new Commands()
}
