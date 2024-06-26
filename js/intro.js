var Intro = function(game) {};



Intro.prototype = {

    create: function() {
        this.game.stage.backgroundColor = '479cde';

        this.quit = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        this.resume = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.game.input.onDown.add(this.repartGame, this);
        this.showScore();
    },

    update: function() {

        if (this.resume.isDown) {
            mainMusic.play();
            this.restartGame();
        }
        if (this.quit.isDown) {
            // this.quitGame();
        }

    },

    showScore: function() {

        var scoreFont = "60px Arial";

        this.scoreLabel = this.game.add.text(this.game.world.centerX, this.game.world.centerY / 2, "0", {
            font: scoreFont,
            fill: "#fff"
        });
        this.scoreLabel.anchor.setTo(0.5, 0.5);
        this.scoreLabel.align = 'center';
        this.game.world.bringToTop(this.scoreLabel);
        this.scoreLabel.text = "Benvenuti in questo Meraviglioso Giocooo!";

        this.highScore = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "0", {
            font: scoreFont,
            fill: "#fff"
        });
        this.highScore.anchor.setTo(0.5, 0.5);
        this.highScore.align = 'center';
        this.game.world.bringToTop(this.highScore);


        this.highScore.setText("Raccogli tutti i codici commessa, evitando i CETRIOLONI! \n Se arrivi a 20 hai svoltato il mese e puoi chiudere il rapportino!!!");



        this.restart = this.game.add.text(this.game.world.centerX, this.game.world.centerY * 1.5, "Gioca con la freccia in su ! \n Premi spazio o clicca per iniziare ", {
            font: scoreFont,
            fill: "#fff"
        });
        this.restart.anchor.setTo(0.5, 0.5);
        this.restart.align = 'center';
        this.game.world.bringToTop(this.restart);
        // this.scoreLabel.bringToTop()

    },

    restartGame: function() {

        this.game.state.start("Main");
    },
    repartGame: function() {
        mainMusic.play();
        this.game.state.start("Main");
    }

}
