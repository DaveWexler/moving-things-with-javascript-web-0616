const app = "I don't do much."

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 3}px`
  }
}

function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace('px', '')
  var right = parseInt(rightNumbers, 10)
 
  if (right < 360) {
    dodger.style.left = `${right + 3}px`
  }
}

function moveDodgerUp() {
  var bottomNumbers = dodger.style.bottom.replace('px', '')
  var bottom = parseInt(bottomNumbers, 10)
 
  if (bottom >= 0) {
    dodger.style.bottom = `${bottom + 3}px`
  }
}

function moveDodgerDown() {
  var bottomNumbers = dodger.style.bottom.replace('px', '')
  var bottom = parseInt(bottomNumbers, 10)
 
  if (bottom < 380) {
    dodger.style.bottom = `${bottom - 3}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
  if (e.which === 39) {
    moveDodgerRight()
  }
  if (e.which === 38) {
    moveDodgerUp()
  }
  if (e.which === 40) {
    moveDodgerDown()
  }
})

