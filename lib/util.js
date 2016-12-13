const Meteors = require("./meteors");

class Util {

  pauseResumeGame() {
    toggleTicker = false;

  }

  randomColor() {
    // const color = ['#07efeb', '#369acd', '#6644af', '#a40000'];
    const color = ['#6f7e8e', '#3d3d3d', '#00728a', '#330b50', '#210e75', '#ffa700'];
    const idx = Math.floor(Math.random() * color.length);
    return color[idx];
  }

// collide for death star
  collide(planet, objs) {
    for (let i =1; i < objs.length; i++) {
      const xdist = Math.pow((objs[i].x - planet.x),2);
      const ydist = Math.pow((objs[i].y - planet.y),2);
      const dist = Math.sqrt(xdist + ydist);
      const r1 = objs[i].graphics.command.radius;
      if (dist <= r1 + 46) {
        return true;
      }
    }
    return false;
  };


  // collide(planet, objs) {
  //   for (let i =1; i < objs.length; i++) {
  //     const xdist = Math.pow((objs[i].x - planet.x),2);
  //     const ydist = Math.pow((objs[i].y - planet.y),2);
  //     const dist = Math.sqrt(xdist + ydist);
  //     const r1 = objs[i].graphics.command.radius;
  //     const r2 = planet.graphics.command.radius;
  //     if (dist <= r1 + r2) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };

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

  randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
  };

  createBorder(ds, stage) {
  const dsWidth = ds.width;
  const dsHeight = ds.height;
  const dsBorder = new createjs.Shape();
  // dsBorder.graphics.beginStroke('white').drawCircle((ds.x + 50), (ds.y + 50), 50)
  dsBorder.graphics.beginStroke('white').drawCircle((ds.x), (ds.y), 50)
  stage.addChild(dsBorder);
  return dsBorder;
  };

  removeBorder(border, stage) {
    stage.removeChild(border);
  };

}




module.exports = Util;
