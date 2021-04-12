import { ExtensionContext } from 'vscode'
import Completion from './completion'

export function activate(context: ExtensionContext): void {
  new Completion(context.subscriptions)
}
