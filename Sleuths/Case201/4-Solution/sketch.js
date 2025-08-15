/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 7530552
CaseNum: 201-3-12778512-7530552

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...


*/

var img;

function preload() {
  img = loadImage("scene.png");
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  image(img, 0, 0);
  stroke(255, 0, 0);
  strokeWeight(3);
  noFill();

  // write the code to draw around the Judge's body below

  beginShape();
  vertex(400, 170);
  vertex(440, 230);
  vertex(355, 280);
  vertex(350, 400);
  vertex(390, 410);
  vertex(360, 545);
  vertex(420, 545);
  vertex(445, 380);
  vertex(750, 450);
  vertex(760, 310);
  vertex(500, 260);
  vertex(490, 200);

  vertex(410, 170);
  vertex(400, 170);
  endShape();
}
