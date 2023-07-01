import { useContext } from "react";
import { AppContext } from "../../context";
import "./style.css"

export const Alerta =({id})=>{
  const context =useContext(AppContext)

return(
  <>
<div onClick={()=>{context.setAlerta("Presentacion_invisible")}}  className={`presentacion_pantalla  ${context.alerta}`} ></div>
<div className={`presentacion_alerta   ${context.alerta}`}>
  <div className="alerta_option" >
  <p onClick={()=>{context.quitarElemento(context.id),context.setAlerta("Presentacion_invisible")}} className='alerta_boton si'>si </p>
  <p onClick={()=>{context.setAlerta("Presentacion_invisible")}} className='alerta_boton no'>no </p>
  </div>
</div>
</>

)
};