window.addEventListener('DOMContentLoad', init, false)

function init() { 
    alert ('Did the page load? Yes!')
}
var buttons = document.getElementsByTagName ("button")

var button1
button1.addEventListener('click', show_hide1,