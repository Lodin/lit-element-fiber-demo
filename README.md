# Demo for Performance Problems on dom tree renderings

You can see the Result here:  
Approach 1: Layered Custom Dom Elements  
https://dakmor.github.io/lit-element-fiber-demo/index-layered.html

Approach 2: Layered Dom (more in light dom)  
https://dakmor.github.io/lit-element-fiber-demo/index-light-dom.html

Approach 3: Flat Dom Tree  
https://dakmor.github.io/lit-element-fiber-demo/index-flat.html


And this is how it should look  
https://claudiopro.github.io/react-fiber-vs-stack-demo/fiber.html

## Known "Problem"?
Even with a flat dom structure handling so many levels of render instances of lit-html seems to be a performance problem.

Maybe there needs to be some shared knowledge? render priorities?

## Local Setup

Make sure you have polymer-cli installed
`npm i -g polymer-cli`

Run the actuall demo
`npm run start`

Open it in the Browser