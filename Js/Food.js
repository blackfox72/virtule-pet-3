class Food {
  constructor(){
  this.foodStock=0;
  
  this.image=loadImage('images/milk.png');
  }

 updateFoodStock(foodStock){
  this.foodStock=foodStock;
 }

  display(){
      background(46,139,87);

      var button=createButton("feed the dog")
      button.position(350,95)
      if(button.mousePressed(function(){
      gameState=1
      database.ref('/').update({'gameState':gameState});
  }))

  var addFood=createButton("add food")
  addFood.position(450,95)
  if(addFood.mousePressed(function(){
    foodS=foodS+1
    gameState=2
    database.ref('/').update({'gameState':gameState});
  }))

      fill(255,255,254);
      textSize(15);
      
      var x=70,y=100; 
      imageMode(CENTER);
      if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
          x=70;
          y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
      }
    }
  }

  bedroom(){
      background(bedroom,550,500);  
  }
    
  garden(){
      background(garden,550,500);  
  } 

  washroom(){
      background(washroom,550,500); 
  }
}