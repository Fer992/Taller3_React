import React from "react";
import { useState } from "react";   
import '../src/index.css'

function Contador(){
    const[count, setCount] = useState (0);

    return(
        <div className="contador">
            <h1>Contador: {count} </h1>
            <button className="button" onClick={() => setCount (count + 1)}>Incrementar</button>
        </div>
    );
}
export default Contador;