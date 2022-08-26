import React, {useState,useEffect} from "react"

const Clicker = () => {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = "Clicker";
        return(() => console.log(`Final count: ${count}`));
    });

    let mileStones= (count) => {
        if(count <= 99){
            return (
                <p>You have not reached a milestone yet</p>
            );
        }else if(count >= 100 && count <= 999){
            return (
                <p>You have reached the milestone of {count} clicks</p>
            );
        } else if(count >= 1000 && count <= 9999){
            return (
                <p>You have reached the milestone of {count} clicks</p>
            );
        } else if(count >= 10000){
            return (
                <>
                <p>You have clicked over {count-1} times...</p>
                <p>Does your finger hurts?</p>
                </>
            )
        }
    }
    
    return (
        <>
            <p>You have clicked {count} times!</p>
            <button onClick={(() => setCount(count=> count+1))}>
            +1
            </button>
            <p>{mileStones}</p>
        </>
    );
}





export default Clicker;