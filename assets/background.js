const NUM_OF_PARTICLES = 10000;

const particles = [];

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("background-canvas");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


let x = 0;
let y = 0;
function draw() {

  ellipse(x, y, 80, 80);

  x++;
  y++;
}
