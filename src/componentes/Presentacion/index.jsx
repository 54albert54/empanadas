import { useContext } from 'react';
import './style.css'
import { AppContext } from '../../context';
import { useState } from 'react';

export const Presentacion =({data,productos,setProducto})=>{
  const context =useContext(AppContext)
  const [count,setCount] = useState(1)
   const isAgregado = productos.filter(jugo => jugo.id ===data.id).length > 0
   
   //const isAgregado = false
  const moreItem = () =>{
    if (count<10 && !isAgregado){
    setCount(count => count+1)}
    
  }

  const lessItem = () =>{
    if (count>1 && !isAgregado){
    setCount(count => count-1)}
    
  }
  const agrearAPedido = (id)=>{
    const productForAdd = productos.filter(jugo => jugo.id ===id).length > 0

 if (!productForAdd){
    const newData =   
     { ...data,
      ["totalJugos"]:count,
      ["total"]:count*data.precios};
    

      productos.push(newData)
    setCount(1)
    
    context.setSorRender(a=>!a)
    setProducto(productos)
   
}

}


const renderIcon = ()=>{
  if(isAgregado){
  return(
  <div   className={`presentacion_cambiar`} ><p>Comprado</p> </div> 
  )
}else return(
<div onClick={()=>{agrearAPedido(data.id)}} className={`presentacion_agregar`} ><p>Agregar</p> </div>

)
}
const makeAlert =()=>{
  context.setAlerta("")
 context.setId(data.id)
context.setClase(data.clase)

 
 
}
const ajustarCanntidad=()=>{
  if (!isAgregado){
    return(
   
      <div className='presentacion_cantidad'>
  {!isAgregado&& <div className='presentacion_boton' onClick={()=> lessItem()} > {"<"}</div>} 
   <p> Qty:{count} </p>
  {!isAgregado&&<div className='presentacion_boton' onClick={()=> moreItem()} > {">"}</div>}
  
  </div>
    )

  }else return(
    <div onClick={()=>{makeAlert()}} className='presentacion_cantidad cambiar'> Cambiar </div>)

 
}

return(
  <div className="presentacion">
 
<div className="presentacion_container">

  <h3>{data.sabor}</h3>
<img className="presentacion_img" src={data.img} alt="img" />
<p className="presentacion_descripcion" >descripion</p>

<p className="presentacion_price"> Precio:  {data.precios*count}$ </p>


<div className='presentacion_ajustes'>
{renderIcon()}
{ajustarCanntidad()}

</div>
</div>
</div>
)
};

// !agregar?<div onClick={()=>{reacerPedido()}} className={`presentacion_cambiar`} ><p>Cambiar</p> </div>:<div onClick={()=>{agrearAPedido(data.id)}} className={agregar?`presentacion_agregar`:``} ><p>Agregar"</p> </div>
