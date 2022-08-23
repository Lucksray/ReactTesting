import "./header.css"

function Header(){

    return ( 
    <header>
        <h1>Reality</h1>
        <nav className="navbar">
            <ul className="nvabar--list">
                <li><a href="../Clicker/clicker.jsx">Clicker</a></li>
                <li>step two</li>
                <li>Step three</li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;