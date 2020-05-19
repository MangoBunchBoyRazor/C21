//Creating a class
class sprite{
    constructor(xPos,yPos,type){
        //Setting all the properties for the object
        this.x = xPos;
        this.y = yPos;
        this.type = type;
        //Setting diameter if the type of object is circle
        if(this.type === "circle"){
            this.diameter = 50;
            this.width = 0;
            this.height = 0;
        }    
        //Setting the width and height if the type of object is rectangle
        else if(this.type === "rectangle"){
            this.width = 50;
            this.height = 50;  
            this.diameter = 0;
        }
        this.velocityX = 0;
        this.velocityY = 0;
    }
    //Function to display the object
    displaySprite(){
        if(this.type === "circle")
            circle(this.x,this.y,this.diameter);
        else if(this.type === "rectangle")
            rect(this.x,this.y,this.width,this.height);
    }
    //Function to set the position
    setSpritePosition(xPos,yPos){
        this.x = xPos;
        this.y = yPos;  
    }
    //Function to set the speed of the sprite
    setSpriteVelocity(xSpeed,ySpeed){
        this.velocityX = xSpeed;
        this.velocityY = ySpeed;    
    }
    //Function to move the object
    moveSprite(){
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
}
//Declaring global variables
var object1, object2, object3;

function setup(){
    //Creating the canvas
    createCanvas(600,400);

    //Creating the objects
    object1 = new sprite(150,150,"circle");
    object1.height = 100;
    object1.width = 100;
    object1.diameter = 100;

    //You can change the string between rectangle and circle to toggle the shape
    object2 = new sprite(0,200,"circle");
    object2.setSpriteVelocity(2,0);

    object3 = new sprite(400,150,"rectangle");
    object1.height = 100;
    object1.width = 100;

    object4 = new sprite(180,150,"circle");
    object4.diameter = 20;
    object4.setSpriteVelocity(2,0);
}
function draw(){
    var collided = isTouching(object1,object2);
   // var bounced = bounceOff(object2,object3);

    background(255);

    if(collided)
        text("Collision happened",300,100);
    if(bounceOff(object4,object3)){
        console.log("Object4 bounced off object3",300,150);
    }

    //Displaying the objects
    object1.displaySprite();
    object1.moveSprite();
    object2.displaySprite();
    object2.moveSprite();
    object3.displaySprite();
    object4.displaySprite();
    object4.moveSprite();

    //Setting the object position to the mouse
    //object2.setSpritePosition(mouseX,mouseY);  

    //bounceOff(object2,object1);

    /*if(keyDown("space")){
        which = "bounce";
    }
    else if(keyDown("c")){
        which = "collide";
    }
    if(which === "bounce")
        bounceOff(object2,object1);
    else if(which === "collide"){
        if(isTouching(object2,object1))
            fill(150,234,150);
        else
            fill(0);
    }*/
}
/*function keyPressed(){
    if(keyCode === 32){
       if(isTouching(object2,object1)){
           fill(150,234,255);
       }
    }
       else
           bounceOff(object2,object1);
}*/