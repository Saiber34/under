let player, block;
let gridSize = 32;
let valor;

function setup() {
	new Canvas(1366,766);
	valor = document.querySelector('valor');

	allSprites.tileSize = gridSize;
	allSprites.rotationLock = true;

	player = new Sprite(0,0,1,1);
	player.color = 'Cyan';
	block = new Sprite(10,10,1,1);
	block.color = 'red'
}

function draw() {
    clear();
	for (let i = 0; i < width / gridSize; i++) {
		for (let j = 0; j < height / gridSize; j++) {
			rect((i * gridSize)-gridSize/2, (j * gridSize)-gridSize/2, gridSize, gridSize);
		}
	}

	block.moveTowards(player, 0.001)
	if (kb.presses('up')) player.move(1, 'up');
	if (kb.presses('down')) player.move(1, 'down');
	if (kb.presses('left')) player.move(1, 'left');
	if (kb.presses('right')) player.move(1, 'right');
	if (player.collides(block)) {
		let pontos = Number.parseInt(valor.innerText);
		pontos-=10;
		valor.innerText=pontos;
		block.remove()
		block = new Sprite(1,1)
		block.color = 'red'
		block.x = Math.random(1366)
		block.y = Math.random(768)
	}
}