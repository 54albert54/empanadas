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
  let empanadasP ="Empanadas de: "

 const actualizarCarrito=(items,setData)=>{
return(
  
  items.map((item,index )=>{
    console.log(empanadasP.length)
    total +=item.total
    if (item.clase==="jugo"){
      
        jugosP +=item.sabor+" x "+item.totalJugos+", "
      
    }if (item.clase==="empanada"){
      
        empanadasP +=item.sabor+" x "+item.totalJugos+", "
      
    }
    
    return( 
      <Muestra key={index}  jugos={item} quitarElemento={setData} />
   )})
   )
 }

  
  let total = 0
  
return(
  <>
  <div className="MyPedido_main" >

<div>  <h1> Jugos</h1> 

{actualizarCarrito(context.jugos,context.quitarJugo)}
</div>
<div>  <h1> Emapanadas</h1> 

{actualizarCarrito(context.empanadas,context.quitarEmpanadas)}
</div>

<div  className="boton_MyPedido" >  


</div>
</div>
<div className="MyPedido_footer">
{context.jugos.length >0 || context.empanadas.length >0?
  <div  className="total_MyPedido" >
  <h1 >total : {total} $</h1>
  
  

  <BottonWS numWs={numWs} mensaje={ `${jugosP = jugosP.length>10?jugosP:"No hay jugos  ,"}` + `${empanadasP = empanadasP.length>14?empanadasP:"No hay empanadas  ,"}`+" para un total: "+total+"  dolares"} > finalizar pedidos</BottonWS>
  </div>:(<div  className="total_MyPedido">
  
  <div className="Botton_desabilitado"> <p>Has tu pedido primero</p></div>
  </div>)}
  </div>
  </>
)
};

{/* <a className="whatsappLink mobile" href="whatsapp://send?text=Tu mensaje&phone=+19786011460"> movil</a> <br></br> */}
{/* <a className="whatsappLink desktop" href="http://web.whatsapp.com/send?text=Tu mensaje&phone=+19786011460">pc</a> */}

 
    
