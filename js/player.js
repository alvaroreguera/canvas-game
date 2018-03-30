function Player(game) {
  this.KEY_UP = 38;
  this.KEY_SPACE = 32;
  this.game = game;
  this.img = new Image();
  this.img.src = "./img/player.png";
  this.frameIndex = 0;
  this.x = 20;
  this.totalFrames = 3;
  this.y0 = this.game.canvas.height*0.8; //limite inferior
  this.y = this.y0; //posicion actual de mario
  this.vy = 10; //velocidad de mario
}

Player.prototype.draw = function () {

  this.game.ctx.drawImage(this.img,
    this.frameIndex * Math.floor(this.img.width / this.totalFrames), 0,
    Math.floor(this.img.width / this.totalFrames), this.img.height,
    this.x, this.y,
    80, 100
  );
  this.animateImg();
};


  
Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    if (event.keyCode === this.KEY_UP && this.y == this.y0) {
      console.log("Key up")
      this.y -= 5;
      this.vy -= 10;
    }
  }.bind(this);
}

Player.prototype.shoot = function () {
};

Player.prototype.animateImg = function () {
  if (this.game.frameCounter % 6 == 0) {
    this.frameIndex++;
  }
  if (this.frameIndex >= this.totalFrames) {
    this.frameIndex = 0;
  }


};
Player.prototype.move = function() {
  var gravity = 0.30;

  if (this.y >= this.y0) {
    this.vy = 1;
    this.y = this.y0;
  } else {
    this.vy += gravity;
    this.y += this.vy;
  }
}

