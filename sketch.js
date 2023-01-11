var backgroundimg
var bulletimg, groupofBulletsImg
var bullet
var playerimg, player
var monsters
var fireball

function preload() {
    backgroundimg = loadImage("bkgImg.png");
    bulletimg = loadImage("./gameimages/bullet.png");
    groupofBulletsImg = loadImage("./gameimages/collectbullet.png");
    playerimg = loadAnimation("./gameimages/character1.png", "./gameimages/character2.png",);
    monster1img = loadImage("./gameimages/monsterImg.png");
    monster2img = loadImage("./gameimages/monster2Img.png");
    monster3img = loadImage("./gameimages/monster3Img.png");
    fireballimg = loadImage("./gameimages/fireballImg.png");
}

function setUp() {
    createCanvas(1000,800);

}

function draw() {
    background(backgroundimg);



    drawSprites();
}
