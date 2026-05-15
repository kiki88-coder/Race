const player =
  document.getElementById("player")

const enemy =
  document.getElementById("enemy")

const scoreText =
  document.getElementById("score")

let playerX = 165
let enemyY = -150
let enemyX = 165

let score = 0

document.addEventListener("keydown", move)

function move(e){

  if(e.key === "ArrowLeft"){

    playerX -= 25

  }

  if(e.key === "ArrowRight"){

    playerX += 25

  }

  if(playerX < 0){
    playerX = 0
  }

  if(playerX > 330){
    playerX = 330
  }

  player.style.left =
    playerX + "px"
}

function game(){

  enemyY += 7

  enemy.style.top =
    enemyY + "px"

  if(enemyY > 800){

    enemyY = -150

    enemyX =
      Math.floor(Math.random() * 5) * 80

    enemy.style.left =
      enemyX + "px"

    score++

    scoreText.innerText = score
  }

  if(
    enemyY > 600 &&
    enemyX < playerX + 70 &&
    enemyX + 70 > playerX
  ){

    alert("💥 Авария! Очки: " + score)

    location.reload()
  }

  requestAnimationFrame(game)
}

game()
function leftMove(){

  playerX -= 25

  if(playerX < 0){
    playerX = 0
  }

  player.style.left =
    playerX + "px"
}

function rightMove(){

  playerX += 25

  if(playerX > 330){
    playerX = 330
  }

  player.style.left =
    playerX + "px"
}