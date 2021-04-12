export default [
  {
    prefix: '@font-face',
    body: '@font-face {\t$1}',
    description: 'CSS `@font-face` rule',
    values: [
      'font-family: $1;',
      'src: $1;',
      'font-stretch: $1;',
      'font-style: $1;',
      'font-weight: $1;',
      'unicode-range: $1;'
    ]
  },
  {
    prefix: '@import',
    body: '@import "$1";',
    description: 'CSS `@import "";` rule'
  },
  {
    prefix: '@keyframes',
    body: '@keyframes $1 {\t$1}',
    description: 'CSS `@keyframes` rule'
  },
  {
    prefix: '@media',
    body: '@media ($1) {\t$1}',
    description: 'CSS `@media` rule'
  },
  {
    prefix: '@supports',
    body: '@supports ($1) {\t$1}',
    description: 'CSS `@supports` rule'
  },
  {
    prefix: 'align-content',
    body: 'align-content: $1;',
    description: 'CSS `align-content: ;` property',
    values: [
      'stretch',
      'center',
      'flex-start',
      'flex-end',
      'space-between',
      'space-around',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'align-items',
    body: 'align-items: $1;',
    description: 'CSS `align-items: ;` property',
    values: [
      'stretch',
      'center',
      'flex-start',
      'flex-end',
      'baseline',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'align-self',
    body: 'align-self: $1;',
    description: 'CSS `align-self: ;` property',
    values: [
      'auto',
      'stretch',
      'center',
      'flex-start',
      'flex-end',
      'baseline',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'animation',
    body: 'animation: $1;',
    description: 'CSS `animation: ;` property',
    values: ['initial', 'inherit', 'unset']
  },
  {
    prefix: 'animation-delay',
    body: 'animation-delay: $1;',
    description: 'CSS `animation-delay: ;` property',
    values: ['$1s', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'animation-direction',
    body: 'animation-direction: $1;',
    description: 'CSS `animation-direction: ;` property',
    values: [
      'normal',
      'reverse',
      'alternate',
      'alternate-reverse',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'animation-duration',
    body: 'animation-duration: $1;',
    description: 'CSS `animation-duration: ;` property',
    values: ['$1s', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'animation-fill-mode',
    body: 'animation-fill-mode: $1;',
    description: 'CSS `animation-fill-mode: ;` property',
    values: ['none', 'forwards', 'backwards', 'both', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'animation-iteration-count',
    body: 'animation-iteration-count: $1;',
    description: 'CSS `animation-iteration-count: ;` property',
    values: ['infinite', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'animation-name',
    body: 'animation-name: $1;',
    description: 'CSS `animation-name: ;` property',
    values: ['none', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'animation-play-state',
    body: 'animation-play-state: $1;',
    description: 'CSS `animation-play-state: ;` property',
    values: ['paused', 'running', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'animation-timing-function',
    body: 'animation-timing-function: $1;',
    description: 'CSS `animation-timing-function: ;` property',
    values: [
      'linear',
      'ease',
      'ease-in',
      'ease-out',
      'ease-in-out',
      'cubic-bezier($1, $2, $3, $4)',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'backface-visibility',
    body: 'backface-visibility: $1;',
    description: 'CSS `backface-visibility: ;` property',
    values: ['visible', 'hidden', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'background',
    body: 'background: $1;',
    description: 'CSS `background: ;` property',
    values: ['initial', 'inherit', 'unset']
  },
  {
    prefix: 'background-attachment',
    body: 'background-attachment: $1;',
    description: 'CSS `background-attachment: ;` property',
    values: ['scroll', 'fixed', 'local', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'background-blend-mode',
    body: 'background-blend-mode: $1;',
    description: 'CSS `background-blend-mode: ;` property',
    values: [
      'normal',
      'multiply',
      'screen',
      'overlay',
      'darken',
      'lighten',
      'color-dodge',
      'saturation',
      'color',
      'luminosity',
      'unset'
    ]
  },
  {
    prefix: 'background-clip',
    body: 'background-clip: $1;',
    description: 'CSS `background-clip: ;` property',
    values: ['border-box', 'padding-box', 'content-box', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'background-color',
    body: 'background-color: $1;',
    description: 'CSS `background-color: ;` property',
    values: [
      '#',
      'rgb($1, $2, $3)',
      'rgba($1, $2, $3, $4)',
      'hsl($1, $2, $3)',
      'hsla($1, $2, $3, $4)',
      'transparent',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'background-image',
    body: 'background-image: $1;',
    description: 'CSS `background-image: ;` property',
    values: ['url("$1")', 'none', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'background-origin',
    body: 'background-origin: $1;',
    description: 'CSS `background-origin: ;` property',
    values: ['padding-box', 'border-box', 'content-box', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'background-position',
    body: 'background-position: $1;',
    description: 'CSS `background-position: ;` property',
    values: ['initial', 'inherit', 'unset']
  },
  {
    prefix: 'background-repeat',
    body: 'background-repeat: $1;',
    description: 'CSS `background-repeat: ;` property',
    values: ['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'background-size',
    body: 'background-size: $1;',
    description: 'CSS `background-size: ;` property',
    values: ['auto', 'cover', 'contain', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border',
    body: 'border: $1;',
    description: 'CSS `border: ;` property',
    values: ['$1px ${2:solid} $3', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-bottom',
    body: 'border-bottom: $1;',
    description: 'CSS `border-bottom: ;` property',
    values: ['$1px ${2:solid} $3', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-bottom-color',
    body: 'border-bottom-color: $1;',
    description: 'CSS `border-bottom-color: ;` property',
    values: [
      '#',
      'rgb($1, $2, $3)',
      'rgba($1, $2, $3, $4)',
      'hsl($1, $2, $3)',
      'hsla($1, $2, $3, $4)',
      'transparent',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'border-bottom-left-radius',
    body: 'border-bottom-left-radius: $1;',
    description: 'CSS `border-bottom-left-radius: ;` property',
    values: ['$1px', '$1%', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-bottom-right-radius',
    body: 'border-bottom-right-radius: $1;',
    description: 'CSS `border-bottom-right-radius: ;` property',
    values: ['$1px', '$1%', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-bottom-style',
    body: 'border-bottom-style: $1;',
    description: 'CSS `border-bottom-style: ;` property',
    values: [
      'none',
      'hidden',
      'dotted',
      'dashed',
      'solid',
      'double',
      'groove',
      'ridge',
      'inset',
      'outset',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'border-bottom-width',
    body: 'border-bottom-width: $1;',
    description: 'CSS `border-bottom-width: ;` property',
    values: ['$1px', 'medium', 'thin', 'thick', 'length', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-collapse',
    body: 'border-collapse: $1;',
    description: 'CSS `border-collapse: ;` property',
    values: ['separate', 'collapse', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-color',
    body: 'border-color: $1;',
    description: 'CSS `border-color: ;` property',
    values: [
      '#',
      'rgb($1, $2, $3)',
      'rgba($1, $2, $3, $4)',
      'hsl($1, $2, $3)',
      'hsla($1, $2, $3, $4)',
      'transparent',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'border-image',
    body: 'border-image: $1;',
    description: 'CSS `border-image: ;` property',
    values: ['initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-image-outset',
    body: 'border-image-outset: $1;',
    description: 'CSS `border-image-outset: ;` property',
    values: ['initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-image-repeat',
    body: 'border-image-repeat: $1;',
    description: 'CSS `border-image-repeat: ;` property',
    values: ['stretch', 'repeat', 'round', 'space', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-image-slice',
    body: 'border-image-slice: $1;',
    description: 'CSS `border-image-slice: ;` property',
    values: ['fill', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-image-source',
    body: 'border-image-source: $1;',
    description: 'CSS `border-image-source: ;` property',
    values: ['none', 'url("$1")', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-image-width',
    body: 'border-image-width: $1;',
    description: 'CSS `border-image-width: ;` property',
    values: ['auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-left',
    body: 'border-left: $1;',
    description: 'CSS `border-left: ;` property',
    values: ['$1px ${2:solid} $3', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-left-color',
    body: 'border-left-color: $1;',
    description: 'CSS `border-left-color: ;` property',
    values: [
      '#',
      'rgb($1, $2, $3)',
      'rgba($1, $2, $3, $4)',
      'hsl($1, $2, $3)',
      'hsla($1, $2, $3, $4)',
      'transparent',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'border-left-style',
    body: 'border-left-style: $1;',
    description: 'CSS `border-left-style: ;` property',
    values: [
      'none',
      'hidden',
      'dotted',
      'dashed',
      'solid',
      'double',
      'groove',
      'ridge',
      'inset',
      'outset',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'border-left-width',
    body: 'border-left-width: $1;',
    description: 'CSS `border-left-width: ;` property',
    values: ['$1px', 'medium', 'thin', 'thick', 'length', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-radius',
    body: 'border-radius: $1;',
    description: 'CSS `border-radius: ;` property',
    values: ['$1px', '$1%', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-right',
    body: 'border-right: $1;',
    description: 'CSS `border-right: ;` property',
    values: ['$1px ${2:solid} $3', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-right-color',
    body: 'border-right-color: $1;',
    description: 'CSS `border-right-color: ;` property',
    values: [
      '#',
      'rgb($1, $2, $3)',
      'rgba($1, $2, $3, $4)',
      'hsl($1, $2, $3)',
      'hsla($1, $2, $3, $4)',
      'transparent',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'border-right-style',
    body: 'border-right-style: $1;',
    description: 'CSS `border-right-style: ;` property',
    values: [
      'none',
      'hidden',
      'dotted',
      'dashed',
      'solid',
      'double',
      'groove',
      'ridge',
      'inset',
      'outset',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'border-right-width',
    body: 'border-right-width: $1;',
    description: 'CSS `border-right-width: ;` property',
    values: ['$1px', 'medium', 'thin', 'thick', 'length', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-spacing',
    body: 'border-spacing: $1;',
    description: 'CSS `border-spacing: ;` property',
    values: ['initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-style',
    body: 'border-style: $1;',
    description: 'CSS `border-style: ;` property',
    values: [
      'none',
      'hidden',
      'dotted',
      'dashed',
      'solid',
      'double',
      'groove',
      'ridge',
      'inset',
      'outset',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'border-top',
    body: 'border-top: $1;',
    description: 'CSS `border-top: ;` property',
    values: ['$1px ${2:solid} $3', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-top-color',
    body: 'border-top-color: $1;',
    description: 'CSS `border-top-color: ;` property',
    values: [
      '#',
      'rgb($1, $2, $3)',
      'rgba($1, $2, $3, $4)',
      'hsl($1, $2, $3)',
      'hsla($1, $2, $3, $4)',
      'transparent',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'border-top-left-radius',
    body: 'border-top-left-radius: $1;',
    description: 'CSS `border-top-left-radius: ;` property',
    values: ['$1px', '$1%', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-top-right-radius',
    body: 'border-top-right-radius: $1;',
    description: 'CSS `border-top-right-radius: ;` property',
    values: ['$1px', '$1%', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-top-style',
    body: 'border-top-style: $1;',
    description: 'CSS `border-top-style: ;` property',
    values: [
      'none',
      'hidden',
      'dotted',
      'dashed',
      'solid',
      'double',
      'groove',
      'ridge',
      'inset',
      'outset',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'border-top-width',
    body: 'border-top-width: $1;',
    description: 'CSS `border-top-width: ;` property',
    values: ['$1px', 'medium', 'thin', 'thick', 'length', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'border-width',
    body: 'border-width: $1;',
    description: 'CSS `border-width: ;` property',
    values: ['$1px', 'medium', 'thin', 'thick', 'length', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'bottom',
    body: 'bottom: $1;',
    description: 'CSS `bottom: ;` property',
    values: ['$1px', '$1%', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'box-decoration-break',
    body: 'box-decoration-break: $1;',
    description: 'CSS `box-decoration-break: ;` property',
    values: ['slice', 'clone', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'box-shadow',
    body: 'box-shadow: $1;',
    description: 'CSS `box-shadow: ;` property',
    values: ['$1px $2px $3px $4px #$5', 'none', 'inset', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'box-sizing',
    body: 'box-sizing: $1;',
    description: 'CSS `box-sizing: ;` property',
    values: ['content-box', 'border-box', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'break-after',
    body: 'break-after: $1;',
    description: 'CSS `break-after: ;` property',
    values: [
      'auto',
      'all',
      'always',
      'avoid',
      'avoid-column',
      'avoid-page',
      'avoid-region',
      'column',
      'left',
      'page',
      'recto',
      'region',
      'right',
      'verso',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'break-before',
    body: 'break-before: $1;',
    description: 'CSS `break-before: ;` property',
    values: [
      'auto',
      'all',
      'always',
      'avoid',
      'avoid-column',
      'avoid-page',
      'avoid-region',
      'column',
      'left',
      'page',
      'recto',
      'region',
      'right',
      'verso',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'break-inside',
    body: 'break-inside: $1;',
    description: 'CSS `break-inside: ;` property',
    values: [
      'auto',
      'all',
      'always',
      'avoid',
      'avoid-column',
      'avoid-page',
      'avoid-region',
      'column',
      'left',
      'page',
      'recto',
      'region',
      'right',
      'verso',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'caption-side',
    body: 'caption-side: $1;',
    description: 'CSS `caption-side: ;` property',
    values: ['top', 'bottom', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'caret-color',
    body: 'caret-color: $1;',
    description: 'CSS `caret-color: ;` property',
    values: ['#', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'clear',
    body: 'clear: $1;',
    description: 'CSS `clear: ;` property',
    values: ['none', 'left', 'right', 'both', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'clip',
    body: 'clip: $1;',
    description: 'CSS `clip: ;` property',
    values: ['rect($1px, $2px, $3px, $4px)', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'color',
    body: 'color: $1;',
    description: 'CSS `color: ;` property',
    values: [
      '#',
      'rgb($1, $2, $3)',
      'rgba($1, $2, $3, $4)',
      'hsl($1, $2, $3)',
      'hsla($1, $2, $3, $4)',
      'transparent',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'column-count',
    body: 'column-count: $1;',
    description: 'CSS `column-count: ;` property',
    values: ['auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'column-fill',
    body: 'column-fill: $1;',
    description: 'CSS `column-fill: ;` property',
    values: ['balance', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'column-gap',
    body: 'column-gap: $1;',
    description: 'CSS `column-gap: ;` property',
    values: ['$1px', 'normal', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'column-rule',
    body: 'column-rule: $1;',
    description: 'CSS `column-rule: ;` property',
    values: ['$1px solid #$2', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'column-rule-color',
    body: 'column-rule-color: $1;',
    description: 'CSS `column-rule-color: ;` property',
    values: [
      '#',
      'rgb($1, $2, $3)',
      'rgba($1, $2, $3, $4)',
      'hsl($1, $2, $3)',
      'hsla($1, $2, $3, $4)',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'column-rule-style',
    body: 'column-rule-style: $1;',
    description: 'CSS `column-rule-style: ;` property',
    values: [
      'none',
      'hidden',
      'dotted',
      'dashed',
      'solid',
      'double',
      'groove',
      'ridge',
      'inset',
      'outset',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'column-rule-width',
    body: 'column-rule-width: $1;',
    description: 'CSS `column-rule-width: ;` property',
    values: ['$1px', 'medium', 'thin', 'thick', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'column-span',
    body: 'column-span: $1;',
    description: 'CSS `column-span: ;` property',
    values: ['all', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'column-width',
    body: 'column-width: $1;',
    description: 'CSS `column-width: ;` property',
    values: ['$1px', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'columns',
    body: 'columns: $1;',
    description: 'CSS `columns: ;` property',
    values: ['$1px $2', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'content',
    body: 'content: $1;',
    description: 'CSS `content: ;` property',
    values: [
      '"$1"',
      'normal',
      'none',
      'counter($1)',
      'attr($1)',
      'open-quote',
      'close-quote',
      'no-open-quote',
      'no-close-quote',
      'url($1)',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'counter-increment',
    body: 'counter-increment: $1;',
    description: 'CSS `counter-increment: ;` property',
    values: ['none', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'counter-reset',
    body: 'counter-reset: $1;',
    description: 'CSS `counter-reset: ;` property',
    values: ['none', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'cursor',
    body: 'cursor: $1;',
    description: 'CSS `cursor: ;` property',
    values: [
      'alias',
      'all-scroll',
      'auto',
      'cell',
      'context-menu',
      'col-resize',
      'copy',
      'crosshair',
      'default',
      'e-resize',
      'ew-resize',
      'grab',
      'grabbing',
      'help',
      'move',
      'n-resize',
      'ne-resize',
      'nesw-resize',
      'ns-resize',
      'nw-resize',
      'nwse-resize',
      'no-drop',
      'none',
      'not-allowed',
      'pointer',
      'progress',
      'row-resize',
      's-resize',
      'se-resize',
      'sw-resize',
      'text',
      'url($1), auto',
      'vertical-text',
      'w-resize',
      'wait',
      'zoom-in',
      'zoom-out',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'direction',
    body: 'direction: $1;',
    description: 'CSS `direction: ;` property',
    values: ['ltr', 'rtl', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'display',
    body: 'display: $1;',
    description: 'CSS `display: ;` property',
    values: [
      'inline',
      'block',
      'flex',
      'grid',
      'inline-block',
      'inline-flex',
      'inline-grid',
      'inline-table',
      'list-item',
      'run-in',
      'table',
      'table-caption',
      'table-column-group',
      'table-header-group',
      'table-footer-group',
      'table-row-group',
      'table-cell',
      'table-column',
      'table-row',
      'none',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'empty-cells',
    body: 'empty-cells: $1;',
    description: 'CSS `empty-cells: ;` property',
    values: ['show', 'hide', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'filter',
    body: 'filter: $1;',
    description: 'CSS `filter: ;` property',
    values: [
      'blur($1px)',
      'brightness($1%)',
      'contrast($1%)',
      'drop-shadow($1px $2px $3px $4px #$5)',
      'grayscale($1%)',
      'hue-rotate($1deg)',
      'invert($1%)',
      'opacity($1%)',
      'saturate($1%)',
      'sepia($1%)',
      'url($1)',
      'none',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'flex',
    body: 'flex: $1;',
    description: 'CSS `flex: ;` property',
    values: ['auto', 'initial', 'none', 'inherit', 'unset']
  },
  {
    prefix: 'flex-basis',
    body: 'flex-basis: $1;',
    description: 'CSS `flex-basis: ;` property',
    values: ['auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'flex-direction',
    body: 'flex-direction: $1;',
    description: 'CSS `flex-direction: ;` property',
    values: [
      'column',
      'column-reverse',
      'row',
      'row-reverse',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'flex-flow',
    body: 'flex-flow: $1;',
    description: 'CSS `flex-flow: ;` property',
    values: ['initial', 'inherit', 'unset']
  },
  {
    prefix: 'flex-grow',
    body: 'flex-grow: $1;',
    description: 'CSS `flex-grow: ;` property',
    values: ['initial', 'inherit', 'unset']
  },
  {
    prefix: 'flex-shrink',
    body: 'flex-shrink: $1;',
    description: 'CSS `flex-shrink: ;` property',
    values: ['initial', 'inherit', 'unset']
  },
  {
    prefix: 'flex-wrap',
    body: 'flex-wrap: $1;',
    description: 'CSS `flex-wrap: ;` property',
    values: ['nowrap', 'wrap', 'wrap-reverse', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'float',
    body: 'float: $1;',
    description: 'CSS `float: ;` property',
    values: ['none', 'left', 'right', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'font',
    body: 'font: $1;',
    description: 'CSS `font: ;` property',
    values: [
      '$1 $2px ${3:Arial}, sans-serif',
      'caption',
      'icon',
      'menu',
      'message-box',
      'small-caption',
      'status-bar',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'font-family',
    body: 'font-family: $1;',
    description: 'CSS `font-family: ;` property',
    values: ['${1:Arial}, sans-serif', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'font-feature-settings',
    body: 'font-feature-settings: $1;',
    description: 'CSS `font-feature-settings: ;` property'
  },
  {
    prefix: 'font-kerning',
    body: 'font-kerning: $1;',
    description: 'CSS `font-kerning: ;` property',
    values: ['auto', 'normal', 'none', 'unset']
  },
  {
    prefix: 'font-size',
    body: 'font-size: $1;',
    description: 'CSS `font-size: ;` property',
    values: [
      '$1px',
      '$1%',
      'medium',
      'xx-small',
      'x-small',
      'small',
      'large',
      'x-large',
      'xx-large',
      'smaller',
      'larger',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'font-size-adjust',
    body: 'font-size-adjust: $1;',
    description: 'CSS `font-size-adjust: ;` property',
    values: ['none', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'font-stretch',
    body: 'font-stretch: $1;',
    description: 'CSS `font-stretch: ;` property',
    values: [
      'ultra-condensed',
      'extra-condensed',
      'condensed',
      'semi-condensed',
      'normal',
      'semi-expanded',
      'expanded',
      'extra-expanded',
      'ultra-expanded',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'font-style',
    body: 'font-style: $1;',
    description: 'CSS `font-style: ;` property',
    values: ['normal', 'italic', 'oblique', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'font-variant',
    body: 'font-variant: $1;',
    description: 'CSS `font-variant: ;` property',
    values: ['normal', 'small-caps', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'font-variant-caps',
    body: 'font-variant-caps: $1;',
    description: 'CSS `font-variant-caps: ;` property'
  },
  {
    prefix: 'font-weight',
    body: 'font-weight: $1;',
    description: 'CSS `font-weight: ;` property',
    values: [
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
      'normal',
      'bold',
      'bolder',
      'lighter',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'gap',
    body: 'gap: $1;',
    description: 'CSS `gap: ;` property',
    values: ['$1px', 'unset']
  },
  {
    prefix: 'grid',
    body: 'grid: $1;',
    description: 'CSS `grid: ;` property',
    values: ['none', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'grid-area',
    body: 'grid-area: $1;',
    description: 'CSS `grid-area: ;` property'
  },
  {
    prefix: 'grid-auto-columns',
    body: 'grid-auto-columns: $1;',
    description: 'CSS `grid-auto-columns: ;` property',
    values: [
      '$1px',
      '$1%',
      'minmax($1, $2)',
      'fit-content',
      'max-content',
      'min-content',
      'auto',
      'unset'
    ]
  },
  {
    prefix: 'grid-auto-flow',
    body: 'grid-auto-flow: $1;',
    description: 'CSS `grid-auto-flow: ;` property',
    values: ['row', 'column', 'dense', 'row dense', 'column dense', 'unset']
  },
  {
    prefix: 'grid-auto-rows',
    body: 'grid-auto-rows: $1;',
    description: 'CSS `grid-auto-rows: ;` property',
    values: ['$1px', '$1%', 'max-content', 'min-content', 'auto', 'unset']
  },
  {
    prefix: 'grid-column',
    body: 'grid-column: $1;',
    description: 'CSS `grid-column: ;` property'
  },
  {
    prefix: 'grid-column-end',
    body: 'grid-column-end: $1;',
    description: 'CSS `grid-column-end: ;` property',
    values: ['span $1', 'auto', 'unset']
  },
  {
    prefix: 'grid-column-gap',
    body: 'grid-column-gap: $1;',
    description: 'CSS `grid-column-gap: ;` property',
    values: ['$1px', '$1%', 'unset']
  },
  {
    prefix: 'grid-column-start',
    body: 'grid-column-start: $1;',
    description: 'CSS `grid-column-start: ;` property',
    values: ['span $1', 'auto', 'unset']
  },
  {
    prefix: 'grid-row',
    body: 'grid-row: $1;',
    description: 'CSS `grid-row: ;` property'
  },
  {
    prefix: 'grid-row-end',
    body: 'grid-row-end: $1;',
    description: 'CSS `grid-row-end: ;` property',
    values: ['span $1', 'auto', 'unset']
  },
  {
    prefix: 'grid-row-gap',
    body: 'grid-row-gap: $1;',
    description: 'CSS `grid-row-gap: ;` property',
    values: ['$1px', '$1%', 'unset']
  },
  {
    prefix: 'grid-row-start',
    body: 'grid-row-start: $1;',
    description: 'CSS `grid-row-start: ;` property',
    values: ['span $1', 'auto', 'unset']
  },
  {
    prefix: 'grid-template',
    body: 'grid-template: $1;',
    description: 'CSS `grid-template: ;` property',
    values: ['none', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'grid-template-areas',
    body: 'grid-template-areas: $1;',
    description: 'CSS `grid-template-areas: ;` property',
    values: ['"$1"', 'none', 'unset']
  },
  {
    prefix: 'grid-template-columns',
    body: 'grid-template-columns: $1;',
    description: 'CSS `grid-template-columns: ;` property',
    values: [
      '$1px',
      '$1%',
      'max-content',
      'min-content',
      'none',
      'auto',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'grid-template-rows',
    body: 'grid-template-rows: $1;',
    description: 'CSS `grid-template-rows: ;` property',
    values: [
      '$1px',
      '$1%',
      'max-content',
      'min-content',
      'none',
      'auto',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'height',
    body: 'height: $1;',
    description: 'CSS `height: ;` property',
    values: ['$1px', '$1%', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'hyphens',
    body: 'hyphens: $1;',
    description: 'CSS `hyphens: ;` property',
    values: ['none', 'manual', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'isolation',
    body: 'isolation: $1;',
    description: 'CSS `isolation: ;` property',
    values: ['auto', 'isolate', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'justify-content',
    body: 'justify-content: $1;',
    description: 'CSS `justify-content: ;` property',
    values: [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'left',
    body: 'left: $1;',
    description: 'CSS `left: ;` property',
    values: ['$1px', '$1%', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'letter-spacing',
    body: 'letter-spacing: $1;',
    description: 'CSS `letter-spacing: ;` property',
    values: ['$1px', 'normal', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'line-height',
    body: 'line-height: $1;',
    description: 'CSS `line-height: ;` property',
    values: ['$1px', 'normal', '$1%', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'list-style',
    body: 'list-style: $1;',
    description: 'CSS `list-style: ;` property',
    values: ['initial', 'inherit', 'unset']
  },
  {
    prefix: 'list-style-image',
    body: 'list-style-image: $1;',
    description: 'CSS `list-style-image: ;` property',
    values: ['url("$1")', 'none', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'list-style-position',
    body: 'list-style-position: $1;',
    description: 'CSS `list-style-position: ;` property',
    values: ['inside', 'outside', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'list-style-type',
    body: 'list-style-type: $1;',
    description: 'CSS `list-style-type: ;` property',
    values: [
      'disc',
      'armenian',
      'circle',
      'cjk-ideographic',
      'decimal',
      'decimal-leading-zero',
      'georgian',
      'hebrew',
      'hiragana',
      'hiragana-iroha',
      'katakana',
      'katakana-iroha',
      'lower-alpha',
      'lower-greek',
      'lower-latin',
      'lower-roman',
      'none',
      'square',
      'upper-alpha',
      'upper-latin',
      'upper-roman',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'margin',
    body: 'margin: $1;',
    description: 'CSS `margin: ;` property',
    values: ['$1px', '$1%', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'margin-bottom',
    body: 'margin-bottom: $1;',
    description: 'CSS `margin-bottom: ;` property',
    values: ['$1px', '$1%', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'margin-left',
    body: 'margin-left: $1;',
    description: 'CSS `margin-left: ;` property',
    values: ['$1px', '$1%', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'margin-right',
    body: 'margin-right: $1;',
    description: 'CSS `margin-right: ;` property',
    values: ['$1px', '$1%', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'margin-top',
    body: 'margin-top: $1;',
    description: 'CSS `margin-top: ;` property',
    values: ['$1px', '$1%', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'max-height',
    body: 'max-height: $1;',
    description: 'CSS `max-height: ;` property',
    values: ['$1px', '$1%', 'none', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'max-width',
    body: 'max-width: $1;',
    description: 'CSS `max-width: ;` property',
    values: ['$1px', '$1%', 'none', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'min-height',
    body: 'min-height: $1;',
    description: 'CSS `min-height: ;` property',
    values: ['$1px', '$1%', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'min-width',
    body: 'min-width: $1;',
    description: 'CSS `min-width: ;` property',
    values: ['$1px', '$1%', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'object-fit',
    body: 'object-fit: $1;',
    description: 'CSS `object-fit: ;` property',
    values: [
      'fill',
      'contain',
      'cover',
      'scale-down',
      'none',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'object-position',
    body: 'object-position: $1;',
    description: 'CSS `object-position: ;` property',
    value: ['initial', 'inherit', 'unset']
  },
  {
    prefix: 'opacity',
    body: 'opacity: $1;',
    description: 'CSS `opacity: ;` property',
    values: ['initial', 'inherit', 'unset']
  },
  {
    prefix: 'order',
    body: 'order: $1;',
    description: 'CSS `order: ;` property',
    values: ['initial', 'inherit', 'unset']
  },
  {
    prefix: 'outline',
    body: 'outline: $1;',
    description: 'CSS `outline: ;` property',
    values: ['$1px solid #$2', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'outline-color',
    body: 'outline-color: $1;',
    description: 'CSS `outline-color: ;` property',
    values: [
      '#',
      'rgb($1, $2, $3)',
      'rgba($1, $2, $3, $4)',
      'hsl($1, $2, $3)',
      'hsla($1, $2, $3, $4)',
      'invert',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'outline-offset',
    body: 'outline-offset: $1;',
    description: 'CSS `outline-offset: ;` property',
    values: ['$1px', '$1%', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'outline-style',
    body: 'outline-style: $1;',
    description: 'CSS `outline-style: ;` property',
    values: [
      'none',
      'hidden',
      'dotted',
      'dashed',
      'solid',
      'double',
      'groove',
      'ridge',
      'inset',
      'outset',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'outline-width',
    body: 'outline-width: $1;',
    description: 'CSS `outline-width: ;` property',
    values: ['$1px', 'medium', 'thin', 'thick', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'overflow',
    body: 'overflow : $1;',
    description: 'CSS `overflow : ;` property',
    values: ['visible', 'hidden', 'scroll', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'overflow-x',
    body: 'overflow-x: $1;',
    description: 'CSS `overflow-x: ;` property',
    values: ['visible', 'hidden', 'scroll', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'overflow-y',
    body: 'overflow-y: $1;',
    description: 'CSS `overflow-y: ;` property',
    values: ['visible', 'hidden', 'scroll', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'padding',
    body: 'padding: $1;',
    description: 'CSS `padding: ;` property',
    values: ['$1px', '$1%', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'padding-bottom',
    body: 'padding-bottom: $1;',
    description: 'CSS `padding-bottom: ;` property',
    values: ['$1px', '$1%', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'padding-left',
    body: 'padding-left: $1;',
    description: 'CSS `padding-left: ;` property',
    values: ['$1px', '$1%', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'padding-right',
    body: 'padding-right: $1;',
    description: 'CSS `padding-right: ;` property',
    values: ['$1px', '$1%', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'padding-top',
    body: 'padding-top: $1;',
    description: 'CSS `padding-top: ;` property',
    values: ['$1px', '$1%', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'page-break-after',
    body: 'page-break-after: $1;',
    description: 'CSS `page-break-after: ;` property',
    values: ['auto', 'always', 'avoid', 'left', 'right', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'page-break-before',
    body: 'page-break-before: $1;',
    description: 'CSS `page-break-before: ;` property',
    values: ['auto', 'always', 'avoid', 'left', 'right', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'page-break-inside',
    body: 'page-break-inside: $1;',
    description: 'CSS `page-break-inside: ;` property',
    values: ['auto', 'avoid', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'perspective',
    body: 'perspective: $1;',
    description: 'CSS `perspective: ;` property',
    values: ['$1px', 'none', 'unset']
  },
  {
    prefix: 'perspective-origin',
    body: 'perspective-origin: $1;',
    description: 'CSS `perspective-origin: ;` property',
    values: ['initial', 'inherit', 'unset']
  },
  {
    prefix: 'pointer-events',
    body: 'pointer-events: $1;',
    description: 'CSS `pointer-events: ;` property',
    values: ['auto', 'none', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'position',
    body: 'position: $1;',
    description: 'CSS `position: ;` property',
    values: [
      'relative',
      'absolute',
      'fixed',
      'sticky',
      'static',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'quotes',
    body: 'quotes: $1;',
    description: 'CSS `quotes: ;` property',
    values: [
      'none',
      'initial',
      'inherit',
      '"',
      "'",
      '‹',
      '›',
      '«',
      '»',
      '‘',
      '’',
      '“',
      '”',
      '„',
      'unset'
    ]
  },
  {
    prefix: 'resize',
    body: 'resize: $1;',
    description: 'CSS `resize: ;` property',
    values: ['none', 'both', 'horizontal', 'vertical', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'right',
    body: 'right: $1;',
    description: 'CSS `right: ;` property',
    values: ['$1px', '$1%', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'row-gap',
    body: 'row-gap: $1;',
    description: 'CSS `row-gap: ;` property',
    values: ['$1px', 'normal', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'scroll-behavior',
    body: 'scroll-behavior: $1;',
    description: 'CSS `scroll-behavior: ;` property',
    values: ['auto', 'smooth', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'tab-size',
    body: 'tab-size: $1;',
    description: 'CSS `tab-size: ;` property',
    values: ['initial', 'inherit', 'unset']
  },
  {
    prefix: 'table-layout',
    body: 'table-layout: $1;',
    description: 'CSS `table-layout: ;` property',
    values: ['auto', 'fixed', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'text-align',
    body: 'text-align: $1;',
    description: 'CSS `text-align: ;` property',
    values: ['left', 'right', 'center', 'justify', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'text-align-last',
    body: 'text-align-last: $1;',
    description: 'CSS `text-align-last: ;` property',
    values: [
      'auto',
      'left',
      'right',
      'center',
      'justify',
      'start',
      'end',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'text-decoration',
    body: 'text-decoration: $1;',
    description: 'CSS `text-decoration: ;` property',
    values: [
      'none',
      'underline',
      'overline',
      'line-through',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'text-decoration-color',
    body: 'text-decoration-color: $1;',
    description: 'CSS `text-decoration-color: ;` property',
    values: [
      '#',
      'rgb($1, $2, $3)',
      'rgba($1, $2, $3, $4)',
      'hsl($1, $2, $3)',
      'hsla($1, $2, $3, $4)',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'text-decoration-line',
    body: 'text-decoration-line: $1;',
    description: 'CSS `text-decoration-line: ;` property',
    values: [
      'none',
      'underline',
      'overline',
      'line-through',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'text-decoration-style',
    body: 'text-decoration-style: $1;',
    description: 'CSS `text-decoration-style: ;` property',
    values: ['solid', 'double', 'dotted', 'dashed', 'wavy', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'text-indent',
    body: 'text-indent: $1;',
    description: 'CSS `text-indent: ;` property',
    values: ['$1px', '$1%', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'text-justify',
    body: 'text-justify: $1;',
    description: 'CSS `text-justify: ;` property',
    values: [
      'auto',
      'inter-word',
      'inter-ideograph',
      'inter-cluster',
      'distribute',
      'kashida',
      'trim',
      'none',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'text-orientation',
    body: 'text-orientation: $1;',
    description: 'CSS `text-orientation: ;` property',
    values: [
      'mixed',
      'upright',
      'sideways',
      'sideways-right',
      'use-glyph-orientation',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'text-overflow',
    body: 'text-overflow: $1;',
    description: 'CSS `text-overflow: ;` property',
    values: ['ellipsis', 'clip', '"$1"', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'text-shadow',
    body: 'text-shadow: $1;',
    description: 'CSS `text-shadow: ;` property',
    values: ['$1px $2px $3px #$5', 'none', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'text-transform',
    body: 'text-transform: $1;',
    description: 'CSS `text-transform: ;` property',
    values: [
      'none',
      'capitalize',
      'uppercase',
      'lowercase',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'text-underline-position',
    body: 'text-underline-position: $1;',
    description: 'CSS `text-underline-position: ;` property'
  },
  {
    prefix: 'top',
    body: 'top: $1;',
    description: 'CSS `top: ;` property',
    values: ['$1px', '$1%', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'transform',
    body: 'transform: $1;',
    description: 'CSS `transform: ;` property',
    values: [
      'none',
      'matrix($1, $2, $3, $4, $5, $6)',
      'matrix3d($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)',
      'translate($1, $2)',
      'translate3d($1, $2, $3)',
      'translateX($1)',
      'translateY($1)',
      'translateZ($1)',
      'scale($1, $2)',
      'scale3d($1, $2, $3)',
      'scaleX($1)',
      'scaleY($1)',
      'scaleZ($1)',
      'rotate($1deg)',
      'rotate3d($1, $2, $3, $4deg)',
      'rotateX($1deg)',
      'rotateY($1deg)',
      'rotateZ($1deg)',
      'skew($1deg, $1deg)',
      'skewX($1deg)',
      'skewY($1deg)',
      'perspective($1)',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'transform-origin',
    body: 'transform-origin: $1;',
    description: 'CSS `transform-origin: ;` property',
    values: [
      'top',
      'left',
      'center',
      'right',
      'bottom',
      '$1px',
      '$1%',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'transform-style',
    body: 'transform-style: $1;',
    description: 'CSS `transform-style: ;` property',
    values: ['flat', 'preserve-3d', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'transition',
    body: 'transition: $1;',
    description: 'CSS `transition: ;` property',
    values: ['$1 0.15s', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'transition-delay',
    body: 'transition-delay: $1;',
    description: 'CSS `transition-delay: ;` property',
    values: ['$1s', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'transition-duration',
    body: 'transition-duration: $1;',
    description: 'CSS `transition-duration: ;` property',
    values: ['$1s', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'transition-property',
    body: 'transition-property: $1;',
    description: 'CSS `transition-property: ;` property',
    values: ['none', 'all', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'transition-timing-function',
    body: 'transition-timing-function: $1;',
    description: 'CSS `transition-timing-function: ;` property',
    values: [
      'ease',
      'linear',
      'ease-in',
      'ease-out',
      'ease-in-out',
      'cubic-bezier($1, $2, $3, $4)',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'unicode-bidi',
    body: 'unicode-bidi: $1;',
    description: 'CSS `unicode-bidi: ;` property',
    values: ['normal', 'embed', 'bidi-override', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'user-select',
    body: 'user-select: $1;',
    description: 'CSS `user-select: ;` property',
    values: ['auto', 'none', 'text', 'all', 'unset']
  },
  {
    prefix: 'vertical-align',
    body: 'vertical-align: $1;',
    description: 'CSS `vertical-align: ;` property',
    values: [
      'baseline',
      '$1px',
      '$1%',
      'sub',
      'super',
      'top',
      'text-top',
      'middle',
      'bottom',
      'text-bottom',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'visibility',
    body: 'visibility: $1;',
    description: 'CSS `visibility: ;` property',
    values: ['visible', 'hidden', 'collapse', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'white-space',
    body: 'white-space: $1;',
    description: 'CSS `white-space: ;` property',
    values: [
      'normal',
      'nowrap',
      'pre',
      'pre-line',
      'pre-wrap',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'width',
    body: 'width: $1;',
    description: 'CSS `width: ;` property',
    values: ['$1px', '$1%', 'auto', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'word-break',
    body: 'word-break: $1;',
    description: 'CSS `word-break: ;` property',
    values: [
      'normal',
      'break-all',
      'keep-all',
      'break-word',
      'initial',
      'inherit',
      'unset'
    ]
  },
  {
    prefix: 'word-spacing',
    body: 'word-spacing: $1;',
    description: 'CSS `word-spacing: ;` property',
    values: ['$1px', 'normal', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'word-wrap',
    body: 'word-wrap: $1;',
    description: 'CSS `word-wrap: ;` property',
    values: ['normal', 'break-word', 'initial', 'inherit', 'unset']
  },
  {
    prefix: 'writing-mode',
    body: 'writing-mode: $1;',
    description: 'CSS `writing-mode: ;` property',
    values: ['horizontal-tb', 'vertical-rl', 'vertical-lr', 'unset']
  },
  {
    prefix: 'z-index',
    body: 'z-index: $1;',
    description: 'CSS `z-index: ;` property',
    values: ['auto', 'initial', 'inherit', 'unset']
  }
]
