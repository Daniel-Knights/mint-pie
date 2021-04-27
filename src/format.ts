import {
  Disposable,
  languages,
  TextDocument,
  TextEdit,
  Range,
  Position,
  workspace,
} from 'vscode'
import { spawnSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
import { tmpdir } from 'os'
import { normalize, join } from 'path'
import { workspaceConfig } from './extension'

export default class FormattingProvider {
  constructor(subscriptions: Disposable[]) {
    const formattingProvider = languages.registerDocumentFormattingEditProvider('mint', {
      provideDocumentFormattingEdits: this.formatter,
    })

    subscriptions.push(formattingProvider)
  }

  /**
   * Creates a temporary file, formats the code there using Mint's
   * built-in formatter and then replaces the actual file's content.
   *
   * Adapted from https://github.com/mint-lang/mint-vscode/blob/master/src/formatter.ts
   */
  private formatter(document: TextDocument) {
    if (!workspaceConfig.enableFormatter) return

    const rootPath = workspace.workspaceFolders && workspace.workspaceFolders[0].uri.path
    const tempFile = normalize(join(tmpdir(), 'temp.mint'))

    writeFileSync(tempFile, document.getText())
    spawnSync('mint', ['format', tempFile], { cwd: rootPath })

    const formatted = readFileSync(tempFile, 'utf-8')

    const endPosition = document.lineAt(document.lineCount - 1).range.end
    const range = new Range(new Position(0, 0), endPosition)

    return [TextEdit.replace(range, formatted)]
  }
}
