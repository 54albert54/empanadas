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
//   const quitarElemento =(id)=>{
    
//     const filterProducts =  context.jugos.filter(producto => producto.id != id )
//     context.AgregarJugos(filterProducts)
    
//  }

 const actualizarCarrito=(items)=>{
return(
  
  items.map((jugos,index )=>{
    total +=jugos.total
    jugosP +=jugos.sabor+" x "+jugos.totalJugos+", "
    return( 
      <Muestra key={index}  jugos={jugos} quitarElemento={context.quitarElemento} />
   )})
   )
 }

  
  let total = 0
  
return(
  <>
  <div className="MyPedido_main" >

<div>  <h1> Jugos</h1> 

{actualizarCarrito(context.jugos)}
</div>
<div>  <h1> Emapanadas</h1> 

{actualizarCarrito(context.jugos)}
</div>

<div  className="boton_MyPedido" >  


</div>
</div>
<div className="MyPedido_footer">
{context.jugos.length>0?
  <div  className="total_MyPedido" >
  <h1 >total : {total} $</h1>
  <BottonWS numWs={numWs} mensaje={jugosP +" para un total: "+total+"  dolares"} > finalizar pedidos</BottonWS>
  </div>:(<div  className="total_MyPedido">
  
  <div className="Botton_desabilitado"> <p>Has tu pedido primero</p></div>
  </div>)}
  </div>
  </>
)
};

{/* <a className="whatsappLink mobile" href="whatsapp://send?text=Tu mensaje&phone=+19786011460"> movil</a> <br></br> */}
{/* <a className="whatsappLink desktop" href="http://web.whatsapp.com/send?text=Tu mensaje&phone=+19786011460">pc</a> */}

 
    
