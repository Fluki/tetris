var Controller = function() {
  this.right = new ButtonInput();
  this.left = new ButtonInput();
  this.up = new ButtonInput();

  this.keyDownUp = function(event) {
    /* console.log(this) */
    var down = event.type == "keydown" ? true : false;

    switch (event.keyCode) {
      case 37:
        this.left.getInput(down);
        break;
      case 39:
        this.right.getInput(down);
        break;
      case 38:
        this.up.getInput(down);
    }
  };
  this.handleKeyDownUp = event => {
    this.keyDownUp(event);
  };
};

var ButtonInput = function() {
  this.active = false;
  this.getInput = function(down) {
    if (this.active != down) {
      this.active = down;
    }
  };
};
export default Controller;
