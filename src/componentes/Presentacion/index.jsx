import { useContext } from 'react';
import './style.css'
import { AppContext } from '../../context';
import { useState } from 'react';
export const Presentacion =({data})=>{
  const context =useContext(AppContext)
  const [count,setCount] = useState(1)
   const isAgregado = context.jugos.filter(jugo => jugo.id ===data.id).length > 0
   const [add,setAdd] = useState("")
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
    setAdd(b=>!b)
    const productForAdd = context.jugos.filter(jugo => jugo.id ===id).length > 0

 if (!productForAdd){
    const newData =   
     { ...data,
      ["totalJugos"]:count,
      ["total"]:count*data.precios};
    

    context.jugos.push(newData)
    setCount(1)
    
    context.setSorRender(a=>!a)
    context.AgregarJugos(context.jugos)
   
}

}
const renderIcon = ()=>{
  if(isAgregado){
  return(
  <div  className={`presentacion_cambiar`} ><p>Comprado</p> </div> 
  )
}else return(
<div onClick={()=>{agrearAPedido(data.id)}} className={`presentacion_agregar`} ><p>Agregar</p> </div>

)
}


return(
  <div className="presentacion">
<div className="presentacion_container">

  <h3>{data.sabor}</h3>
<img className="presentacion_img" src={data.img} alt="img" />
<p className="presentacion_descripcion" >descripion</p>

<p className="presentacion_price"> Precio:  {data.precios*count}$</p>
<div className='presentacion_cantidad'>
{!isAgregado&& <div className='presentacion_boton' onClick={()=> lessItem()} > {"<"}</div>} 
<p>Qty:{count} </p>
{!isAgregado&&<div className='presentacion_boton' onClick={()=> moreItem()} > {">"}</div>}
</div>


{
renderIcon()
}
</div>
</div>
)
};

// !agregar?<div onClick={()=>{reacerPedido()}} className={`presentacion_cambiar`} ><p>Cambiar</p> </div>:<div onClick={()=>{agrearAPedido(data.id)}} className={agregar?`presentacion_agregar`:``} ><p>Agregar"</p> </div>
