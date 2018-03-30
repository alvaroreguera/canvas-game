function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.frameCounter = 0;
  this.reset();
  this.background = new Background(this);
  this.player = new Player(this);
  this.player.setListeners();
  this.listObstacles = [];
}

Game.prototype.start = function () {
  setInterval(function () {
    this.clear();
    this.moveAll();
    this.draw();

    this.frameCounter++;
    if (this.frameCounter > 1000) {
      this.frameCounter = 0;
    }
  }.bind(this), 1000 / 60)
};

Game.prototype.stop = function () {
};

Game.prototype.gameOver = function () {
  this.stop();

  if (confirm("GAME OVER. Play again?")) {
    this.reset();
    this.start();
  }
};

Game.prototype.reset = function () {
};

Game.prototype.isCollision = function () {
};

Game.prototype.clearObstacles = function () {
  this.listObstacles.shift();
};

Game.prototype.generateObstacle = function () {
  this.listObstacles.push(new Obstacle(this.canvas, this.ctx));
}
Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function () {
  this.background.draw();
  this.background.move();

  this.player.draw();



};

Game.prototype.moveAll = function () {
  this.player.move();
  this.obstacle.move();
};
