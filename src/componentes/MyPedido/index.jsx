import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";
import { BottonWS } from "../Botton";
import "./style.css"
import { Muestra } from "../Muestra";


export const MyPedido =()=>{
  const context =useContext(AppContext)
 
  const [render,setrender] = useState(true)
 


  
  

  
  
  let jugosP ="Jugos de: "
  let empanadasP ="Empanadas de: "
  let quipesP ="Quipes de: "
  const hasJugo = context.jugos.length >0
  const hasEmpanada = context.empanadas.length >0
  const hasQuipe =context.quipes.length >0

 const actualizarCarrito=(items,setData)=>{
return(
  
  items.map((item,index )=>{
   
    total +=item.total
    if (item.clase==="jugo"){
        jugosP +=item.sabor+" x "+item.totalJugos+", "
    }if (item.clase==="empanada"){
        empanadasP +=item.sabor+" x "+item.totalJugos+", "  
    }if (item.clase==="quipes"){
      quipesP +=item.sabor+" x "+item.totalJugos+", "  
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
    
{!hasJugo && !hasEmpanada && !hasQuipe &&<div>
<img className="MyPedido_img" src=" https://www.svgrepo.com/show/447372/food.svg" alt="empty" />
</div>}
{hasJugo&&<div>  <h1> Jugos</h1> 

{actualizarCarrito(context.jugos,context.quitarJugo)}
</div>}
{hasEmpanada&&<div><h1> Empanadas</h1> 
{actualizarCarrito(context.empanadas,context.quitarEmpanadas)}
</div>}

{hasQuipe&&<div> <h1> Quipes</h1>
{actualizarCarrito(context.quipes,context.quitarQuipes)}
</div>}

<div  className="boton_MyPedido" >  


</div>
</div>
<div className="MyPedido_footer">
{ hasJugo || hasEmpanada || hasQuipe?
  <div  className="total_MyPedido" >
  <h1 >total : {total} $</h1>
  
  

  <BottonWS  mensaje={"Saludos me gustaria  "+ `${jugosP = jugosP.length>10?jugosP:""}` + `${empanadasP = empanadasP.length>14?empanadasP:""}`+`${quipesP = quipesP.length>11?quipesP:""}` +" para un total: "+total+"  dolares"} > finalizar pedidos</BottonWS>
  </div>:(<div  className="total_MyPedido">
  
  <div className="Botton_desabilitado"> <p>Has tu pedido </p></div>
  </div>)}
  </div>
  </>
)
};

{/* <a className="whatsappLink mobile" href="whatsapp://send?text=Tu mensaje&phone=+19786011460"> movil</a> <br></br> */}
{/* <a className="whatsappLink desktop" href="http://web.whatsapp.com/send?text=Tu mensaje&phone=+19786011460">pc</a> */}

 
    
