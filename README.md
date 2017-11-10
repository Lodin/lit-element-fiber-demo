# Demo for Performance Problems on individual renderings

Make sure you have polymer-cli installed
`npm i -g polymer-cli`

Run the actuall demo
`npm run start`

Open it in the Browser

## Know "Problem"?
As each element is it's own little island it result in a LOT of individual render calls by lit-html.

As you can't pierce shadow dom you can't have a global rendering.