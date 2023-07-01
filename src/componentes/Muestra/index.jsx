import "./style.css"
export const Muestra =({jugos,quitarElemento})=>{
return(
  <div className="Pedido_container" > <p>{jugos.sabor+" x " + jugos.totalJugos}</p>   <p>{jugos.total+" $"}</p>
  <div onClick={()=>quitarElemento(jugos.id)} >x</div>
  </div>
)
};