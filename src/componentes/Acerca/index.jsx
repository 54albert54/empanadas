import { useContext } from "react";
import { AgregarNumero } from "../AgregarNumero";
import { AppContext } from "../../context";
import { Boton } from "../Boton";
import "./style.css"


const Reconfir =()=>{
  const context =useContext(AppContext)

return(
<>


<div onClick={()=>context.sethasNumber(false)} className="cambiar_boton"> Cambiar numero </div>

</>
)
};

// hasNumber, sethasNumber
export const Acerca =()=>{
  const context =useContext(AppContext)
return(
<div>
  <h3 className="">Puequeña intro</h3>
  <p>Bueno aqui es donde va la descripcion y mucho blabla bla
  </p>
<h2> Numero contacto: {context.numero}</h2>
 <p>{context.link==context.linkCel?"Enviaras mensaje desde el cel":"enviaras mensajes desde la web"}</p>
<Boton funcion={context.changeLink}/>

{!context.hasNumber?<AgregarNumero/>:<Reconfir/>}
  
</div>
)
};