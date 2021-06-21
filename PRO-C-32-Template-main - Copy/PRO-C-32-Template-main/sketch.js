const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg ;
function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);

}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.datetime;
    var hours = datetime.slice(11, 13);
    console.log(hour);
    // add conditions to change the background images from sunrise to sunset
if(hours>=04 && hours<=06)
{
    bg = "sunrise1.png";
}
else if(hours>=06 && hours<=08)
{
    bg = "sunrise2.png";
}
else if(hours>=08 && hours<=10)
{
    bg = "sunrise3.png";
}
else if(hours>=10 && hours<=12)
{
    bg = "sunrise4.png";
}
else if(hours>=12 && hours<=14)
{
    bg = "sunrise5.png";
}
else if(hours>=14 && hours<=16)
{
    bg = "sunrise6.png";
}
else if(hours>=16 && hours<=18)
{
    bg = "sunset7.png";
}
else if(hours>=18 && hours<=20)
{
    bg = "sunset8.png";
}
else if(hours>=20 && hours<=22)
{
    bg = "sunset9.png";
}
else if(hours>=22 && hours<=24)
{
    bg = "sunset10.png";
}
else if(hours>=24 && hours<=02)
{
    bg = "sunset11.png";
}
else
{
    bg = "sunset12.png";
}
    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg);
}
