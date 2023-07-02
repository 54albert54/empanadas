import { useContext } from "react";
import "./style.css"
import { AppContext } from "../../context";
import { AgregarNumero } from "../AgregarNumero";

export const BottonWS =({children,mensaje})=>{
   const context =useContext(AppContext)
   
   
return(
<div className="Botton">


{context.hasNumber?
<a title="Click para chatear" href={`${context.link}?text=${mensaje}&phone=${context.numero}`} target="blank" rel="noopener"><p className="Botton_p" >{children}</p> </a>
:<div>
   <AgregarNumero/>
    </div>}

    
   </div>
)
};

