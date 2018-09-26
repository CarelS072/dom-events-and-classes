// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick',hide)
    }
  
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

function makeBlue (evt) {
  evt.target.classList.toggle('blue')
  updateCounts()
}

function hide (evt) {
  evt.target.classList.toggle('invisible')
  updateCounts()
}

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }
  var punt = (document.getElementsByClassName('board')[0].children)
    for (var p = 0; p < punt.length; p++ && (console.log("p value", p))) {
      punt[p].classList.contains('blue', totals.blue ++ , console.log("blue", totals.blue))
      punt[p].classList.contains('green', totals.green ++, console.log("green", totals.green))
      punt[p].classList.contains('invisible', totals.invisible ++, console.log("invisible", totals.invisible))

  }



  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS

  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
