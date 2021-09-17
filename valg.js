var frp = 0
var høyre = 0
var venstre = 0
var krf = 0
var mdg = 0
var sp = 0
var ap = 0
var sv = 0
var rødt = 0

function refreshResults () {
    var results = document.getElementById('results');
    results.innerHTML = 'total: ' + (frp + høyre + venstre + krf + mdg + sp + ap + sv + rødt);
    results.innerHTML += '<br />frp: ' + frp;
    results.innerHTML += '<br />høyre: ' + høyre;
    results.innerHTML += '<br />venstre: ' + venstre;
    results.innerHTML += '<br />krf: ' + krf;
    results.innerHTML += '<br />mdg: ' + mdg;
    results.innerHTML += '<br />sp: ' + sp;
    results.innerHTML += '<br />ap: ' + ap;
    results.innerHTML += '<br />sv: ' + sv;
    results.innerHTML += '<br />rødt: ' + rødt;
  }

  document.getElementById('frp-button').addEventListener('click', function() {
    frp++
    refreshResults();
  });

  document.getElementById('h-button').addEventListener('click', function() {
    høyre++
    refreshResults();
  });

  document.getElementById('v-button').addEventListener('click', function() {
    venstre++
    refreshResults();
  });

  document.getElementById('krf-button').addEventListener('click', function() {
    krf++
    refreshResults();
  });

  document.getElementById('mdg-button').addEventListener('click', function() {
    mdg++
    refreshResults();
  });

  document.getElementById('sp-button').addEventListener('click', function() {
    sp++
    refreshResults();
  });

  document.getElementById('ap-button').addEventListener('click', function() {
    ap++
    refreshResults();
  });

  document.getElementById('sv-button').addEventListener('click', function() {
    sv++
    refreshResults();
  });

  document.getElementById('r-button').addEventListener('click', function() {
    rødt++
    refreshResults();
  });
