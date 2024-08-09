# CCSelector
entrypoint selector for [CrossCode](//cross-code.com)

## why?
* when modding CrossCode, it is fairly common to have multiple entrypoints (HTML files) for the game.
* at it's simplest, CCSelector allows loading the vanilla game alongside a mod loader with minimal effort.
* however, a more advanced setup may have both [CCLoader](//github.com/CCDirectLink/CCLoader) and [CCLoader3](//github.com/CCDirectLink/CCLoader3) installed, which CCSelector will also account for.

## usage
* clone or download this repository to the root of your CrossCode game directory.
* open `package.json` and change the `main` property to `CCSelector/index.html`.
* launch the game, and enjoy!
