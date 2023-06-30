import { useState } from "react";
import { BottonWS } from "../Botton";




export const Contoctos =()=>{
const [name, setName] = useState("gato")

  let pedido = {
    empanadas:{
      Queso:4,
    jamon:5},
    quipes:4,
    jugo:{
      cereza:"pequeño",
      naraja:"grande"
    }
  }
  let hola = JSON.stringify(pedido)
    let numWs = +19786011460
  let mensaje1="Quiciera cotizar una bandeja personalizada, que variedades tienen para eleguir"
  let mensaje2="Quiciera cotizar con usteds para hacer un evento o una actividad"
   
return(
  <>

  <h2>   Oprime la opcione que mejor se acomode a tu necesecidad con gusto te responderemos lo antes posible </h2>
  <BottonWS numWs={numWs} mensaje={mensaje1} > Bandeja personalizada</BottonWS>
  <BottonWS numWs={numWs} mensaje={mensaje2} > Eventos o Actividades</BottonWS>
  <p>1.1</p>
  

</>
)
};