import { ExtensionContext, workspace } from 'vscode'

import CompletionProvider from './completion'
import FormattingProvider from './format'
import HoverProvider from './hover'
import LanguageConfig from './language'
import ColorProvider from './color'
import Commands from './commands'

export let workspaceConfig = workspace.getConfiguration('mint-pie')

workspace.onDidChangeConfiguration(() => {
  workspaceConfig = workspace.getConfiguration('mint-pie')
})

export function activate(context: ExtensionContext): void {
  const { enableCompletions, enableFormatter, enableHovers } = workspaceConfig
  const { subscriptions } = context

  enableCompletions && new CompletionProvider(subscriptions)
  enableFormatter && new FormattingProvider(subscriptions)
  enableHovers && new HoverProvider(subscriptions)

  new LanguageConfig(subscriptions)
  new ColorProvider(subscriptions)
  new Commands()
}
