var database;
var gameState=0;
var playerCount=0;
var form,player,game;
var canvas;

function setup(){
  database = firebase.database();
  
  canvas = createCanvas(400,400);
game=new Game()
game.getState()
game.start()

}

function draw(){

  
}