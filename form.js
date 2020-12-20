class Form
{
    constructor()
{   
    this.greeting=createElement("h3") 
    this.button=createButton("Play")
    this.input=createInput("Name")
    
}

    hide()
    {
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }


display()
{

    var title=createElement("h2")
    title.html("Car Racing Game")
    title.position(130,0)

    
    fill("red")
    
    this.input.position(130,160)

    this.button.position(250,200)
    this.button.mousePressed(()=>
    {
        
    this.button.hide()
    this.input.hide()
    
    player.name=this.input.value()
    playerCount+=1
    player.index=playerCount
    player.updateAll()
    player.update(playerCount)

    this.greeting.html("Hello " + player.name)
    this.greeting.position(130,160)
     })
    

}
}