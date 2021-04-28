import { commands, ShellExecution, Task, tasks, TaskScope, window } from 'vscode'

function runMintCommandAsTask(subcommand: string) {
  const execution = new ShellExecution(`mint ${subcommand}`)
  const task = new Task({ type: '' }, TaskScope.Workspace, subcommand, 'mint', execution)

  tasks.executeTask(task)
}

export default class Commands {
  constructor() {
    commands.registerCommand('mint-pie.build', () => runMintCommandAsTask('build'))
    commands.registerCommand('mint-pie.clean', () => runMintCommandAsTask('clean'))
    commands.registerCommand('mint-pie.compile', () => runMintCommandAsTask('compile'))
    commands.registerCommand('mint-pie.docs', () => runMintCommandAsTask('docs'))
    commands.registerCommand('mint-pie.format', () => runMintCommandAsTask('format'))
    commands.registerCommand('mint-pie.init', () => this.init())
    commands.registerCommand('mint-pie.install', () => runMintCommandAsTask('install'))
    commands.registerCommand('mint-pie.loc', () => runMintCommandAsTask('loc'))
    commands.registerCommand('mint-pie.ls', () => runMintCommandAsTask('ls'))
    commands.registerCommand('mint-pie.start', () => runMintCommandAsTask('start'))
    commands.registerCommand('mint-pie.test', () => runMintCommandAsTask('test'))
    commands.registerCommand('mint-pie.version', () => runMintCommandAsTask('version'))
  }

  private async init() {
    const projectName = await window.showInputBox({
      prompt: 'Type the name of your project',
      placeHolder: 'mint-project',
    })

    const folder = await window.showOpenDialog({
      canSelectFiles: false,
      canSelectFolders: true,
      canSelectMany: false,
      openLabel: 'Create project',
    })

    const newProjectRoot = (folder && `${folder[0].path}/${projectName}`) || ''

    runMintCommandAsTask(`init ${newProjectRoot}`)
  }
}
