

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.getElementById('canvas').appendChild(canvas);


let bg = {};

let monsterReady = false;
let hero = { x: canvas.width / 2, y: canvas.height / 2 };
let monster = [
	{ x: 100, y: 100 },
	{ x: 200, y: 200 },
	{ x: 300, y: 300 },
]
;

let startTime = Date.now();
const SECONDS_PER_ROUND = 30;
let elapsedTime = 0;

var score = 0;

function loadImages() {
	bg.image = new Image();

	bg.image.onload = function () {
		// show the background image
		bg.ready = true;
	};
	bg.image.src = 'images/background.png';
	hero.image = new Image();
	hero.image.onload = function () {
		// show the hero image
		hero.ready = true;
	};
	hero.image.src = 'images/hero.png';

	monster.forEach((monster, i) => {
		monster.image = new Image();
		monster.image.onload = function () {
			// show the monster image
			monsterReady = true;
			
		};
		monster.image.src = `images/monster_${i + 1}.png`;
	});
}



let keyDisable = false;
let keysPressed = {};
function setupKeyboardListeners() {
keyDisable = true;
	document.addEventListener(
		'keydown',
		function (e) {
			keysPressed[e.key] = true;
		},
		false
	);

	document.addEventListener(
		'keyup',
		function (e) {
			keysPressed[e.key] = false;
		},
		false
	);
}


function randomlyPlace(axis) {
	if (axis === "x") {
	  return Math.floor(Math.random() * canvas.width + 1);
	} else {
	  return Math.floor(Math.random() * canvas.height + 1);
	}
  }

function heroReturn() {
	if (hero.x <= 0) {hero.x = canvas.width;}
		else if (hero.x >= canvas.width) {hero.x = 0;}
	if (hero.y <= 0) {hero.y = canvas.height;}
		else if (hero.y >= canvas.height) {hero.y = 0;}
}
  
let lives = 3;
let outoftime = false;

function timer() {
	elapsedTime += 1;
	if (SECONDS_PER_ROUND  - elapsedTime <=0) {
		lives--;
		
	}
}
stopCounting = setInterval(timer, 1000);

function stopTime() {
	clearInterval (stopCounting)
	
}

function checkIfHeroCapture() {
	monster.forEach((monster) => {
		if (hero.x <= monster.x + 32 
			&& monster.x <= hero.x + 32 
			&& hero.y <= monster.y + 32 
			&& monster.y <= hero.y + 32) {

			monster.x = canvas.width - randomlyPlace("x");
			monster.y = canvas.height - randomlyPlace("y");
			score++;
			applicationState.highScore.score++;
			console.log({applicationState})
			
		}
	});
}


let update = function () {
	elapsedTime = Math.floor((Date.now() - startTime) / 1000);
	
	if (keysPressed['ArrowUp']) {
		hero.y -= 5;
	}
	if (keysPressed['ArrowDown']) {
		hero.y += 5;
	}
	if (keysPressed['ArrowLeft']) {
		hero.x -= 5;
	}
	if (keysPressed['ArrowRight']) {
		hero.x += 5;
	}

	
	
	checkIfHeroCapture();
	heroReturn();

	
};


function render() {
	
	if (bg.ready) {
		ctx.drawImage(bg.image, 0, 0);
	}
	if (hero.ready) {
		ctx.drawImage(hero.image, hero.x, hero.y);
	}
	monster.forEach((monster) => {
		if (monsterReady) {
			ctx.drawImage(monster.image, monster.x, monster.y);
		}
	});
	if(SECONDS_PER_ROUND-elapsedTime <=0) {
		stopTime();
		keyDisable = false;
		hero.ready = false;
		monsterReady = false;
		ctx.font = "20px Georgia";
		ctx.fillStyle = "black";
		ctx.fillRect(180, 200, 150, 100);
		ctx.fillStyle = "#ffffff";
		ctx.fillText("Try again!", 200, 250);
		} else {ctx.fillText(`Seconds Remaining: ${SECONDS_PER_ROUND - elapsedTime}`, 20, 20);}
	ctx.fillText("Score: " + score , 20, 40);
	ctx.fillText("Lives: " + lives , 20, 60);
	ctx.font = "20px Arial";
	
}


function main() {
	update();
	render();

	requestAnimationFrame(main);
}


var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
// loadImages();
// setupKeyboardListeners();
// main();


function startgame() {	
	loadImages();
setupKeyboardListeners();
main();
}

function resetgame() {
	location.reload();
}
