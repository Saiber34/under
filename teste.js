let sprite, player, bola, floor, wall, wall2, wall3, smiley, floor2;

function setup() {
	new Canvas(1366,766);
let playerText = `
.rr...rr.
rrrr.rwrr
rrrrrrrwr
.rrrrrrr.
..rrrrr..
...rrr...
....r....`;

	player = new Sprite();
	player.img = spriteArt(playerText, 16);
    player.visible = true
	player.bouciness = 1

    world.gravity.y = 10;

    floor = new Sprite();
	floor.y = 766;
	floor.w = 1366;
	floor.h = 5;
	floor.collider = 'static';

    floor2 = new Sprite();
	floor2.y = 400;
	floor2.w = 30;
	floor2.h = 5;
	floor2.collider = 'static';   


    wall = new Sprite();
	wall.y = 250;
    wall.x = 0
	wall.w = 5;
	wall.h = 1050;
	wall.collider = 'static';

    wall2 = new Sprite();
	wall2.y = 250;
    wall2.x = 1366
	wall2.w = 5;
	wall2.h = 1050;
	wall2.collider = 'static';

    wall3 = new Sprite(200,400,30,400, 's')
    wall3.collider = 'static';
}

function draw() {
    
    clear();
    if (kb.pressing('left')) player.vel.x = -5; else player.vel.x = 0;

    if (kb.pressing('right')) player.vel.x = +5;

    if (kb.pressing('up')) player.vel.y = -10;

    if (kb.pressing('down')) player.vel.y = +7;

    if (kb.pressing('space')) {
		player.overlaps(wall3);
	} else {
		player.collides(wall3);
	}

    if (mouse.presses()) new Sprite(mouse.x, mouse.y, 10);
    background('black');
}

