let game = document.getElementById('game')
let movementDisplay = document.getElementById('movement')

// Set your Context!
var ctx = game.getContext('2d')

// Fill Color
ctx.fillStyle = 'white';
// Line Color
ctx.strokeStyle = 'red';
// Line width
ctx.lineWidth = 5;


ctx.fillRect(10, 10, 100, 100);
ctx.strokeRect(10, 10, 100, 100);

let canvasWidth = getComputedStyle(game)
// console.log(canvasWidth)
game.setAttribute("width", getComputedStyle(game)["width"]) 
game.setAttribute("height", getComputedStyle(game)["height"])

function drawBox(x, y, size, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
}

game.addEventListener('click', function(e) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  hero.x = e.offsetX
  hero.y = e.offsetY
  hero.render()
})

//characters
class Crawler {
  constructor(x, y, color, width, height) {
  this.x = x
  this.y = y
  this.color = color
  this.width = width
  this.height = height
  this.alive = true
  }
  render() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

let ogre = new Crawler(200, 100, '#bada55', 60, 120)
let hero = new Crawler(0, 0, '#hotpink', 20, 20)



