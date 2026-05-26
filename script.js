import React , {useEffect ,useState} from "react";
import { createRoot } from "react-dom/client";

function Main(){
    const [password,setPassword]=useState("Abxsxjaxxjax")
    const [length,setLength]=useState(10)
    const [usesNumber,setNumber]=useState(false)
    const [usesSymbol,setSymbol]=useState(false)








    return (
        <>
        <h1>{password}</h1>
         <div>
      
      <input type="range" min={0} max={25} placeholder="10"> length</input>
        <label>length({length})</label>

        <input type="checkbox"></input>
        <label>Number</label>



        </div>
        
        </>
    )
}