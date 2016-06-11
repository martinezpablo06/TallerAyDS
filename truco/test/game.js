var expect = require("chai").expect;
var player_model = require("../models/player");
var game_model   = require("../models/game");
var game_card    = require("../models/card");

var Game = game_model.game;
var Card = game_card.card;

describe('Game', function(){
  var game = new Game();

  it('Should have two players', function(){
    expect(game).to.have.property('player1');
    expect(game).to.have.property('player2');
  });
});

describe('Game#play', function(){
  var game;

  beforeEach(function(){
    game = new Game();
    game.newRound();

    // Force to have the following cards and envidoPoints
    game.player1.setCards([
        new Card(1, 'copa'),
        new Card(7, 'oro'),
        new Card(2, 'oro')
    ]);

    game.player2.setCards([
        new Card(6, 'copa'),
        new Card(7, 'copa'),
        new Card(2, 'basto')
    ]);
  });
/*
  it('plays [envido, quiero] should gives 2 points to winner', function(){
    game.play('player1', 'envido');
    game.play('player2', 'quiero');

    expect(game.score).to.deep.equal([0, 2]);
  });
*/  
});


describe('Game 2 #play', function(){
  var game;

  beforeEach(function(){
    game = new Game();
    game.newRound();

    // Force to have the following cards and envidoPoints
    game.player1.setCards([
        new Card(1,'oro'),
        new Card(6, 'oro'),
        new Card(2, 'espada')
    ]);

    game.player2.setCards([
        new Card(4, 'basto'),
        new Card(3, 'espada'),
        new Card(4, 'espada')
    ]);
  });
/*
  it('plays [envido, quiero] should gives 2 points to winner', function(){
    game.play('player1', 'envido');
    game.play('player2', 'quiero');
    expect(game.score).to.deep.equal([0,2]);
  });

  it('plays [envido, no-quiero] should gives 1 points to winner', function(){
    game.play('player1', 'play card');
    game.play('player2', 'envido');
    game.play('player1', 'no-quiero');    
    expect(game.score).to.deep.equal([0,1]);
  });

*/
    it('plays [truco, no-quiero] ', function(){
        
    game.play('player1', 'playcard', 5, 'copa');
    game.play('player2', 'no-quiero'); 
     
    expect(game.score).to.deep.equal([1,0]);
  }); 

/*
  it('plays [play card, truco, quiero] ', function(){
    game.play('player1', 'playered card');
    game.play('player2', 'truco');    
    game.play('player1', 'quiero');
    expect(game.score).to.deep.equal([0,0]);
  });

*/

});