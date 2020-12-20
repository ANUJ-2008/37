class Game 
{
    constructor()
    {

    }

    getState()
    {
      
    var gameStateref=mydatabase.ref("gameState")
    gameStateref.on("value",function(data)
    {
    gameState=data.val()
    })
    }

     update(state)
     {
        mydatabase.ref("/").update
        ({
        gameState:state
        })
     }

        async start()
        {

            if(gameState===0)
            {
                player=new Player()
                var playerCountref= await mydatabase.ref("playerCount").once("value") 
                if(playerCountref.exists())
                {
                playerCount=playerCountref.val()
                player.getCount() 
                }
                form=new Form()
                form.display()
            }

           

        }

        play()
        {
            form.hide()
            textSize(30)
            text("Game Start",120,100)

            player.getPlayerInfo()
            if(allPlayers!==undefined) 
            {
            var displayPosition=130;
            for(var i in allPlayers)
            {
            if(i==="player"+player.index)
            fill("red")
            else
            fill("black")
            displayPosition+=20
            textSize(20)
            text (allPlayers[i].name+":"+allPlayers[i].distance,120,displayPosition)
            }
            }
        
        if(keyIsDown(UP_ARROW) && player.index!== null)
        {
            player.distance+=50
            player.update()
        }
            }
        }