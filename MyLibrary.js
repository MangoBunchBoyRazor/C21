//Function to detect collision between two objects
function isTouching(spriteA, spriteB) {
    //Declaring variables for calculating distance
    var distX,distY,distance;

    //Checking collision between two rectangles
    if(spriteA.type == "rectangle" && spriteB.type == "rectangle"){
    /*If the left edge of the first rectangle is to the right of the left edge of the second rectangle
    and the right edge of the first rectangle is to the left of the right edge of the second rectangle
    and the bottom edge of the first rectangle is below the top edge of the second rectangle
    and the top edge of the first rectangle is above the bottom edge of the second rectangle
    Then the two objects are colliding*/
        if(spriteA.x + spriteA.width >= spriteB.x &&
           spriteA.x <= spriteB.x + spriteB.width &&       
           spriteA.y + spriteA.height >= spriteB.y && 
           spriteA.y <= spriteB.y + spriteB.height)      
            return true;
        return false;
    }
    //Checking collision between two circles
    else if(spriteB.type == "circle" && spriteA.type == "circle"){
        distX = Math.abs(spriteA.x - spriteB.x); //Distance between the circles on the x axis
        distY = Math.abs(spriteA.y - spriteB.y); //Distance between the circles on the y axis
        //Using the pythagoras theorem to find the exact distance between the circles
        distance = round(sqrt((distX * distX) + (distY * distY)));

        //Using the p5.js method
        //distance = round(dist(spriteA.x,spriteA.y,spriteB.x,spriteB.y));
        //If the distance between the two circles is less than the sum of their radius
        //Then they are colliding
        if (distance <= (spriteA.diameter/2 + spriteB.diameter/2))
            return true;   
        return false;
    } 
    //Checking collision between a circle and rectangle
    else{
        //Declaring some variables for testing
        var tx,ty,c,r;

        //Setting the test circle and rectangle
        if(spriteA.type === "circle"){
            c = spriteA;
            r = spriteB;
        }
        else{
            r = spriteA;
            c = spriteB;  
        }

        //Setting the test edges to the circles position
        tx = c.x;
        ty = c.y; 

        if (c.x < r.x)   //Testing if the circle is to the left of the rectangle
            tx = r.x; //Setting the test edge to the left edge
        else if (c.x > (r.x+r.width))  //Testing if the circle is to the right of the rectangle 
            tx = r.x+r.width; //Setting the test edge to the right edge 
        if (c.y < r.y)   //Testing if the circle is above the rectangle
            ty = r.y; //Setting the other test edge to the right edge
        else if (c.y > (r.y+r.height)) //Testing if the circle is below the rectangle
            ty = r.y+r.height; //Setting the other test edge to the bottom edge

        distX = c.x-tx; //Finding the distance on the x axis
        distY = c.y-ty; //Finding the distance on the y axis
        //Using the pythagoras theorem to find the exact distance between the circle and rectangle
        distance = round(sqrt((distX*distX) + (distY*distY))); 
        
        //p5 method
        //distance = dist(c.x,c.y,tx,ty);

        //If the distance is less than the radius if the circle
        //Then they are colliding
        if (distance <= c.diameter/2) 
            return true;
        return false;
    }
}
//Function to bounce off the first object with the second object
function bounceOff(a,b){
    //Calling function is touching to detect collision
    if(isTouching(a,b)){
        if(a.type === "rectangle" || b.type === "rectangle"){
            //Checking if the first object is above or below the second object
            //If so, then change the y velocity
            if(a.y < b.y || a.y > b.y + b.height){
                a.velocityY *= -1;
                return true;
            }
            //Else change the x velocity
            else{
                a.velocityX *= -1;
                return false;
            }
        }
        else if(a.type === "circle" && b.type === "circle"){
            //Checking if the first object is above or below the second object
            //If so, then change the y velocity
            if(a.y < b.y - b.diameter/2 || a.y > b.y + b.diameter/2){
                a.velocityY *= -1;
                return true;
            }
            else{
                a.velocityX *= -1;
                return false;
            }
        }
    }
}