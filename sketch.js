var wall,thickness;
var bullet,speed,weight; 
function setup() {
createCanvas(800,400); 
bullet=createSprite(400,200,100,10);
bullet.shapeColor="blue";
wall=createSprite(700,200,60,800) 
speed=random(223,321);
thickness=random(30,52)
weight=random(400,1500); 
bullet.velocityX=speed;
}
function draw() { 
background(0,0,0); 
if(hasColiided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10){
    wall.shapeColor="red";
}
if(damage<10){
    wall.shapeColor="green";
}
} 
drawSprites(); 
}
function hasColiided(bullet1,wall1){
    bulletRightEdge=bullet1.x+bullet1.width;
    wallLeftEdge=wall1.x;
    if(bulletRightEdge=wallLeftEdge){
        return true
    }
    return false
}