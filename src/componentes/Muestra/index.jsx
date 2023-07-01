import { useContext } from "react";
import { AppContext } from "../../context";
import "./style.css"
export const Muestra =({jugos,quitarElemento})=>{
  const context =useContext(AppContext)
return(
  <div className="Pedido_container" > <p>{jugos.sabor+" x " + jugos.totalJugos}</p>   <p>{jugos.total+" $"}</p>
  <div onClick={()=>quitarElemento(jugos.id)} >
    <img className="Pedido_img" src={context.iconClose} alt="hola" /></div>
  </div>
)
};