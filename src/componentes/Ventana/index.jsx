
import { useContext, useState } from "react";
import { AppContext } from "../../context";
import { Icono } from "../Icono";

export const Ventana =({img,datos,children})=>{
  const context =useContext(AppContext)
  const [invisible, setInvisible] = useState(true)
 
  
  



return(
  <>
<div className={`Home_containet ${invisible?"invisible":"" }`}>
  <div className="Home_boton_container">
    <div onClick={()=>setInvisible(true) } >
    <div className={`Boton Botonrojo`}><img className="Home_boton_img" src={context.iconClose} alt="sd" />  </div> 
    </div>
    
</div>
  <div className="Home_containet2">
    <div > 
    <h1 className="Home_title" >{children}</h1>
    </div>
  
  <div className="Home_datos">
  {datos}
  <div className="Home_footer" ></div>
  </div>

  </div>
</div>
<Icono  img={img} setInvisible={()=>setInvisible(state => !state)}>{children}</Icono>
</>
)
};

