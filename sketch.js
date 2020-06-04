/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//Game engine 
var engine, world;
*/
//Game Parts
var player , Enemies , powerPelets ,gamestate=0,game,form;
//database
var database
//UI and Levels
var startButton , StartTab , LeadersBoard , Levels , LevelTab , Score , Login,LoginTab,SignUp,SignUpTab,signDetails; 
function setup(){
    var canvas = createCanvas(800,800);
    database=firebase.database();
   /* engine = Engine.create();
    world = engine.world;*/
    game = new Game();
    game.getState();
    game.start();

    
}

function draw(){
    
}   
 