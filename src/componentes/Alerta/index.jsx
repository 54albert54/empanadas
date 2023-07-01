import { useContext } from "react";
import { AppContext } from "../../context";
import "./style.css"

export const Alerta =()=>{
  const context =useContext(AppContext)
  

const confirmar=()=>{
  //debido a que este es un component esterto por el mmento no encontre otra mejor manera de hacerlo reutilizable
  if (context.clase==="jugo"){
    return(
      context.quitarJugo(context.id)
    )
  }if (context.clase==="empanada"){
    return(
      context.quitarEmpanadas(context.id)
    )
  }if (context.clase==="quipes"){
    return(
      context.quitarQuipes(context.id)
    )
  }
}
return(
  <>
<div onClick={()=>{context.setAlerta("Presentacion_invisible")}}  className={`presentacion_pantalla  ${context.alerta}`} ></div>
<div className={`presentacion_alerta   ${context.alerta}`}>
  <div className="alerta_option" >
  <p onClick={()=>{confirmar(),context.setAlerta("Presentacion_invisible")}} className='alerta_boton si'>si </p>
  <p onClick={()=>{context.setAlerta("Presentacion_invisible")}} className='alerta_boton no'>no </p>
  </div>
</div>
</>

)
};