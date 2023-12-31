function Ship() {
  this.x = width / 2;
  this.dir = 1;
  this.show = function () {
    fill(255);
    rectMode(CENTER);
    rect(this.x, height - 20, 20, 40);
  };
  this.move = function () {
    this.x += this.dir * 5;
  };
  this.setDir = function (dir_) {
    this.dir = dir_;
  };
}
