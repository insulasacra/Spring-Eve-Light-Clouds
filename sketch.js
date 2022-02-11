function setup() {
  createCanvas(1440, 1080);
  background(60,93,122);
  
}

function draw() {
  background(12,70,104,50);
  background(1,30);
  createBlurredEllipse(mouseX - 50, mouseY - 50, 100, 100);
  
}

function createBlurredEllipse(x, y, width, height) {
  const img = createGraphics(width + 2, height + 2);
  img.noStroke();
  img.fill(255, 255, 255, 100);
  img.ellipse(width / 2, height / 2, width, height);
  image(img, x, y);
  filter(BLUR, 6);
}