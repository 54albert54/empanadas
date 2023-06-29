import { useContext } from "react";
import { AppContext } from "../../context";
import { BottonWS } from "../Botton";
import "./style.css"

export const MyPedido =()=>{
  const context =useContext(AppContext)
  

  let numWs = 9786011460
  
  let jugosP ="jugos: "
  const calcularJugos =()=>{
    

    return(
      context.jugos.map((jugos,index )=>{
        total +=jugos.precios
        
        jugosP +=jugos.sabor+", "
        
        return( 
          
        <div className="Pedido_container" key={index}> <p>{jugos.sabor}</p>  <p>__</p> <p>{jugos.precios}</p></div>)})
    )
  }
  
  
  
  let total = 0
  
return(
  <>
<div >
  
<h1 > jugos</h1>

{
  calcularJugos()
}


</div>
<p>total : {total}</p>
{context.jugos.length>0?
<div onClick={()=>{context.setJugos([])}}>
<BottonWS numWs={numWs} mensaje={jugosP +" para un total: "+total+"dolares"} > finalizar pedidos</BottonWS>
</div>:<div className="Botton_desabilitado"> <p>Has tu pedido primero</p></div>}

</>
)
};