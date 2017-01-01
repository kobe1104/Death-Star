# Death Star

[Death Star live][heroku]

Death Star is a single page browser game inspired by Star Wars movies.
This time, the player will be on the villain side helping to protect the
secret weapon "Death Star". Keep the asteroids from hitting Death Star by
destroying them with your weapon!

![game](./docs/wireframes/start-demo.png)

[heroku]: https://kobe1104.github.io/Death-Star/

## Features & Implementation

### Game Music and Effect Sounds
  The game music and sound effects are supported by HowlerJS. Depends on the
  user actions, it plays different theme musics and sounds. Users are also
  allowed to turn the sounds off by clicking on the speaker icon on the left
  bottom corner.  

### Asteroids Come from all Directions
![game](http://res.cloudinary.com/corgi1989/image/upload/c_scale,w_777/v1481743605/Screen_Shot_2016-12-14_at_11.23.40_AM_iyzmcr.png)

  Asteroids spawn locations, directions and speed are all handled by CreateJS.
  The distance between asteroids and death star is used to determine if they
  collide.
### Death Star has Random Path Each Game
  Your Death Star goes in a unique path each game! The path is calculated and
  randomized in a certain range and speed to make it more challenging.
### Restarting Game
  Need to restart or play again? Simply click on the first icon on the left
  bottom corner!

## Future Directions for the Project

### Make More Levels
  I will focus on creating more levels with different theme and conditions
  such as making the asteroids flashing so they are harder to predict.
### Make Different Weapons
  Allowing players to upgrade the weapon after getting certain items or achieving
  goals.
