export default [
  {
    prefix: 'f',
    body: '<{ $1 }>',
    description: 'Mint HTML fragment: `<{  }>`',
  },
  {
    prefix: 'a',
    body: '<a href="$1">$2</a>',
    description: 'HTML `<a href=""></a>` tag',
  },
  {
    prefix: 'abbr',
    body: '<abbr title="$1">$2</abbr>',
    description: 'HTML `<abbr title=""></abbr>` tag',
  },
  {
    prefix: 'address',
    body: '<address>$1</address>',
    description: 'HTML `<address></address>` tag',
  },
  {
    prefix: 'area',
    body: '<area $1 />',
    description: 'HTML `<area />` tag',
  },
  {
    prefix: 'article',
    body: '<article>$1</article>',
    description: 'HTML `<article></article>` tag',
  },
  {
    prefix: 'aside',
    body: '<aside>$1</aside>',
    description: 'HTML `<aside></aside>` tag',
  },
  {
    prefix: 'audio',
    body: '<audio>$1</audio>',
    description: 'Tag: `<audio></audio>`',
  },
  {
    prefix: 'b',
    body: '<b>$1</b>',
    description: 'HTML `<b></b>` tag',
  },
  {
    prefix: 'base',
    body: '<base>$1</base>',
    description: 'Tag: `<base></base>`',
  },
  {
    prefix: 'bdi',
    body: '<bdi>$1</bdi>',
    description: 'Tag: `<bdi></bdi>`',
  },
  {
    prefix: 'bdo',
    body: '<bdo>$1</bdo>',
    description: 'Tag: `<bdo></bdo>`',
  },
  {
    prefix: 'blockquote',
    body: '<blockquote>$1</blockquote>',
    description: 'HTML `<blockquote cite=""></blockquote>` tag',
  },
  {
    prefix: 'br',
    body: '<br />',
    description: 'HTML `<br />` tag',
  },
  {
    prefix: 'button',
    body: '<button>$1</button>',
    description: 'HTML `<button></button>` tag',
  },
  {
    prefix: 'canvas',
    body: '<canvas>$1</canvas>',
    description: 'Tag: `<canvas></canvas>`',
  },
  {
    prefix: 'caption',
    body: '<caption>$1</caption>',
    description: 'HTML `<caption></caption>` tag',
  },
  {
    prefix: 'cite',
    body: '<cite>$1</cite>',
    description: 'HTML `<cite></cite>` tag',
  },
  {
    prefix: 'code',
    body: '<code>$1</code>',
    description: 'HTML `<code></code>` tag',
  },
  {
    prefix: 'col',
    body: '<col />',
    description: 'HTML `<col />` tag',
  },
  {
    prefix: 'colgroup',
    body: '<colgroup>$1</colgroup>',
    description: 'HTML `<colgroup></colgroup>` tag',
  },
  {
    prefix: 'data',
    body: '<data>$1</data>',
    description: 'Tag: `<data></data>`',
  },
  {
    prefix: 'datalist',
    body: '<datalist>$1</datalist>',
    description: 'HTML `<datalist></datalist>` tag',
  },
  {
    prefix: 'dd',
    body: '<dd>$1</dd>',
    description: 'HTML `<dd></dd>` tag',
  },
  {
    prefix: 'del',
    body: '<del>$1</del>',
    description: 'HTML `<del></del>` tag',
  },
  {
    prefix: 'details',
    body: '<details>$1</details>',
    description: 'HTML `<details></details>` tag',
  },
  {
    prefix: 'dialog',
    body: '<dialog>$1</dialog>',
    description: 'HTML `<dialog></dialog>` tag',
  },
  {
    prefix: 'dfn',
    body: '<dfn>$1</dfn>',
    description: 'HTML `<dfn></dfn>` tag',
  },
  {
    prefix: 'div',
    body: '<div>$1</div>',
    description: 'HTML `<div></div>` tag',
  },
  {
    prefix: 'dl',
    body: '<dl>$1</dl>',
    description: 'HTML `<dl></dl>` tag',
  },
  {
    prefix: 'dt',
    body: '<dt>$1</dt>',
    description: 'HTML `<dt></dt>` tag',
  },
  {
    prefix: 'em',
    body: '<em>$1</em>',
    description: 'HTML `<em></em>` tag',
  },
  {
    prefix: 'embed',
    body: '<embed>$1</embed>',
    description: 'Tag: `<embed></embed>`',
  },
  {
    prefix: 'fieldset',
    body: '<fieldset>$1</fieldset>',
    description: 'HTML `<fieldset></fieldset>` tag',
  },
  {
    prefix: 'figcaption',
    body: '<figcaption>$1</figcaption>',
    description: 'HTML `<figcaption></figcaption>` tag',
  },
  {
    prefix: 'figure',
    body: '<figure>$1</figure>',
    description: 'HTML `<figure></figure>` tag',
  },
  {
    prefix: 'footer',
    body: '<footer>$1</footer>',
    description: 'HTML `<footer></footer>` tag',
  },
  {
    prefix: 'form',
    body: '<form>$1</form>',
    description: 'HTML `<form></form>` tag',
  },
  {
    prefix: 'h1',
    body: '<h1>$1</h1>',
    description: 'HTML `<h1></h1>` tag',
  },
  {
    prefix: 'h2',
    body: '<h2>$1</h2>',
    description: 'HTML `<h2></h2>` tag',
  },
  {
    prefix: 'h3',
    body: '<h3>$1</h3>',
    description: 'HTML `<h3></h3>` tag',
  },
  {
    prefix: 'h4',
    body: '<h4>$1</h4>',
    description: 'HTML `<h4></h4>` tag',
  },
  {
    prefix: 'h5',
    body: '<h5>$1</h5>',
    description: 'HTML `<h5></h5>` tag',
  },
  {
    prefix: 'h6',
    body: '<h6>$1</h6>',
    description: 'HTML `<h6></h6>` tag',
  },
  {
    prefix: 'header',
    body: '<header>$1</header>',
    description: 'HTML `<header></header>` tag',
  },
  {
    prefix: 'hr',
    body: '<hr />',
    description: 'HTML `<hr />` tag',
  },
  {
    prefix: 'i',
    body: '<i>$1</i>',
    description: 'HTML `<i></i>` tag',
  },
  {
    prefix: 'iframe',
    body: '<iframe src="$1">$2</iframe>',
    description: 'HTML `<iframe src=""></iframe>` tag',
  },
  {
    prefix: 'img',
    body: '<img src="$1" alt="$2" />',
    description: 'HTML `<img src="" alt="" />` tag',
  },
  {
    prefix: 'input',
    body: '<input type="$1" />',
    description: 'HTML `<input type="" />` tag',
  },
  {
    prefix: 'ins',
    body: '<ins>$1</ins>',
    description: 'Tag: `<ins></ins>`',
  },
  {
    prefix: 'kbd',
    body: '<kbd>$1</kbd>',
    description: 'Tag: `<kbd></kbd>`',
  },
  {
    prefix: 'label',
    body: '<label for="$1">$2</label>',
    description: 'HTML `<label for=""></label>` tag',
  },
  {
    prefix: 'legend',
    body: '<legend>$1</legend>',
    description: 'HTML `<legend></legend>` tag',
  },
  {
    prefix: 'li',
    body: '<li>$1</li>',
    description: 'HTML `<li></li>` tag',
  },
  {
    prefix: 'main',
    body: '<main>$1</main>',
    description: 'HTML `<main></main>` tag',
  },
  {
    prefix: 'map',
    body: '<map name="$1">$2</map>',
    description: 'HTML `<map name=""></map>` tag',
  },
  {
    prefix: 'mark',
    body: '<mark>$1</mark>',
    description: 'HTML `<mark></mark>` tag',
  },
  {
    prefix: 'menu',
    body: '<menu>$1</menu>',
    description: 'HTML `<menu></menu>` tag',
  },
  {
    prefix: 'meter',
    body: '<meter value="$1">$2</meter>',
    description: 'HTML `<meter value=""></meter>` tag',
  },
  {
    prefix: 'nav',
    body: '<nav>$1</nav>',
    description: 'HTML `<nav></nav>` tag',
  },
  {
    prefix: 'object',
    body: '<object width="$1" height="$2" data="$3">$4</object>',
    description: 'HTML `<object width="" height="" data=""></object>` tag',
  },
  {
    prefix: 'ol',
    body: '<ol>$1</ol>',
    description: 'HTML `<ol></ol>` tag',
  },
  {
    prefix: 'optgroup',
    body: '<optgroup>$1</optgroup>',
    description: 'HTML `<optgroup></optgroup>` tag',
  },
  {
    prefix: 'option',
    body: '<option value="$1">$2</option>',
    description: 'HTML `<option value=""></option>` tag',
  },
  {
    prefix: 'output',
    body: '<output>$1</output>',
    description: 'Tag: `<output></output>`',
  },
  {
    prefix: 'p',
    body: '<p>$1</p>',
    description: 'HTML `<p></p>` tag',
  },
  {
    prefix: 'param',
    body: '<param name="$1" value="$2">$3</param>',
    description: 'Tag: `<param name="" value=""></param>`',
  },
  {
    prefix: 'picture',
    body: '<picture>$1</picture>',
    description: 'Tag: `<picture></picture>`',
  },
  {
    prefix: 'pre',
    body: '<pre>$1</pre>',
    description: 'HTML `<pre></pre>` tag',
  },
  {
    prefix: 'progress',
    body: '<progress>$1</progress>',
    description: 'Tag: `<progress></progress>`',
  },
  {
    prefix: 'q',
    body: '<q>$1</q>',
    description: 'HTML `<q></q>` tag',
  },
  {
    prefix: 'rp',
    body: '<rp>$1</rp>',
    description: 'Tag: `<rp></rp>`',
  },
  {
    prefix: 'rt',
    body: '<rt>$1</rt>',
    description: 'Tag: `<rt></rt>`',
  },
  {
    prefix: 'ruby',
    body: '<ruby>$1</ruby>',
    description: 'Tag: `<ruby></ruby>`',
  },
  {
    prefix: 's',
    body: '<s>$1</s>',
    description: 'HTML `<s></s>` tag',
  },
  {
    prefix: 'samp',
    body: '<samp>$1</samp>',
    description: 'Tag: `<samp></samp>`',
  },
  {
    prefix: 'section',
    body: '<section>$1</section>',
    description: 'HTML `<section></section>` tag',
  },
  {
    prefix: 'select',
    body: '<select>$1</select>',
    description: 'HTML `<select></select>` tag',
  },
  {
    prefix: 'slot',
    body: '<slot>$1</slot>',
    description: 'Tag: `<slot></slot>`',
  },
  {
    prefix: 'small',
    body: '<small>$1</small>',
    description: 'HTML `<small></small>` tag',
  },
  {
    prefix: 'source',
    body: '<source>$1</source>',
    description: 'Tag: `<source></source>`',
  },
  {
    prefix: 'span',
    body: '<span>$1</span>',
    description: 'HTML `<span></span>` tag',
  },
  {
    prefix: 'strong',
    body: '<strong>$1</strong>',
    description: 'HTML `<strong></strong>` tag',
  },
  {
    prefix: 'sub',
    body: '<sub>$1</sub>',
    description: 'HTML `<sub></sub>` tag',
  },
  {
    prefix: 'summary',
    body: '<summary>$1</summary>',
    description: 'Tag: `<summary></summary>`',
  },
  {
    prefix: 'sup',
    body: '<sup>$1</sup>',
    description: 'HTML `<sup></sup>` tag',
  },
  {
    prefix: 'svg',
    body: '<svg>$1</svg>',
    description: 'Tag: `<svg></svg>`',
  },
  {
    prefix: 'table',
    body: '<table>$1</table>',
    description: 'HTML `<table></table>` tag',
  },
  {
    prefix: 'tbody',
    body: '<tbody>$1</tbody>',
    description: 'HTML `<tbody></tbody>` tag',
  },
  {
    prefix: 'td',
    body: '<td>$1</td>',
    description: 'HTML `<td></td>` tag',
  },
  {
    prefix: 'template',
    body: '<template>$1</template>',
    description: 'Tag: `<template></template>`',
  },
  {
    prefix: 'textarea',
    body: '<textarea rows="$1" cols="$2">$3</textarea>',
    description: 'HTML `<textarea rows="" cols=""></textarea>` tag',
  },
  {
    prefix: 'tfoot',
    body: '<tfoot>$1</tfoot>',
    description: 'HTML `<tfoot></tfoot>` tag',
  },
  {
    prefix: 'thead',
    body: '<thead>$1</thead>',
    description: 'HTML `<thead></thead>` tag',
  },
  {
    prefix: 'th',
    body: '<th>$1</th>',
    description: 'HTML `<th></th>` tag',
  },
  {
    prefix: 'time',
    body: '<time datetime="$1">$2</time>',
    description: 'Tag: `<time datetime=""></time>`',
  },
  {
    prefix: 'tr',
    body: '<tr>$1</tr>',
    description: 'HTML `<tr></tr>` tag',
  },
  {
    prefix: 'track',
    body: '<track src="$1" />',
    description: 'Tag: `<track src="" />`',
  },
  {
    prefix: 'u',
    body: '<u>$1</u>',
    description: 'HTML `<u></u>` tag',
  },
  {
    prefix: 'ul',
    body: '<ul>$1</ul>',
    description: 'HTML `<ul></ul>` tag',
  },
  {
    prefix: 'var',
    body: '<var>$1</var>',
    description: 'Tag: `<var></var>`',
  },
  {
    prefix: 'video',
    body: '<video>$1</video>',
    description: 'Tag: `<video></video>`',
  },
  {
    prefix: 'wbr',
    body: '<wbr>$1</wbr>',
    description: 'Tag: `<wbr></wbr>`',
  },
]
