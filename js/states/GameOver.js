GameOver = function (game) {

};

GameOver.prototype = {
  preload: function () {
    this.backgroud = this.add.tileSprite(0,0,game.width,game.height, 'background');
    var fontStyle1 = {font:'bold 62px Arial', fill:'#FeF0f0', stroke: "#222", strokeThickness: 5};
    this.OverText = this.add.text(200,200,'GAME OVER', fontStyle1);
    this.retryBtn = this.add.button(300,400, 'retry-btn', this.retryGame, this, 1,0,2);
  },

  retryGame: function (){
    this.state.start('Menu');
  }
};
