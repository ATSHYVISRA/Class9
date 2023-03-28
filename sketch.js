var box ;
function setup() {
  createCanvas(400,400);
  box = createSprite (100, 50, 60, 70)
}

function draw() 
{
  background(30);
  if (keyDown('right')) {
    box.x  = box.x+1

  }
  if (keyDown('left')){
    box.x  = box.x-1
  }
  if (keyDown('up')){
    box.y = box.y-1
  }
  if (keyDown('down')){
    box.y = box.y+1
  }
drawSprites ()

}
