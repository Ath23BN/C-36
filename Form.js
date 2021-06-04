class Form
{
    constructor(){}

  display (){
      var title = createElement('h2')
      title.html("Car Racing Game")
      title.position(400,150)

      var input = createInput("Name")
      var button = createButton("Submit")

      input.position(130,160)
      button.position(250,200)

      button.mousePressed(function(){
          input.hide()
          button.hide()

          var name = input.value()
          playerCount+=1
          player.update(name)
          player.updateCount(playerCount)

          var greeting = createElement('h3')
          greeting.html("HELLO"+name)
          greeting.position(130,160)
      })
  }

}