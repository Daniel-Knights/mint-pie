export type ColorConversionFunction = (match: RegExpMatchArray) => RGBA | void

export type RGBA = {
  r: number
  g: number
  b: number
  a: number
}

export type Snippet = {
  prefix: string
  body: string
  description?: string
}

export type Delimiters = {
  open: string
  close: string
}
