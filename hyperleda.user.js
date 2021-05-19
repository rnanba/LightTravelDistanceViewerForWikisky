// ==UserScript==
// @name     [LTDV] hyperleda
// @namespace https://rna.hatenablog.com/
// @version  1.0
// @include  http://atlas.obs-hp.fr/hyperleda/fG.cgi?*
// @include  http://leda.univ-lyon1.fr/fG.cgi?*
// @grant    none
// @run-at document-end
// ==/UserScript==
if (!window.opener || window.name !== 'gs_ltdv_hyperleda') {
  return
}
console.log('[LTDV] hyperleda')

if ("text/xml" !== document.contentType) {
  console.log('not a VOTABLE output. bye.')
  return
}
const colNumber = document.querySelector('VOTABLE RESOURCE TABLE FIELD[name="v"]').getAttribute('ID').substring(3)
const v = parseFloat(document.querySelector('VOTABLE RESOURCE TABLE DATA TABLEDATA TR TD:nth-child(' + colNumber + ')').textContent)
console.log('v=' + v)
const c = 299792.458 // km/s
const z = v / c
console.log('z=' + z)
window.opener.postMessage({
  v: v,
  z: z,
  src: '[LTDV] hyperleda'
}, 'https://wikisky.org')
window.close()
