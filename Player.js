class Player
{
    constructor(){}

  getCount (){
      var PlayerCountref = database.ref('playerCount')
      PlayerCountref.on("value",function(data){
          playerCount = data.val()
      })

  }

  updateCount(count){
      database.ref('/').update({
          playerCount:count 
      })
  }

  update(name){
      var PlayerIndex = "player"+ playerCount
      database.ref(PlayerIndex).set({
          name:name
      })
  }

}