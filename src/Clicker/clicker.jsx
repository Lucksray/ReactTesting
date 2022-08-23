import "./clicker"
let ReactDOM = require('react-dom')

function ClickerHeader() {
    return (
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Clicker</title>
        <header>

            <h1>Clicker Page</h1>
            <nav className="navbar">
            <ul className="nvabar--list">
                    <li>Step one</li>
                    <li>step two</li>
                    <li>Step three</li>
                </ul>
            </nav>
        </header>
        </head>
    )
}

function ClickerBody(){
    <body>
        <script src="./clicker.js"></script>
        <p>This is your count</p>
        <p id="counter"></p>
    </body>
}



module.exports = {ClickerHeader,ClickerBody};