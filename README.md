# Demo for Performance Problems on individual renderings

You can see the Result here:
https://dakmor.github.io/lit-element-fiber-demo/

And this is how it should look
https://claudiopro.github.io/react-fiber-vs-stack-demo/fiber.html

## Know "Problem"?
As each element is it's own little island it result in a LOT of individual render calls by lit-html.
As you can't pierce shadow dom you can't have a global rendering.
So maybe impossible without some shared resources or shared knowlege (render priorities?)


## Local Setup

Make sure you have polymer-cli installed
`npm i -g polymer-cli`

Run the actuall demo
`npm run start`

Open it in the Browser