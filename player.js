class Player 
{
    constructor()
    {
    this.index=null;
    this.name=null;
    this.distance=0;
    }

    getCount() 
    {
      
    var playerCountref=mydatabase.ref("playerCount")
    playerCountref.on("value",(data)=>
    {
    playerCount=data.val()
    })
    }

     update(count)  
     {
        mydatabase.ref("/").update
        ({
        playerCount:count
        }) 
     }

     updateAll()
        {

            var playerIndex="players/player"+ this.index
            mydatabase.ref(playerIndex).set
            ({

                name:this.name,
                distance:this.distance
             }) 

        }

       static  getPlayerInfo() 
        {
        var playerInforef=mydatabase.ref("player")
        playerInforef.on("value",(data)=>
        {
            allPlayers=data.val()
        })
        }


    }