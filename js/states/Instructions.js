Instructions = function (game) {
};

Instructions.prototype = {
  create: function () {
     this.background = this.add.tileSprite(0,0,game.width,game.height, 'background');


     var instrucction = "El jugador tiene 5 vidas, debera sobrevivir hasta el final del nivel";
     instrucction += "\n\nSe mueve con el mouse y dispara con espacio.";

     var fontStyleHeader = {font:'bold 24px Arial', fill:'#AA0', stroke: "#333", strokeThickness: 5};
     var fontStyleText = {font:'20px Arial', fill:'#FFFFFF', stroke: "#333", strokeThickness: 5, wordWrap: true, wordWrapWidth: 700};

     this.instructionsText1 = this.add.text(50, 50, 'Instrucciones:', fontStyleHeader);
     this.instructionsText2 = this.add.text(50, 100, instrucction, fontStyleText);

     this.integrantesText1 = this.add.text(50, 420, 'Integrantes:', fontStyleHeader);
     this.integrantesText2 = this.add.text(50, 460, '\t -Alberto Gonzalez', fontStyleText);
     this.integrantesText3 = this.add.text(50, 490, '\t -Andres Revolledo', fontStyleText);
     this.integrantesText4 = this.add.text(50, 520, '\t -Renzo Villavisencio', fontStyleText);

     this.startBtn = this.add.button(350, 420, 'start-btn', this.startGame, this, 1,0,2);

  },
  startGame:function(){
    this.state.start('Game');
  }
};
