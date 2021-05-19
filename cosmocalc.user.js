// ==UserScript==
// @name     [LTDV] cosmocalc
// @namespace https://rna.hatenablog.com/
// @version  1.0
// @include  http://www.astro.ucla.edu/~wright/CosmoCalc.html#*
// @grant    none
// @run-at document-end
// ==/UserScript==
if (!window.opener || window.name !== 'gs_ltdv_cosmocalc') {
  return
}
console.log('[LTDV] cosmocalc')

const z = parseFloat(window.location.hash.substring(1))
console.log('z = ' + z)
const w = unsafeWindow
w.setValues(67.3, 0.315, 0.685, z)
const ltd = w.stround(w.DTT_Gyr, 3)
console.log('light_travel_distance = ' + ltd + ' Gly')
window.opener.postMessage({
  ltd: ltd,
  src: '[LTDV] cosmocalc'
}, 'https://wikisky.org')
window.close()

