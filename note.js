// work on:
// different levels (make new game? with different path and effects);
// make tutorial with linkdin links
// make bullets come out one by one.
// music



// css stuffs

#tutorial {
  /*display:flex;*/
  position: absolute;
  right:0;
  left: 0;
  /*border: 2px solid white;*/
  /*visibility: hidden;*/
  width: 300px;
  margin-right: auto;
  margin-left: auto;
}



#tutorial  > p {
  /*background-color: white;*/
  /*position: absolute;*/
  color: white;

}

#tutorial > img {

  width: 100px;
  height: 100px;
  margin: 0;
}

#restart {
  width: 50px;
  height: auto;
  position: absolute;
  left: 10px;
  top: 600px;

}
#restart:hover {
  cursor: pointer;
}

#music {
  width: 55px;
  height: auto;
  position: absolute;
  left: 10px;
  top: 0px;
  /*visibility: hidden;*/
}

#mute {
  width: 50px;
  height: auto;
  position: absolute;
  left: 10px;
  top: 650px;
  /*visibility: hidden;*/
}

#tutorial {
  width: 50px;
  height: auto;
  position: absolute;
  left: 10px;
  bottom: 20%;
}

#stage {
  position: absolute;;
  top: 0;
  left: 0;
}


<div id="tutorial">
  <p>
    this is how you play
  </p>
  <img src="http://res.cloudinary.com/corgi1989/image/upload/v1479349903/github_icon_j8fvkh.png"
  />

  <img src="http://res.cloudinary.com/corgi1989/image/upload/v1479349915/linkdin_icon_ziexwv.png"
  />

  <div className="buttons">
    <img
    id="restart"
    src="https://lh5.ggpht.com/vrNO104jz19z0hvQ62Xg7njWA4f9b_bgjou8fbYZfx8-7MIcMOSGrpBKkt0hlpAvxFAa=w300"
    />

    <img
    id="music"
    src="http://www.free-icons-download.net/images/speaker-icon-51505.png"
    />

    <img
    id="mute"
    src="https://cdn1.iconfinder.com/data/icons/smallicons-controls/32/614396-volume_x-128.png"
    />

    <img
    id="tutorial"
    src="http://300mbmovies4u.net/wp-content/wptouch-data/icons/custom/1417968277_MB__info.png"
    />
  </div>



//add onclick oin canvas that makes a red line which acts like laser beam


// Ticker for many bullets
// createjs.Ticker.addEventListener("tick", handler);
// var l = stage.getNumChildren();
//
// function handler(event) {
//   util.draw(planetShape);
//
//
//
//   // for (i = 0; i < 10; i++) {
//   //   var shape = stage.getChildAt(i);
//   //     shape.y += event.delta/1000*200;
//   //     shape.x += event.delta/1000*200;
//   //     if (shape.y > stage.canvas.height) {
//   //       shape.y = 0;
//   //       shape.x = Math.random()*600;
//   //     }
//   // } //for loop end
//   //
//   // for (i = 10; i < 20; i++) {
//   //   var shape = stage.getChildAt(i);
//   //     shape.y -= event.delta/1000*200;
//   //     if (shape.y < 0) {
//   //       shape.y = 400;
//   //       shape.x = Math.random()*600;
//   //     }
//   // }
//
//
//   createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
//   createjs.Ticker.setFPS(60);
//   stage.update(event);
// } // handler end


// Generate bullets
// for (i = 0;i < 10; i++) {
//   var circle_top = new createjs.Shape();
//   circle_top.graphics.beginFill('red').drawCircle(0, 0, 10);
//   circle_top.x = 600*Math.random();
//   circle_top.y = 10;
//   stage.addChild(circle_top);
// }
//
// for (i = 0; i < 10; i++) {
//   var circle_bot = new createjs.Shape();
//   circle_bot.graphics.beginFill('green').drawCircle(0, 0, 10);
//   circle_bot.x = 600*Math.random();
//   circle_bot.y = 400;
//   stage.addChild(circle_bot);
// }
// stage.update();



// make random meteor

// const meteors = [];
// meteors.push(util.randomMeteor());

// stage.addChild(util.randomMeteor());
//
// createjs.Ticker.addEventListener("tick", handler);
// function handler(event) {
//   for (m in stage) {
//     var shape = new createjs.Shape();
//     shape.graphics.beginFill(m.color).drawCircle(0, 0, m.size);
//     stage.addChild(shape);
//     shape.y += event.delta/1000 * m.ydir * m.yspeed;
//     shape.x += event.delta/1000 * m.xdir * m.xspeed;
//   }
//   stage.update(event);
// }
