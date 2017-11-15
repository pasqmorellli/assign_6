var myData;
var astronauts = [];
var myImg;

function preload() {
  myData = loadJSON('assets/peopleinspace.json');
  myImg = loadImage('assets/stars.jpg')
}

function setup() {

  createCanvas(500, 500);

  for (var i = 0; i < myData.people.length; i++) {
    var astroData = myData.people[i];

    var newAstronaut = new Astronaut(astroData.country, astroData.launchdate);
    astronauts.push(newAstronaut); //push to ad an object to a list;
  }
  
  image(myImg, 0, 0)

  for (var i = 0; i < 3; i++) {
    var astro = astronauts[round(random(5))];
    astro.display();
  }
 
}

function draw() {

}

function Astronaut(name, date) {

  this.country = name;
  this.launchDate = date;

  var daysInSpace = (Date.now() - Date.parse(this.launchDate)) / 1000 / 60 / 60 / 24;
  //take a string, translate it in a number. The millisencods past from 1970

  var r = random() * 255;
  var g = random() * 255;
  var b = random() * 255;

  this.radius = daysInSpace;

  this.x = random(this.radius, width - this.radius);
  this.y = random(this.radius, height - this.radius);

  this.incrementX = 1;
  this.incrementY = 1;

  this.display = function() {
    noStroke();
    fill(r, g, b);
    ellipse(this.x, this.y, this.radius * 2);
    textAlign(CENTER);
    text(this.country, this.x, this.y + this.radius + 15)
  }
}

