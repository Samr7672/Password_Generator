import React , {useCallback, useEffect ,useState} from "react";
import { createRoot } from "react-dom/client";

function Main(){
    const [password,setPassword]=useState("Abxsxjaxxjax")
    const [length,setLength]=useState(10)
    const [usesNumber,setNumber]=useState(false)
    const [usesSymbol,setSymbol]=useState(false)

// jitna bar Render Hoga utna bar phir se chalega jo ki memeory lega hum nhi chahte hai ke ye baar baar chale 
// to hum yahan par useEffect ka use karenge 

// we use usecallback when we want the static function data to not repeat 
  const passwordGenerator=useCallback(()=>{
       
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

        if(usesNumber){
            str+="1234567890"
        }
        if(usesSymbol){
            str+="!@#$%^&*()_-+=<>,./?::'`~"
        }
            let pass=""
        for( let i=0;i<length;i++){
         
            pass +=str[Math.floor(Math.random()*str.length)];

        }

        setPassword(pass);
        
    

},[length,usesNumber,usesSymbol])

    // lekin ab bhi ye function beech me render ho raha hai aur memory le raha hai 
// agar hum isko khula sandh jaisa chod denge to wo baar baar rerender karwayega 
// rdGenerator(); passwo

useEffect(()=>{
// to isko hum useEffect ke undar rakhenge
passwordGenerator()
},[length,usesNumber,usesSymbol]) //[length,usesNumber,usesSymbol] agar ye change hoga tabhi wo chalega 



    return (
        <div id="pass">
        <h1>{password}</h1>
        <br></br>
         <div>
      
      <input type="range" min={0} max={25} placeholder="10" onChange={(e)=> setLength(e.target.value)}  /> 
        <label>length({length})</label>

     
        <input type="checkbox" onChange={()=> setNumber(!usesNumber)} />
        <label>Number</label>

        <input type="checkbox" onChange={()=> setSymbol(!usesSymbol)} />
        <label>Symbol</label>


        </div>
        
        </div>
    )
}
createRoot(document.querySelector("#root")).render(<Main></Main>)