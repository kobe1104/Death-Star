// create objetcs should go here
const Meteors = require("./meteors");
const Util = require("./util");
const Planet = require("./planet");

class Game {

  constructor(stage) {
    this.stage = stage;
    this.util = new Util();
  }


  createRandomMeteor() {
    const color = this.util.randomColor();
    const size = Math.random()* (100-20) + 20;
    const speed = Math.random()* 10000 + 5000;
    const xpos = Math.random()* 1300;
    const ypos = this.util.randomYPos(); //either top or bottom
    const xposEnd = Math.random()* 1300;
    const yposEnd = this.util.oppositeOfYPos(ypos)// the opposite of ypos
    return new Meteors(color, size, speed, xpos, ypos, xposEnd, yposEnd);
  }

  drawMeteor(meteor) {
    var meteorShape = new createjs.Shape();
    meteorShape.graphics.beginFill(meteor.color).drawCircle(0, 0, meteor.size);
    meteorShape.x = meteor.xpos;
    meteorShape.y = meteor.ypos;
    meteorShape.addEventListener("click", function(event) { stage.removeChild(meteorShape)});
    // meteorShape.shadow = new createjs.Shadow("#003c3d", 0, 0, meteor.size);
    this.stage.addChild(meteorShape);
    createjs.Tween.get(meteorShape, {loop: true})
    .to({x:meteor.xposEnd , y: meteor.yposEnd}, meteor.speed)
  }

  addPlanetToStage(planet) {
    var planetShape = new createjs.Shape();
    planetShape.graphics.beginFill(planet.color).drawCircle(0, 0, planet.size);
    planetShape.x = 0;
    planetShape.y = planet.ypos;
    planetShape.shadow = new createjs.Shadow("#e2b900", 0, 0, planet.size);
    this.stage.addChild(planetShape);
    return planetShape;
  };


  drawPlanet(plant) {
    createjs.Tween.get(plant, {loop: true})
    .to({x: 200, y: 200}, 5000)
    .to({x: 400,y: 450}, 2000)
    .to({x: 650}, 3000)
    .to({x: 700,y: 450}, 3000)
    .to({x: 900, y: 600}, 5000)
    .to({x: 1150,y: 500}, 6000)
    .to({x: 1450}, 5000)
  };


}

module.exports = Game;
