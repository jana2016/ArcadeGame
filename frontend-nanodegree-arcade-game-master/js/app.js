var Enemy = function(x,y,speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/enemy-bug.png';
  this.height= 65;
  this.width= 95;
};

Enemy.prototype.update = function(dt) {
  this.x += 75 * dt;
  if(this.x > ctx.canvas.width + this.width){
      this.x = -200 * Math.floor (Math.random() * 4) +1;
  } else {
    this.x +=80*dt;
  }
  if (player.x < this.x + 50 &&

    player.x + 50 > this. x &&

    player.y < this.y + 50 &&

    player.y + 50 > this.y){
      player.x=200;
      player.y=400;
      }
};
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function (x,y){
  this.x = x;
  this.y = y
  this.sprite = "images/char-pink-girl.png";
  this.height= 75;
  this.width=65
  };

var player = new Player(200,400)

Player.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function(dt){
  if (player.y<=0){
  alert ('you won!')
}
}

Player.prototype.handleInput = function(direction){
  const horizontal = 101,
   vertical = 83;

  if (direction === 'left' && this.x - horizontal >= -50){
      this.x -= horizontal;
  } else if (direction === 'right' && this.x + horizontal < ctx.canvas.width-50){
      this. x += horizontal;
  } else if (direction === 'down' && this.y + vertical < ctx.canvas.height -200 ){
      this.y += vertical;
  } else if (direction === 'up' && this.y - vertical > -50){
      this.y -= vertical;
  }
}

var allEnemies = [];
var enemyYLocation = [50, 125, 200, 275];
enemyYLocation.forEach(function(locationY) {
    enemy = new Enemy((Math.floor(Math.random() * 400)), locationY, 200);
    allEnemies.push(enemy);
});

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

});
