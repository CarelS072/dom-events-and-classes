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

  // For some reason this keeps failing 
  //   var dots = document.getElementsByClassName('board')[0].children
  //   for (i = 0; i < dots.length; i++ ) {
  //     var punt = dots[i]
      
  //  "failing here -classlist undefined, sigh, found it.... " if (punt[i].classList.contains('blue')) {
  //       totals.blue++ 
  //     } 
  //     if  (punt.classList.contains('green')) {
  //         totals.green++ 
  //     } 
  //     if (punt[i].classList.contains('invisible')) {
  //         totals.invisible++ 
  //     }

  // }

  var dots = document.getElementsByClassName('board')[0].children
  for (i = 0; i < dots.length; i++) {
    var dot = dots[i]
    if (dot.classList.contains('green')) {
      totals.green++
    }
    if (dot.classList.contains('blue')) {
      totals.blue++
    }
    if (dot.classList.contains('invisible')) {
      totals.invisible++
    }
  }





  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
