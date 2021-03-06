export default {
  rgba: /(?<=\s|:|,|\()rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*((?:\d|\.)+))?\)(?=;|\s|:|,|\))/g,
  hex: /(?<=\s|:|,|\()(?:#)((?:[a-fA-F0-9]{2}){3,4}|[a-fA-F0-9]{3,4})(?=;|\s|:|,|\))/g,
  hsla: /(?<=\s|:|,|\()hsla?\((\d+),\s*(\d+)%,\s*(\d+)%(?:,\s*((?:\d|\.)+))?\)(?=;|\s|:|,|\))/g,
  colorNames: /(?<=\s|,|\()(?:aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|goldenrod|gold|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavenderblush|lavender|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)(?=\s|,|\)|;)/g,
  cssPropertyValue: /(?<=\s|;)(?:(?:[a-z]|-)+|#{.*}):\s*(?:[^;:{]*|[^;:{]*#{.*}[^;:{]*);/g,
  anyTag: /<\/?(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])*>/g,
  openingTag: /<[^/](?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,
  htmlFunOpening: /fun\s+render\s*{|fun\s+[a-zA-Z0-9]+\s*:\s*Html\s*{/,
  styleBlockOpening: /style\s+[a-zA-Z0-9]+\s*{/,
  increaseIndentPattern: /<(?!\?|(?:area|base|br|col|frame|hr|html|img|input|keygen|link|menuitem|meta|param|source|track|wbr)\b|[^>]*\/>)([-_.A-Za-z0-9]+)(?=\s|>)\b[^>]*>(?!.*<\/\1>)|<!--(?!.*-->)|\{[^}"']*$/,
  decreaseIndentPattern: /^\s*(<\/(?!html)[-_\.A-Za-z0-9]+\b[^>]*>|-->|\})/,
  wordPattern: /(-?\d*\.\d\w*)|([^`~!@$^&*()=+[{\]}\\|;:'",.<>/\s]+)/g,
  stringOrComment: /\/\*[\s\S]*\*\/|"(?:[^"]|\\")*(?<!\\)"/g,
  interpolation: /#{[a-zA-Z0-9\.(,) ]*}/,

  /* Sub-sections */
  type: '(?::\\s*[A-Z][a-z0-9A-Z(,):. ]*\\s*)?',
  untilLocalKeyword: '[\\s\\S]*?(?=property|state|get|fun|const|connect)',
  funParens: '(?:\\([^){]*\\)\\s*)?',
}
