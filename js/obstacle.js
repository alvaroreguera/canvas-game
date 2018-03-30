function Obstacle(game) {
  this.game = game;
  this.width = 15;
  this.height = this.width*3;
  this.dx = 5;
  this.x = this.game.canvas.width;
  this.y = this.game.canvas.height - this.height;
}

Obstacle.prototype.draw = function() {
  this.game.ctx.fillStyle = "pink";
  this.game.ctx.drawRect(this.x, this.y, this.width, this.height);
};

Obstacle.prototype.move = function() {
  this.x -= this.dx;
  if(this.x < -this.game.canvas.width){
    this.x = 0;
  }
};