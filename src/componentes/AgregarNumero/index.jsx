import { useContext, useState } from "react";
import "./style.css"
import { AppContext } from "../../context";

export const AgregarNumero =()=>{
  const context =useContext(AppContext)
  const [dato, setDato] = useState("")
  
  const recibirNumero = (e)=>{
    const newDato = e.target.value
    setDato(newDato)
  }
  const agregarNumero = () =>{
    const newNum =  "+1"+dato
    
    context.setNumero(newNum)
    setTimeout(() => {
      context.saveNumber(newNum)
      console.log("se guardo el numero en local storage")
    }, 1500);
    
    
  }


return(
  <form className="agregar_container">
   
<input className="agregar_input" onChange={recibirNumero} name="nuevoNumero" type="text" placeholder="Escribe tu numero de whatsapp" />

<button onClick={()=>{agregarNumero(),context.sethasNumber(true)}} className="agregar_boton" type="reset" > <p>Guardar</p></button>
</form>
)
};