/* ____    ___       _      _       ____  
  / ___|  / _ \     / \    | |     / ___| 
 | |  _  | | | |   / _ \   | |     \___ \ 
 | |_| | | |_| |  / ___ \  | |___   ___) |
  \____|  \___/  /_/   \_\ |_____| |____/ 

1) 

  ____    _____   ____    _____   _____    ____   _   _ 
 / ___|  |_   _| |  _ \  | ____| |_   _|  / ___| | | | |
 \___ \    | |   | |_) | |  _|     | |   | |     | |_| |
  ___) |   | |   |  _ <  | |___    | |   | |___  |  _  |
 |____/    |_|   |_| \_\ |_____|   |_|    \____| |_| |_|

1) Add Grass:
   Define another class - a blade of grass that is always
   rooted at the bottom of the canvas, and slowly grows up
   as the rain falls. Instantiate three blades of grass in
   this drawing.
2) Rain *drops*, not circles
   Rework the show() method to display more traditional
   drop shapes, not circles.
3) Working backwards
   Pick your favorite game or exercise from a previous day
   and update it to use a Class.

*/

// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global
 *    createCanvas, background
 *    colorMode, HSB, fill, noStroke
 *    ellipse
 *    random
 *    width, height
 *    triangle
 */

let drop1;
let drop2;
let drop3;
let drop4;
let blade1;
let blades = [];

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100);
  
  drop1 = new RainDrop(10);
  drop2 = new RainDrop(10);
  drop3 = new RainDrop(10);
  drop4 = new RainDrop(10);
}

function draw() {
  background(0, 0, 95);
  //Code for droplet 1
  drop1.drip();
  drop1.show();
  drop2.drip();
  drop2.show();
  drop3.drip();
  drop3.show();
  drop4.drip();
  drop4.show();
}

class RainDrop {
  constructor(d){
    this.x = random(width);
    this.y = random(height);
    this.d = d;
    this.fallSpeed = random(5, 15);
    blades.push(new Grass());
  }
  
  drip(){
    this.y += this.fallSpeed;
    //If it goes off the screen...
    if (this.y > height) {
    // ...reset it...
      this.y = 0;
      // ...and move it somewhere random.
      this.x = random(width);
      for (let i = 0; i < blades.length; i++) {
        blades[i].grow();
      }  
    }
  }
  show(){
    noStroke();
    fill(60, 80, 80);
    ellipse(this.x, this.y, this.d);
    for (let i = 0; i < blades.length; i++) {
        blades[i].show();
      }
  }
  
}

class Grass {
  constructor(){
    this.x1 = random(0, width - 10);
    this.y1 = height;
    this.x2 = this.x1 + 8;
    this.y2 = height;
    this.x3 = this.x1 + 4;
    this.y3 = random(height, height - 4);
  }
  show(){
    noStroke();
    fill(40, 80, 80)
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }
  grow(){
    if (this.y3 > (11 * height / 12)){    
      this.y3 -= 1;
      this.x1 -= 0.25;
      this.x2 += 0.25;
    }
    else{
      blades.push(new Grass());
    }
  }
}
