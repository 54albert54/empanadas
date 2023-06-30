import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";
import { BottonWS } from "../Botton";
import "./style.css"
import { Muestra } from "../Muestra";


export const MyPedido =()=>{
  const context =useContext(AppContext)
 
  const [render,setrender] = useState(true)
 


  
  

  let numWs = +19786011460
  
  let jugosP ="Jugos de: "
  const quitarElemento =(id)=>{
    
    const filterProducts =  context.jugos.filter(producto => producto.id != id )
    context.AgregarJugos(filterProducts)
    console.log("jugos: ",filterProducts)   
 }

 const actualizarCarrito=()=>{
return(
  context.jugos.map((jugos,index )=>{
    total +=jugos.total
    jugosP +=jugos.sabor+" x "+jugos.totalJugos+", "
    return( 
      <Muestra key={index}  jugos={jugos} quitarElemento={quitarElemento} />
   )})
   )
 }

  
  let total = 0
  
return(
  <div   >

  <div>  <h1> Jugos</h1> 



{
  actualizarCarrito()
}



</div>

<div  className="boton_MyPedido" >  
{context.jugos.length>0?
<div  className="total_MyPedido" >
<h1 >total : {total} $</h1>
<BottonWS numWs={numWs} mensaje={jugosP +" para un total: "+total+"  dolares"} > finalizar pedidos</BottonWS>
</div>:(<div  className="total_MyPedido">

<div className="Botton_desabilitado"> <p>Has tu pedido primero</p></div>
</div>)}

</div>
</div>
)
};

{/* <a className="whatsappLink mobile" href="whatsapp://send?text=Tu mensaje&phone=+19786011460"> movil</a> <br></br> */}
{/* <a className="whatsappLink desktop" href="http://web.whatsapp.com/send?text=Tu mensaje&phone=+19786011460">pc</a> */}

 
    
