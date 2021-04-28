import { Hover, languages } from 'vscode'

export default class HoverProvider {
  constructor() {
    languages.registerHoverProvider('mint', {
      provideHover(document, position) {
        return new Hover(document.lineAt(position).text)
      },
    })
  }
}
