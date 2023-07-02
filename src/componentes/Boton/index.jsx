import {  useState } from "react";
import "./style.css"



export const Boton =({funcion})=>{
  const [active,setActive] = useState(false)
  const isActive = ()=>{
    setActive(active=>!active)
    
    funcion()

  }

return(
  <div  onClick={()=>isActive} >
<label className="switch">
  <input onChange={isActive} className="toggle" type="checkbox"/>
  <span className="slider"></span>
  <span className="card-side"></span>
</label>
</div>

)
};