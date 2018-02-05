var astroImg = [];

function preload() {
  myData = loadJSON('assets/peopleinspace.json');
  mask = loadImage("img/mask.png");
  for(i = 0; i <= 5; i++) {
    var f = loadImage('img/astro'+i+'.jpg');
    astroImg.push(f);
  }
}

function setup() {
  createCanvas(500, 500);
  imageMode(CENTER);
  rectMode(CENTER);
  frameRate(6);
}

function draw() {
  background(0);
  var r1 = round(random(0,5));
  var r2 = round(random(0,5));
  var r3 = round(random(0,5));

  push();
    translate(250-160, 250+20);
    scale(0.25);
    image(astroImg[r1], 0, 0);
  pop();
  push();
    translate(250, 250+20);
    scale(0.25);
    image(astroImg[r2], 0, 0);
  pop();
  push();
    translate(250+160, 250+20);
    scale(0.25);
    image(astroImg[r3], 0, 0);
  pop();
  image(mask, 250, 250);

  fill(255);
  textAlign(CENTER);
  textSize(15);
  text(myData.people[r1].name, 250-160, 250+100);
  text(myData.people[r2].name, 250, 250+100);
  text(myData.people[r3].name, 250+160, 250+100);

  text(myData.people[r1].country, 250-160, 250-80);
  text(myData.people[r2].country, 250, 250-80);
  text(myData.people[r3].country, 250+160, 250-80);

  textSize(30);
  text('Astrot Machine', 250, 250-160);
  if(frameCount>=6) {
    if(r1==r2 && r2==r3 && r3==r1) {
      textSize(50);
      fill('yellow');
      text('YOU WIN!!!', 250, 250+20);
    }
  }

  fill(255);
  ellipse(250, 250+180, 90);
  fill('#3f095e');
  textSize(20);
  text('PUSH', 250, 250+180+8);

  if(frameCount>=6){
    noLoop();
  }
}

function astro(photo, name) {
  this.photo = photo;
  this. name = name;
}

function mouseClicked() {
  if(mouseX>=250-45 &&
    mouseX<=250-45+90 &&
    mouseY>=250+180-45 &&
    mouseY<=250+180-45+90){
    window.location.href="index.html";
  }
}
