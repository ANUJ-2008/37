var mydatabase;
var gameState=0;
var playerCount;
var form,player,game;
var allPlayers;
var distance=0;



function setup()
{
    createCanvas(500,500);
    
    mydatabase=firebase.database()
    
    game=new Game()
    game.getState()
    game.start()
}

function draw()
{
   
    if(playerCount===4)
    {
        game.update(1)
    }

    if(gameState===1)
    {
        clear()
        game.play()
    }
   
}