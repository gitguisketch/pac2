var pac;
var ghostvelo = 3
function preload() {
    pc = loadAnimation("pc1.png", "pc2.png");
    rg = loadAnimation("g1.png", "g2.png", "g3.png", "g4.png", "g5.png", "g6.png")
    pg = loadAnimation("r1.png", "r2.png", "r3.png", "r4.png", "r5.png","r6.png")
    pclife = loadImage("pc1.png")
}

function setup() {
    createCanvas(800, 400);
    pac = createSprite(200, 200);
    pac.addAnimation("pc", pc);
    pac.scale = 0.7;
    redghost = createSprite(400, 200)
    redghost.addAnimation("rg", rg)
    redghost.scale = 1.2
    pinkghost = createSprite(400, 170)
    pinkghost.addAnimation("pg", pg)
    pinkghost.scale = 1.2
    pacball = createSprite(200,200)
    pacball.scale = 0.05
    pacball.shapeColor = "yellow"
    life1 = createSprite(300, 390)
    life1.addImage(pclife)
    life1.scale = 0.5
    life2 = createSprite(280, 390)
    life2.addImage(pclife)
    life2.scale = 0.5
    life3 = createSprite(260, 390)
    life3.addImage(pclife)
    life3.scale = 0.5
    parede1 = createSprite(400, 50, 700, 3);
    parede1.shapeColor = "blue";
    parede2 = createSprite(400, 350, 700, 3);
    parede2.shapeColor = "blue";
    parede3 = createSprite(50, 300, 3, 100)
    parede3.shapeColor = "blue"
    parede4 = createSprite(50, 100, 3, 100)
    parede4.shapeColor = "blue"
    parede5 = createSprite(750, 100, 3, 100)
    parede5.shapeColor = "blue"
    parede6 = createSprite(750, 300, 3, 100)
    parede6.shapeColor = "blue"
    parede7 = createSprite(400, 150, 100, 3)
    parede7.shapeColor = "blue"
    parede8 = createSprite(400, 230, 100, 3)
    parede8.shapeColor = "blue"
    parede9 = createSprite(450, 190, 3, 80)
    parede9.shapeColor = "blue"
    parede10 = createSprite(350, 190, 3, 80)
    parede10.shapeColor = "blue"
    parede11 = createSprite(25, 250, 50, 3)
    parede11.shapeColor = "blue"
    parede12 = createSprite(25, 150, 50, 3)
    parede12.shapeColor = "blue"
    parede13 = createSprite(775, 250, 50, 3)
    parede13.shapeColor = "blue"
    parede14 = createSprite(775, 150, 50, 3)
    parede14.shapeColor = "blue"
    parede15 = createSprite(600, 120, 50, 3)
    parede15.shapeColor = "blue"
    parede16 = createSprite(200, 120, 50, 3)
    parede16.shapeColor = "blue"
    parede17 = createSprite(600, 260, 50, 3)
    parede17.shapeColor = "blue"
    parede18 = createSprite(200, 260, 50, 3)
    parede18.shapeColor = "blue"
    parede19 = createSprite(700, 200, 3, 50)
    parede19.shapeColor = "blue"
    parede20 = createSprite(90, 200, 3, 50)
    parede20.shapeColor = "blue"
    parede21 = createSprite(400, 100, 3, 50)
    parede21.shapeColor = "blue"
    parede22 = createSprite(400, 300, 3, 50)
    parede22.shapeColor = "blue"
    
    
}

function draw() {
    background("black");
    drawSprites();

    if(keyDown(RIGHT_ARROW)){
        pac.x = pac.x + 3
        pac.mirrorX(+1)
    }

    if(keyDown(LEFT_ARROW)){
        pac.x = pac.x - 3
        pac.mirrorX(-1)
    }

    if(keyDown(UP_ARROW)){
        pac.y = pac.y - 3
    }

    if(keyDown(DOWN_ARROW)){
        pac.y = pac.y + 3
    }

    pac.collide(parede1)
    pac.collide(parede2)
    pac.collide(parede3)
    pac.collide(parede4)
    pac.collide(parede5)
    pac.collide(parede6)
    pac.collide(parede7)
    pac.collide(parede8)
    pac.collide(parede9)
    pac.collide(parede10)
    pac.collide(parede11)
    pac.collide(parede12)
    pac.collide(parede13)
    pac.collide(parede14)
    pac.collide(parede15)
    pac.collide(parede16)
    pac.collide(parede17)
    pac.collide(parede18)
    pac.collide(parede19)
    pac.collide(parede20)
    pac.collide(parede21)
    pac.collide(parede22)

    if(pac.x < 0){
        pac.x = 800
    }
    
    if(pac.x > 800){
        pac.x = 10
    }
  updateposition()
}
   
  function updateposition(){
    let direcaovermelho = p5.Vector.sub(pac.position, redghost.position)
    direcaovermelho.normalize()
    redghost.velocity.x = direcaovermelho.x * ghostvelo
    redghost.velocity.y = direcaovermelho.y * ghostvelo
    let direcaorosa = p5.Vector.sub(pac.position, pinkghost.position)
    direcaorosa.normalize()
    pinkghost.velocity.x = direcaorosa.x * ghostvelo
    pinkghost.velocity.y = direcaorosa.y * ghostvelo
  }