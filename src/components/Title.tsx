import { useState } from "react";


function Title(){
    
    let [counter, setCounter] = useState(0);

    return (
        <>
        <p>Buenas {counter}</p>
        <button onClick={() => {setCounter(counter + 1)}}> Presioname </button>
      </>
    )
  }

export default Title