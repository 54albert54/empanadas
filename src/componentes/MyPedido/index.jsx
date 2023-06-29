import { useContext } from "react";
import { AppContext } from "../../context";
import { BottonWS } from "../Botton";
import "./style.css"

export const MyPedido =()=>{
  const context =useContext(AppContext)
  

  let numWs = 9786011460
  
  let jugosP ="Jugos de: "
  const calcularJugos =()=>{
    

    return(
      context.jugos.map((jugos,index )=>{
        total +=jugos.precios
        
        jugosP +=jugos.sabor+", "
        
        return( 
          
        <div className="Pedido_container" key={index}> <p>{jugos.sabor+"    "}</p>   <p>{jugos.precios+" $"}</p></div>)})
    )
  }
  
  
  
  let total = 0
  
return(
  <>
<div>
  
<h1> Jugos</h1>

{
  calcularJugos()
}


</div>
<p>total : {total}</p>
{context.jugos.length>0?
<div  onClick={()=>{context.setJugos([])}}>
<BottonWS numWs={numWs} mensaje={jugosP +" para un total: "+total+"  dolares"} > finalizar pedidos</BottonWS>
</div>:<div className="Botton_desabilitado"> <p>Has tu pedido primero</p></div>}
<a  href="whatsapp://send?text=Tu mensaje&phone=+19786011460"> movil</a>
<a className="whatsappLink mobile" href="whatsapp://send?text=esto lo cambie desde la app de github de mi cel&phone=+19786011460"> mossvil</a>

</>
)
};

{/* <a className="whatsappLink mobile" href="whatsapp://send?text=Tu mensaje&phone=+19786011460"> movil</a> <br></br> */}
{/* <a className="whatsappLink desktop" href="http://web.whatsapp.com/send?text=Tu mensaje&phone=+19786011460">pc</a> */}
