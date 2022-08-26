const GameRoom = ({players}) => {

    const Display = ({playerName}) => <li>{playerName}</li>
    return (
        <ul className="previousSearch">
            console.log(players.type());
            {players.map((Name, i) => (
                <Display playerName={Name} key={i}/>
            ))}
        </ul>
    );
}

export default GameRoom;