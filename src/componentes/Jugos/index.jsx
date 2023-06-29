import { Presentacion } from "../Presentacion";

export const Jugos =()=>{
  let array = []
  class Jugos{
    constructor(sabor,img,precios){
      this.sabor = sabor;
      this.img = img;
      this.precios = precios
    }
  }

  array.push(new Jugos("Naranja","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMkCczqh9KH5487_KYDkhvu6r31dN_iClaA98k2BVDErV5-sDoRhg_loDBBoBNiCqktGg&usqp=CAU",1.5))
  array.push(new Jugos("Freza","https://www.nicepng.com/png/detail/97-979335_jugos-naturales-png-1-dram-lorann-raspberry-flavour.png",3.5))
  array.push(new Jugos("Piña","https://img.freepik.com/fotos-premium/jugo-pina-pina_159938-2349.jpg",3.5))
  array.push(new Jugos("Tamarindo","https://img.freepik.com/fotos-premium/vaso-jugo-tamarindo-sobre-fondo-blanco_264757-133.jpg?w=360",2))
  array.push(new Jugos("Limonada","https://img.freepik.com/fotos-premium/vaso-jugo-limon-hojas-menta-aislado-sobre-fondo-blanco_124717-810.jpg?w=2000",2))

  return(
  <>
    {array.map((data,index )=>(
      <Presentacion key={index} data={data}/>))}
  </>
)
};