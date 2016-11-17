// each meteor has initial position and direction and speed and size
class Meteors {
  constructor(color, size, speed, xpos, ypos, xposEnd, yposEnd) {
    this.color = color;
    this.size = size;
    this.speed = speed;
    this.xpos = xpos; //this will be random
    this.ypos = ypos; //this will either be 0 or 400
    this.xposEnd = xposEnd;
    this.yposEnd = yposEnd;
  }

  draw(stage) {
    let i = 0;
    for (i = 0;i < 10; i++) {
      var circle_top = new createjs.Shape();
      circle_top.graphics.beginFill('red').drawCircle(0, 0, 10);
      circle_top.x = 600*Math.random();
      circle_top.y = 10;
      stage.addChild(circle_top);
    }

    for (i = 0; i < 10; i++) {
      var circle_bot = new createjs.Shape();
      circle_bot.graphics.beginFill('green').drawCircle(0, 0, 10);
      circle_bot.x = 600*Math.random();
      circle_bot.y = 400;
      stage.addChild(circle_bot);
    }
    stage.update();
  }



}

module.exports = Meteors;
