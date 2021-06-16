var dog,sadDog,happyDog,garden,washroom, database;
var foodS,foodStock;
var fedTime,currentTime;
var feed,addFood;
var foodObj;
var gameState,readState;
var milkbottle2

function preload(){
sadDog=loadImage("images/Dog.png");
happyDog=loadImage("images/happydog.png");
garden=loadImage("images/Garden.png");
washroom=loadImage("images/WashRoom.png");
bedroom=loadImage("images/BedRoom.png");
livingroom=loadImage("images/living Room.png");
}

function setup() {
  database=firebase.database();
  createCanvas(450,600);
  
  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  foodStock.set(20)

  //read game state from database
  
   
  dog=createSprite(200,400,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  

}

function draw() {
  background("yellow")
  if(foodS == 0){
    dog.addImage(happyDog)
    dog.scale=0.15
    //milkbottle2.visible=false;
    }else{
      dog.addImage(sadDog)  
      dog.scale=0.15
      //milkbottle2.visible=true;
    }
  writeStock(foodS)

  readState=database.ref('gameState');
  readState.on("value",function(data){
    gameState=data.val();
  });


  if(gameState===1){
  dog.addImage(happyDog)
  dog.scale=0.40
  dog.y=350
  }

  if(gameState===2){
    dog.addImage(sadDog)
    dog.scale=0.40
    //milkbottle2.visible=false;
    dog.y=350
  }
  var bath=createButton("I want to take bath")
  bath.position(530,95)
  if(bath.mousePressed(function(){
    gameState=3
    database.ref('/').update({'gameState':gameState});
  }))
  if(gameState===3){
    dog.addImage(washroom)
    dog.scale=1
    //milkbottle2.visible=false
  }

  var Sleep=createButton("I am very sleepy")
  Sleep.position(660,95)
  if(Sleep.mousePressed(function(){
    gameState=4
    database.ref('/').update({'gameState':gameState});
  }))
  if(gameState===4){
    dog.addImage(bedroom)
    dog.scale=1
    //milkbottle2.visible=false
  }
  
  var play=createButton("let's play!")
  play.position(460,130)
  if(play.mousePressed(function(){
    gameState=5
    database.ref('/').update({'gameState':gameState});
  }))
  if(gameState===5){
    dog.addImage(livingroom)
    dog.scale=1
    //milkbottle2.visible=false
  }

  var PlayInGarden=createButton("let's play in park")
  PlayInGarden.position(545,130)
  if(PlayInGarden.mousePressed(function(){
    gameState=6
    database.ref('/').update({'gameState':gameState});
  }))
  if(gameState===6){
    dog.y=175
    dog.addImage(garden)
    dog.scale=1
    //milkbottle2.visible=false
  }
  
  foodObj.display()
 

  
  //console.log(hour())
  
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
}
  function writeStock(x){
    database.ref('/').update({
      Food:x
    })
  }



//function to update food stock and last fed time


//function to add food in stock


//update gameState
