const Meteors = require("./meteors");
const Util = require("./util");
const Planet = require("./planet");
const Game = require("./game");
const $ = require('jquery');

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementsByTagName('canvas')[0];
  const ctx = canvasEl.getContext("2d");
  canvasEl.height = window.innerHeight;
  canvasEl.width = window.innerWidth;
  var stage = new createjs.Stage(canvasEl);
  window.stage = stage;
  const util = new Util();
  const game = new Game(stage);
  // global Ticker
  createjs.Ticker.addEventListener("tick", handler);
  function handler(event) {
    // enable for collide message
    // if (util.collide(stage.children[0], stage.children)) {
    //   alert('game over!');
    //   window.location.reload();
    // }
    // generate meteors
    if (stage.children.length < 2) {
      setTimeout(function(){
        game.drawMeteor(game.createRandomMeteor());
      }, 60);
    }

    // if passed, recreate planet and reload
    if (stage.children[0].x >= 1400) {
      window.location.reload();
    }

    stage.update();
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
    createjs.Ticker.setFPS(60);
  }
  // restart button
  $( "#restart" ).click(function() {
    window.location.reload();
  });

  $( "#tutorial" ).click(function() {
    createjs.Ticker.paused = true;
  });







// create planet
const planet = new Planet('#666666', 40, 400);
var planetShape = game.addPlanetToStage(planet);
game.drawPlanet(planetShape);

// var circle = new createjs.Shape();
// circle.graphics.beginFill('red').drawCircle(0, 0, 30);
// circle.x = 500;
// circle.y = 900;
// circle.addEventListener("click", function(event) { stage.removeChild(circle)});
// circle.shadow = new createjs.Shadow("#ffffff", 0, 0, 30);
// stage.addChild(circle);
// createjs.Tween.get(circle, {loop: true})
// .to({x:600 , y: 0}, 5000)
//
//
// var circle2 = new createjs.Shape();
// circle2.graphics.beginFill('blue').drawCircle(0, 0, 10);
// circle2.x = 100;
// circle2.y = 0;
// stage.addChild(circle2);
// createjs.Tween.get(circle2, {loop: true})
// .to({y: 900}, 5000)

// window.circle2 = circle2;
window.planetShape = planetShape;
window.collide = util.collide;




});
