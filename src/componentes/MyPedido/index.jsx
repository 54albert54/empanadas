import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";
import { BottonWS } from "../Botton";
import "./style.css"


export const MyPedido =()=>{
  const context =useContext(AppContext)
  
  const [render,setRender] = useState(context.jugos)
  useEffect(()=>{
    console.log("hola estoy dentro el useEfect")
    setRender(context.jugos)
  },[context.jugos])
  console.log(context.jugos)
  

  let numWs = +19786011460
  
  let jugosP ="Jugos de: "
  const calcularJugos =()=>{
    const quitarElemento =(index)=>{
      const changeOrder = context.jugos.splice(index,1)
      context.AgregarJugos(changeOrder)
      setRender(changeOrder)

      console.log(context.jugos)
    }
    

    return(
      context.jugos.map((jugos,index )=>{
        
        total +=jugos.total
        
        jugosP +=jugos.sabor+" x "+jugos.totalJugos+", "
        
        return( 
          
        <div className="Pedido_container" key={index}> <p>{jugos.sabor+" x " + jugos.totalJugos}</p>   <p>{jugos.total+" $"}</p>
        <div onClick={()=>quitarElemento(index)} >x</div>
        </div>)})

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
<p>total : {total} $</p>
{context.jugos.length>0?
<div  onClick={()=>{context.setJugos([])}}>
<BottonWS numWs={numWs} mensaje={jugosP +" para un total: "+total+"  dolares"} > finalizar pedidos</BottonWS>
</div>:<div className="Botton_desabilitado"> <p>Has tu pedido primero</p></div>}

</>
)
};

{/* <a className="whatsappLink mobile" href="whatsapp://send?text=Tu mensaje&phone=+19786011460"> movil</a> <br></br> */}
{/* <a className="whatsappLink desktop" href="http://web.whatsapp.com/send?text=Tu mensaje&phone=+19786011460">pc</a> */}
