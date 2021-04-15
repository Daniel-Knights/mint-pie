/**
 * @property `r`: `number`
 * @property `g`: `number`
 * @property `b`: `number`
 * @property `a`: `number`
 */
export interface RGBA {
  r: number
  g: number
  b: number
  a: number
}

export type ColorConversionFunction = (match: RegExpMatchArray) => RGBA | void

/**
 * @property `prefix`: `string`
 * @property `body`: `string`
 * @property `description?`: `string`
 */
export interface Snippet {
  prefix: string
  body: string
  description?: string
}
