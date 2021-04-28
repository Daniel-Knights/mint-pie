import {
  TextDocument,
  Range,
  Position,
  DiagnosticSeverity,
  DiagnosticRelatedInformation,
  Location,
  languages,
  workspace,
  Diagnostic,
} from 'vscode'

interface DiagnosticData {
  range: Range
  message: string
}

export default class DiagnosticHandler {
  constructor() {
    this.runDiagnostics()
    workspace.onDidChangeTextDocument(this.runDiagnostics.bind(this))
  }

  private collection = languages.createDiagnosticCollection('mint')

  private async runDiagnostics() {
    const allMintFiles = await workspace.findFiles('**/*.mint')

    allMintFiles.forEach((file) => {
      workspace.openTextDocument(file).then((doc) => {
        this.updateDiagnostics(doc)
      })
    })
  }

  private updateDiagnostics(document: TextDocument): void {
    const diagnostic = {
      range: new Range(new Position(5, 0), new Position(5, 10)),
      message: 'Error',
    }
    const relatedDiagnostics: DiagnosticData[] | undefined = undefined

    this.collection.set(document.uri, [
      this.createDiagnostic(document, diagnostic, relatedDiagnostics),
    ])
  }

  private createDiagnostic(
    document: TextDocument,
    diagnostic: DiagnosticData,
    relatedDiagnostics?: DiagnosticData[]
  ): Diagnostic {
    const relatedInformation = relatedDiagnostics?.map(
      (relatedDiagnostic: DiagnosticData) => {
        return new DiagnosticRelatedInformation(
          new Location(document.uri, relatedDiagnostic.range),
          relatedDiagnostic.message
        )
      }
    )

    return {
      code: '',
      message: diagnostic.message,
      range: diagnostic.range,
      severity: DiagnosticSeverity.Error,
      source: '',
      relatedInformation,
    }
  }
}
