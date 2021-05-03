/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

const w = process.stdout.columns

const waves = ['*･゜ﾟ･*:.｡..｡.:*･', '*･゜ﾟ･*:.｡..｡.:*･', '🛥']
const colors = ['\x1b[91m', '\x1b[92m', '\x1b[93m', '\x1b[94m', '\x1b[95m']

function draw () {
  setTimeout(draw, 1000 / 4)
  let output = ''
  for (let i = 0; i < w; i++) {
    let r = Math.floor(Math.random() * waves.length)
    if (Math.random() > 0.2) {
      let c = Math.floor(Math.random() * colors.length)
      output += colors[c]
    }
    else if (r == 1 | r == 2) {
      output += waves[r] + '\x1b[34m'
    }
    else {
      output += waves[r]
    }
  }
  console.log(output)
}

draw()
