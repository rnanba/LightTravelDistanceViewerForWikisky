// ==UserScript==
// @name     [LTDV] wikisky
// @namespace https://rna.hatenablog.com/
// @version  1.0
// @include  https://wikisky.org/starview?object_type=2&*
// @grant    none
// @run-at document-end
// ==/UserScript==
console.log('[LTDV] wikisky')

// const hyperleda = 'http://leda.univ-lyon1.fr/'
const hyperleda = 'http://atlas.obs-hp.fr/hyperleda/'
const cosmocalc = 'http://www.astro.ucla.edu/~wright/CosmoCalc.html'
      
const pgc = document.querySelector('table#d_cat tr[title="HYPERLEDA. I. Catalog of galaxies (Paturel+, 2003)"] td:nth-child(2) a').textContent.replace(/PGC\s/g, '').trim()
console.log('pgc=' + pgc)

window.addEventListener('message', (ev) => {
  //console.log('data=' + ev.data)
  //console.log('data.src=' + ev.data.src)
  switch (ev.data.src) {
  case '[LTDV] hyperleda':
    const z = ev.data.z
    console.log('z=' + z)
    window.open(cosmocalc + '#' + z, 'gs_ltdv_cosmocalc')
    break
  case '[LTDV] cosmocalc':
    const ltd_Gly = ev.data.ltd
    console.log('ltd=' + ltd_Gly + '[Gly]')
    const ltd_oku_kounen = ltd_Gly * 10
    let ltd_ja = ''
    const oku = Math.floor(ltd_oku_kounen)
    if (oku > 0) {
      ltd_ja += oku + '億'
    }
    const man = Math.round((ltd_oku_kounen - oku) * 100) * 100
    if (man > 0) {
      ltd_ja += man + '万'
    }
    ltd_ja += '光年'
    console.log('光路距離=' + ltd_ja)
    const out = document.createTextNode('Light-travel distance:' + ltd_Gly + ' Gly (光路距離: ' + ltd_ja + ')')
    const table = document.querySelector('h1.sTitle + table')
    table.parentElement.insertBefore(out, table)
    break
  }
})
const hyperledaSql = hyperleda + 'fG.cgi?n=meandata&c=o&of=1,leda,simbad&nra=l&nakd=1&d=pgc%2Cobjname%2Cv&sql=pgc%3D\'' + pgc + '\'&ob=&a=x'
window.open(hyperledaSql, 'gs_ltdv_hyperleda')
