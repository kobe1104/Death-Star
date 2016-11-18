// work on:
// different levels (make new game? with different path and effects);
// make tutorial with linkdin links
// make bullets come out one by one.
// music

circle.compositeOperation = "lighter";

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
