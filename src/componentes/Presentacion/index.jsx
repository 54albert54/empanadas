import { useContext } from 'react';
import './style.css'
import { AppContext } from '../../context';
import { useState } from 'react';
export const Presentacion =({data})=>{
  const [count,setCount] = useState(1)
  const [agregar, setAgregar] =useState(true)
  const context =useContext(AppContext)

  const moreItem = () =>{
    if (count<10 && agregar){
    setCount(count => count+1)}
    
  }

  const lessItem = () =>{
    if (count>1 && agregar){
    setCount(count => count-1)}
    
  }
  const completarPedido = ()=>{

    const newData = {
      ...data,
      ["totalJugos"]:count,
      ["total"]:count*data.precios
    }
    setAgregar(false)
    context.AgregarJugos(newData)

    
  }
return(
  <div className="presentacion">
<div className="presentacion_container">

  <h3>{data.sabor}</h3>
<img className="presentacion_img" src={data.img} alt="img" />
<p className="presentacion_descripcion" >descripion</p>

<p className="presentacion_price"> Precio:  {data.precios*count}$</p>
<div className='presentacion_cantidad'>
{agregar&& <div className='presentacion_boton' onClick={()=> lessItem()} > {"<"}</div>} 
<p>Qty:{count} </p>
{agregar&&<div className='presentacion_boton' onClick={()=> moreItem()} > {">"}</div>}
</div>

{!agregar?<div onClick={()=>{setAgregar(true)}} className={`presentacion_cambiar`} ><p>Cambiar</p> </div>:<div onClick={()=>{completarPedido()}} className={agregar?`presentacion_agregar`:``} ><p>{agregar?"Agregar":undefined}</p> </div>

}
</div>
</div>
)
};