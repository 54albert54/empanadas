import { useContext } from "react";
import { AppContext } from "../../context";

export const Icono =({img,children,setInvisible})=>{
  const context =useContext(AppContext)
  
return(
<div className="iconos_container">
  
  <div onClick={()=>{setInvisible()}} className="icono">
    <img className="iconos_img" src={img} alt="imagende un icono"  />
    </div> 
  <p className="iconos_title">
  {children}
  </p>
  </div>
)
};