# Save de Codigo

> init = function() {
>   
> MegaX=0
> MegaY=0
> Vel=3
> 
> 
> }
>
> update = function() {
>  if (keyboard.LEFT) { MegaX = MegaX-Vel ; }
>  if (keyboard.RIGHT) { MegaX = MegaX+Vel ; }
>  if (keyboard.UP) { MegaY = MegaY+Vel ; }
>  if (keyboard.DOWN) { MegaY = MegaY-Vel ; }
>
>}
>
>draw = function() {
 > screen.clear()
 > screen.drawMap('mapinha',0,0,496,200)
 > screen.drawSprite('alien',MegaX,MegaY,32)
>
>}