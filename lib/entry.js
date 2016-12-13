const Meteors = require("./meteors");
const Util = require("./util");
const Planet = require("./planet");
const Game = require("./game");
const $ = require('jquery');
require('howler');

document.addEventListener("DOMContentLoaded", () => {
  // initial settings
  const canvasEl = document.getElementsByTagName('canvas')[0];
  const ctx = canvasEl.getContext("2d");
  canvasEl.height = window.innerHeight;
  canvasEl.width = window.innerWidth;
  const overLay = document.getElementsByClassName('overLay');
  overLay.height = window.innerHeight;
  overLay.width = window.innerWidth;
  const stage = new createjs.Stage(canvasEl);
  window.stage = stage;
  const util = new Util();
  let level = 5;
  let speed = 1;
  const game = new Game(stage, speed);
  // require music
  const bgm = new Howl({src: ['./docs/wireframes/imperial_march.mp3']});
  const pewpew = new Howl({src: ['./docs/wireframes/pewpew.wav']});
  const win = new Howl({src: ['./docs/wireframes/father.mp3']});
  const lose = new Howl({src: ['./docs/wireframes/chewy_roar.mp3']});
  // play background music
  bgm.play();
  bgm.loop(true);
  bgm.volume(0.2);
  pewpew.volume(0.2);
  win.volume(0.5);
  lose.volume(0.3);
  let music = true;

  // create planet
  // const planet = new Planet('#ffa700', 40, 400);
  // const planetShape = game.addPlanetToStage(planet);
  // window.planetShape = planetShape;
  // stage.addChild(planetShape);

  // bitmap
  const ds = game.addDS();
  stage.addChild(ds);
  window.ds = ds;


  // global Ticker
  function handler(event) {
    if (!createjs.Ticker.getPaused()){
      // enable for collide message
      if (util.collide(stage.children[0], stage.children)) {
        createjs.Ticker.setPaused(true);
        $(".lose-page").css("display", "block")
        if (music) {
          lose.play();
        }
      }


      // const border = util.createBorder(ds, stage);

      if (ds.x > 1490) {
        createjs.Ticker.setPaused(true);
        $(".win-page").css("display", "block")
        if (music) {
          win.play();
        }
      }
      // if (planetShape.x > 1490) {
      //   createjs.Ticker.setPaused(true);
      //   $(".win-page").css("display", "block")
      //   if (music) {
      //     win.play();
      //   }
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



  $( "body" ).click(function() {
    if (music) {
      pewpew.play();
    }
  });
 // restart button
  $( ".restart" ).click(function() {
    window.location.reload();
  });

  $( ".music" ).click(function() {
    $(".music").css("display", "none");
    $(".mute").css("display", "block");
    music = true;
    bgm.mute(false);
  });

  $( ".mute" ).click(function() {
    $(".mute").css("display", "none");
    $(".music").css("display", "block");
    music = false;
    bgm.mute(true);
  });


  $( ".level1" ).click(function() {
    $( ".level1" ).css("color", "yellow")
    $( ".level2" ).css("color", "white")
    $( ".level3" ).css("color", "white")
    level = 10;
    speed = 1;
    $(".start-page").css("display", "none")
    game.drawPlanet(ds);
    // game.drawPlanet(planetShape);
    const ticker = createjs.Ticker.addEventListener("tick", handler);
  });

  $( ".level2" ).click(function() {
    $( ".level1" ).css("color", "white")
    $( ".level2" ).css("color", "yellow")
    $( ".level3" ).css("color", "white")
    level = 20;
    speed = 2;
    $(".start-page").css("display", "none")
    game.drawPlanet(ds);
    // game.drawPlanet(planetShape);
    const ticker = createjs.Ticker.addEventListener("tick", handler);
  });

  $( ".level3" ).click(function() {
    $( ".level1" ).css("color", "white")
    $( ".level2" ).css("color", "white")
    $( ".level3" ).css("color", "yellow")
    level = 25;
    speed = 3;
    $(".start-page").css("display", "none")
    game.drawPlanet(ds);
    // game.drawPlanet(planetShape);
    const ticker = createjs.Ticker.addEventListener("tick", handler);
  });

  $( ".github" ).click(function() {
    window.open("https://github.com/kobe1104/Death-Star");
  });

  $( ".linkedin" ).click(function() {
    window.open("https://www.linkedin.com/in/henry-hsu-58073189");
  });

  $( ".win-play-again" ).click(function() {
    window.location.reload();
  });

  $( ".lose-play-again" ).click(function() {
    window.location.reload();
  });



});
