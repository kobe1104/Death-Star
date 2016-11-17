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
  const stage = new createjs.Stage(canvasEl);
  window.stage = stage;
  const util = new Util();
  let level = 2;
  let speed = 1;
  const game = new Game(stage, speed);
  // initial settings

  // create planet
  const planet = new Planet('#ffa700', 40, 400);
  const planetShape = game.addPlanetToStage(planet);
  window.planetShape = planetShape;
  stage.addChild(planetShape);
  game.drawPlanet(planetShape);

  // global Ticker
  const ticker = createjs.Ticker.addEventListener("tick", handler);
  createjs.Ticker.setPaused(true);
  function handler(event) {
    if (!createjs.Ticker.getPaused()){
      // enable for collide message
      // if (util.collide(stage.children[0], stage.children)) {
      //   alert('game over!');
      //   window.location.reload();
      // }

      // generate meteors
      if (stage.children.length < level) {
        setTimeout(function(){
          game.drawMeteor(game.createRandomMeteor(speed));
        }, 60);
      }

      stage.update();
      createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
      createjs.Ticker.setFPS(60);
    }
  }

  $(".continue").click(function(e) {
    const pause = createjs.Ticker.getPaused();
    createjs.Ticker.setPaused(!pause);
     if(pause) {
      $(this).text("Play");
      createjs.Ticker.setPaused(false);
    }
    else {
      $(this).text("Pause");
      createjs.Ticker.setPaused(true);
    }
  });





 // restart button
  $( ".restart" ).click(function() {
   window.location.reload();
  });

  $( ".tutorial" ).click(function() {

  });

  $( ".music" ).click(function() {
    $(".music").css("display", "none");
    $(".mute").css("display", "block");
  });

  $( ".mute" ).click(function() {
    $(".mute").css("display", "none");
    $(".music").css("display", "block");
  });

  let dropdown = false;
  $( ".dropdown" ).click(function() {
    dropdown = !dropdown;
    if (dropdown) {
      $( ".levels" ).css("display", "none");
    } else {
      $( ".levels" ).css("display", "block");
    }
  });

  $( ".level1" ).click(function() {
    $( ".level1" ).css("color", "yellow")
    $( ".level2" ).css("color", "white")
    $( ".level3" ).css("color", "white")
    level = 10;
    speed = 1;
  });

  $( ".level2" ).click(function() {
    $( ".level1" ).css("color", "white")
    $( ".level2" ).css("color", "yellow")
    $( ".level3" ).css("color", "white")
    level = 20;
    speed = 2;
  });

  $( ".level3" ).click(function() {
    $( ".level1" ).css("color", "white")
    $( ".level2" ).css("color", "white")
    $( ".level3" ).css("color", "yellow")
    level = 25;
    speed = 3;
  });


});
