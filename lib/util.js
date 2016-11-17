const Meteors = require("./meteors");

class Util {

  pauseResumeGame() {
    toggleTicker = false;

  }

  randomColor() {
    const color = ['#ff5722', '#9e9e9e', '#607d8b'];
    const idx = Math.floor(Math.random() * color.length);
    return color[idx];
  }

  collide(planet, objs) {
    for (let i =1; i < objs.length; i++) {
      const xdist = Math.pow((objs[i].x - planet.x),2);
      const ydist = Math.pow((objs[i].y - planet.y),2);
      const dist = Math.sqrt(xdist + ydist);
      const r1 = objs[i].graphics.command.radius;
      const r2 = planet.graphics.command.radius;
      if (dist <= r1 + r2) {
        return true;
      }
    }
    return false;
  };

  randomDir() {
    if (Math.random() > 0.5) {
      return 1;
    } else {
      return -1;
    }
  };

  randomYPos() {
    if (Math.random() > 0.5) {
      return 800;
    } else {
      return 0;
    }
  };

  oppositeOfYPos(ypos) {
    if(ypos > 0) {
      return 0;
    } else {
      return 800;
    }
  };

}

module.exports = Util;
