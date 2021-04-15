export default [
  {
    prefix: 'f',
    body: '<{ $1 }>',
    description: 'Mint HTML fragment: `<{  }>`',
  },
  {
    prefix: 'a',
    body: '<a href="$1">$2</a>$3',
    description: 'HTML `<a href=""></a>` tag',
  },
  {
    prefix: 'abbr',
    body: '<abbr title="$1">$2</abbr>$3',
    description: 'HTML `<abbr title=""></abbr>` tag',
  },
  {
    prefix: 'address',
    body: '<address>$1</address>$2',
    description: 'HTML `<address></address>` tag',
  },
  {
    prefix: 'area',
    body: '<area $1 />$2',
    description: 'HTML `<area />` tag',
  },
  {
    prefix: 'article',
    body: '<article>$1</article>$2',
    description: 'HTML `<article></article>` tag',
  },
  {
    prefix: 'aside',
    body: '<aside>$1</aside>$2',
    description: 'HTML `<aside></aside>` tag',
  },
  {
    prefix: 'audio',
    body: '<audio>$1</audio>$2',
    description: 'Tag: `<audio></audio>`',
  },
  {
    prefix: 'b',
    body: '<b>$1</b>$2',
    description: 'HTML `<b></b>` tag',
  },
  {
    prefix: 'base',
    body: '<base>$1</base>$2',
    description: 'Tag: `<base></base>`',
  },
  {
    prefix: 'bdi',
    body: '<bdi>$1</bdi>$2',
    description: 'Tag: `<bdi></bdi>`',
  },
  {
    prefix: 'bdo',
    body: '<bdo>$1</bdo>$2',
    description: 'Tag: `<bdo></bdo>`',
  },
  {
    prefix: 'blockquote',
    body: '<blockquote>$1</blockquote>$2',
    description: 'HTML `<blockquote cite=""></blockquote>` tag',
  },
  {
    prefix: 'br',
    body: '<br />',
    description: 'HTML `<br />` tag',
  },
  {
    prefix: 'button',
    body: '<button>$1</button>$2',
    description: 'HTML `<button></button>` tag',
  },
  {
    prefix: 'canvas',
    body: '<canvas>$1</canvas>$2',
    description: 'Tag: `<canvas></canvas>`',
  },
  {
    prefix: 'caption',
    body: '<caption>$1</caption>$2',
    description: 'HTML `<caption></caption>` tag',
  },
  {
    prefix: 'cite',
    body: '<cite>$1</cite>$2',
    description: 'HTML `<cite></cite>` tag',
  },
  {
    prefix: 'code',
    body: '<code>$1</code>$2',
    description: 'HTML `<code></code>` tag',
  },
  {
    prefix: 'col',
    body: '<col />',
    description: 'HTML `<col />` tag',
  },
  {
    prefix: 'colgroup',
    body: '<colgroup>$1</colgroup>$2',
    description: 'HTML `<colgroup></colgroup>` tag',
  },
  {
    prefix: 'data',
    body: '<data>$1</data>$2',
    description: 'Tag: `<data></data>`',
  },
  {
    prefix: 'datalist',
    body: '<datalist>$1</datalist>$2',
    description: 'HTML `<datalist></datalist>` tag',
  },
  {
    prefix: 'dd',
    body: '<dd>$1</dd>$2',
    description: 'HTML `<dd></dd>` tag',
  },
  {
    prefix: 'del',
    body: '<del>$1</del>$2',
    description: 'HTML `<del></del>` tag',
  },
  {
    prefix: 'details',
    body: '<details>$1</details>$2',
    description: 'HTML `<details></details>` tag',
  },
  {
    prefix: 'dialog',
    body: '<dialog>$1</dialog>$2',
    description: 'HTML `<dialog></dialog>` tag',
  },
  {
    prefix: 'dfn',
    body: '<dfn>$1</dfn>$2',
    description: 'HTML `<dfn></dfn>` tag',
  },
  {
    prefix: 'div',
    body: '<div>$1</div>$2',
    description: 'HTML `<div></div>` tag',
  },
  {
    prefix: 'dl',
    body: '<dl>$1</dl>$2',
    description: 'HTML `<dl></dl>` tag',
  },
  {
    prefix: 'dt',
    body: '<dt>$1</dt>$2',
    description: 'HTML `<dt></dt>` tag',
  },
  {
    prefix: 'em',
    body: '<em>$1</em>$2',
    description: 'HTML `<em></em>` tag',
  },
  {
    prefix: 'embed',
    body: '<embed>$1</embed>$2',
    description: 'Tag: `<embed></embed>`',
  },
  {
    prefix: 'fieldset',
    body: '<fieldset>$1</fieldset>$2',
    description: 'HTML `<fieldset></fieldset>` tag',
  },
  {
    prefix: 'figcaption',
    body: '<figcaption>$1</figcaption>$2',
    description: 'HTML `<figcaption></figcaption>` tag',
  },
  {
    prefix: 'figure',
    body: '<figure>$1</figure>$2',
    description: 'HTML `<figure></figure>` tag',
  },
  {
    prefix: 'footer',
    body: '<footer>$1</footer>$2',
    description: 'HTML `<footer></footer>` tag',
  },
  {
    prefix: 'form',
    body: '<form>$1</form>$2',
    description: 'HTML `<form></form>` tag',
  },
  {
    prefix: 'h1',
    body: '<h1>$1</h1>$2',
    description: 'HTML `<h1></h1>` tag',
  },
  {
    prefix: 'h2',
    body: '<h2>$1</h2>$2',
    description: 'HTML `<h2></h2>` tag',
  },
  {
    prefix: 'h3',
    body: '<h3>$1</h3>$2',
    description: 'HTML `<h3></h3>` tag',
  },
  {
    prefix: 'h4',
    body: '<h4>$1</h4>$2',
    description: 'HTML `<h4></h4>` tag',
  },
  {
    prefix: 'h5',
    body: '<h5>$1</h5>$2',
    description: 'HTML `<h5></h5>` tag',
  },
  {
    prefix: 'h6',
    body: '<h6>$1</h6>$2',
    description: 'HTML `<h6></h6>` tag',
  },
  {
    prefix: 'header',
    body: '<header>$1</header>$2',
    description: 'HTML `<header></header>` tag',
  },
  {
    prefix: 'hr',
    body: '<hr />',
    description: 'HTML `<hr />` tag',
  },
  {
    prefix: 'i',
    body: '<i>$1</i>$2',
    description: 'HTML `<i></i>` tag',
  },
  {
    prefix: 'iframe',
    body: '<iframe src="$1">$2</iframe>$3',
    description: 'HTML `<iframe src=""></iframe>` tag',
  },
  {
    prefix: 'img',
    body: '<img src="$1" alt="$2" />$3',
    description: 'HTML `<img src="" alt="" />` tag',
  },
  {
    prefix: 'input',
    body: '<input type="$1" />$2',
    description: 'HTML `<input type="" />` tag',
  },
  {
    prefix: 'ins',
    body: '<ins>$1</ins>$2',
    description: 'Tag: `<ins></ins>`',
  },
  {
    prefix: 'kbd',
    body: '<kbd>$1</kbd>',
    description: 'Tag: `<kbd></kbd>`',
  },
  {
    prefix: 'label',
    body: '<label for="$1">$2</label>$3',
    description: 'HTML `<label for=""></label>` tag',
  },
  {
    prefix: 'legend',
    body: '<legend>$1</legend>$2',
    description: 'HTML `<legend></legend>` tag',
  },
  {
    prefix: 'li',
    body: '<li>$1</li>$2',
    description: 'HTML `<li></li>` tag',
  },
  {
    prefix: 'main',
    body: '<main>$1</main>$2',
    description: 'HTML `<main></main>` tag',
  },
  {
    prefix: 'map',
    body: '<map name="$1">$2</map>$2',
    description: 'HTML `<map name=""></map>` tag',
  },
  {
    prefix: 'mark',
    body: '<mark>$1</mark>$2',
    description: 'HTML `<mark></mark>` tag',
  },
  {
    prefix: 'menu',
    body: '<menu>$1</menu>$2',
    description: 'HTML `<menu></menu>` tag',
  },
  {
    prefix: 'meter',
    body: '<meter value="$1">$2</meter>$3',
    description: 'HTML `<meter value=""></meter>` tag',
  },
  {
    prefix: 'nav',
    body: '<nav>$1</nav>$2',
    description: 'HTML `<nav></nav>` tag',
  },
  {
    prefix: 'object',
    body: '<object width="$1" height="$2" data="$3">$4</object>$5',
    description: 'HTML `<object width="" height="" data=""></object>` tag',
  },
  {
    prefix: 'ol',
    body: '<ol>$1</ol>$2',
    description: 'HTML `<ol></ol>` tag',
  },
  {
    prefix: 'optgroup',
    body: '<optgroup>$1</optgroup>$2',
    description: 'HTML `<optgroup></optgroup>` tag',
  },
  {
    prefix: 'option',
    body: '<option value="$1">$2</option>$3',
    description: 'HTML `<option value=""></option>` tag',
  },
  {
    prefix: 'output',
    body: '<output>$1</output>$2',
    description: 'Tag: `<output></output>`',
  },
  {
    prefix: 'p',
    body: '<p>$1</p>$2',
    description: 'HTML `<p></p>` tag',
  },
  {
    prefix: 'param',
    body: '<param name="$1" value="$2">$3</param>$4',
    description: 'Tag: `<param name="" value=""></param>`',
  },
  {
    prefix: 'picture',
    body: '<picture>$1</picture>$2',
    description: 'Tag: `<picture></picture>`',
  },
  {
    prefix: 'pre',
    body: '<pre>$1</pre>$2',
    description: 'HTML `<pre></pre>` tag',
  },
  {
    prefix: 'progress',
    body: '<progress>$1</progress>$2',
    description: 'Tag: `<progress></progress>`',
  },
  {
    prefix: 'q',
    body: '<q>$1</q>$2',
    description: 'HTML `<q></q>` tag',
  },
  {
    prefix: 'rp',
    body: '<rp>$1</rp>$2',
    description: 'Tag: `<rp></rp>`',
  },
  {
    prefix: 'rt',
    body: '<rt>$1</rt>$2',
    description: 'Tag: `<rt></rt>`',
  },
  {
    prefix: 'ruby',
    body: '<ruby>$1</ruby>$2',
    description: 'Tag: `<ruby></ruby>`',
  },
  {
    prefix: 's',
    body: '<s>$1</s>$2',
    description: 'HTML `<s></s>` tag',
  },
  {
    prefix: 'samp',
    body: '<samp>$1</samp>$2',
    description: 'Tag: `<samp></samp>`',
  },
  {
    prefix: 'section',
    body: '<section>$1</section>$2',
    description: 'HTML `<section></section>` tag',
  },
  {
    prefix: 'select',
    body: '<select>$1</select>$2',
    description: 'HTML `<select></select>` tag',
  },
  {
    prefix: 'slot',
    body: '<slot>$1</slot>$2',
    description: 'Tag: `<slot></slot>`',
  },
  {
    prefix: 'small',
    body: '<small>$1</small>$2',
    description: 'HTML `<small></small>` tag',
  },
  {
    prefix: 'source',
    body: '<source>$1</source>$2',
    description: 'Tag: `<source></source>`',
  },
  {
    prefix: 'span',
    body: '<span>$1</span>$2',
    description: 'HTML `<span></span>` tag',
  },
  {
    prefix: 'strong',
    body: '<strong>$1</strong>$2',
    description: 'HTML `<strong></strong>` tag',
  },
  {
    prefix: 'sub',
    body: '<sub>$1</sub>$2',
    description: 'HTML `<sub></sub>` tag',
  },
  {
    prefix: 'summary',
    body: '<summary>$1</summary>$2',
    description: 'Tag: `<summary></summary>`',
  },
  {
    prefix: 'sup',
    body: '<sup>$1</sup>$2',
    description: 'HTML `<sup></sup>` tag',
  },
  {
    prefix: 'svg',
    body: '<svg>$1</svg>$2',
    description: 'Tag: `<svg></svg>`',
  },
  {
    prefix: 'table',
    body: '<table>$1</table>$2',
    description: 'HTML `<table></table>` tag',
  },
  {
    prefix: 'tbody',
    body: '<tbody>$1</tbody>$2',
    description: 'HTML `<tbody></tbody>` tag',
  },
  {
    prefix: 'td',
    body: '<td>$1</td>$2',
    description: 'HTML `<td></td>` tag',
  },
  {
    prefix: 'template',
    body: '<template>$1</template>$2',
    description: 'Tag: `<template></template>`',
  },
  {
    prefix: 'textarea',
    body: '<textarea rows="$1" cols="$2">$3</textarea>$4',
    description: 'HTML `<textarea rows="" cols=""></textarea>` tag',
  },
  {
    prefix: 'tfoot',
    body: '<tfoot>$1</tfoot>$2',
    description: 'HTML `<tfoot></tfoot>` tag',
  },
  {
    prefix: 'thead',
    body: '<thead>$1</thead>$2',
    description: 'HTML `<thead></thead>` tag',
  },
  {
    prefix: 'th',
    body: '<th>$1</th>$2',
    description: 'HTML `<th></th>` tag',
  },
  {
    prefix: 'time',
    body: '<time datetime="$1">$2</time>$3',
    description: 'Tag: `<time datetime=""></time>`',
  },
  {
    prefix: 'tr',
    body: '<tr>$1</tr>$2',
    description: 'HTML `<tr></tr>` tag',
  },
  {
    prefix: 'track',
    body: '<track src="$1" />$2',
    description: 'Tag: `<track src="" />`',
  },
  {
    prefix: 'u',
    body: '<u>$1</u>$2',
    description: 'HTML `<u></u>` tag',
  },
  {
    prefix: 'ul',
    body: '<ul>$1</ul>$2',
    description: 'HTML `<ul></ul>` tag',
  },
  {
    prefix: 'var',
    body: '<var>$1</var>$2',
    description: 'Tag: `<var></var>`',
  },
  {
    prefix: 'video',
    body: '<video>$1</video>$2',
    description: 'Tag: `<video></video>`',
  },
  {
    prefix: 'wbr',
    body: '<wbr>$1</wbr>$2',
    description: 'Tag: `<wbr></wbr>`',
  },
]
