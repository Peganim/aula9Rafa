//declarar variável
var box;

//criar função setup
function setup() {
    createCanvas(400, 400);
    //criar uma sprite para box
box = createSprite (200,200,30,30);

    //definir cor para a box
box.shapeColor = "magenta";
}

//criar função Draw
function draw() {
    background("green");

    //if para verificar em qual seta o jogador está tocando
if (keyIsDown(RIGHT_ARROW)){
box.x = box.x +5;
}
if (keyIsDown(LEFT_ARROW)){
box.x = box.x -5;
}
if (keyIsDown(UP_ARROW)){
box.y = box.y -5;
}
if (keyIsDown(DOWN_ARROW)){
box.y = box.y +5;
}




    //desenhar os sprites 
drawSprites();

}



