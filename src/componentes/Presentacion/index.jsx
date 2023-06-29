import { useContext } from 'react';
import './style.css'
import { AppContext } from '../../context';
export const Presentacion =({data})=>{
  const context =useContext(AppContext)
  
return(
<div className="presentacion_container">

  <h3>{data.sabor}</h3>
<img className="presentacion_img" src={data.img} alt="img" />
<p className="presentacion_descripcion" >descripion</p>

<p className="presentacion_price"> Precio:{data.precios}$</p>

<div onClick={()=>{context.AgregarJugos(data)}} className="presentacion_agregar" ><p>Agregar</p> </div>
</div>
)
};