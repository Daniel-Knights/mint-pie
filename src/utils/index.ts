import { workspace, WorkspaceConfiguration } from 'vscode'

export * from './color'
export * from './parse'

export function getWorkspaceConfig(): WorkspaceConfiguration {
  return workspace.getConfiguration('mint-pie')
}
