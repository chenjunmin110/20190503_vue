fnResize()
window.onresize = function () {
  fnResize()
}
function fnResize () {
  var decideWide = document.documentElement.clientWidth || window.innerWidth
  if (decideWide >= 750) {
    decideWide = 750
  }
  if (decideWide <= 320) {
    decideWide = 320
  }
  document.documentElement.style.fontSize = (decideWide / 7.5 * 2) + 'px'
}
