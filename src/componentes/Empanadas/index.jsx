import { Presentacion } from "../Presentacion";

export const Empanadas =()=>{
  let array = []
  class Empanadas{
    constructor(id,sabor,img,precios){
      this.id = id
      this.sabor = sabor;
      this.img = img;
      this.precios = precios
    }
  }

  array.push(new Empanadas(1,"jamon","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPns3DxRhkDyNnSNBXmWlpDTTh0vBtRW4qLA&usqp=CAU",1.5))
  array.push(new Empanadas(2,"queso","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPns3DxRhkDyNnSNBXmWlpDTTh0vBtRW4qLA&usqp=CAU",1.5))
  array.push(new Empanadas(3,"huevo","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPns3DxRhkDyNnSNBXmWlpDTTh0vBtRW4qLA&usqp=CAU",2.5))
  array.push(new Empanadas(4,"panaPizza","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPns3DxRhkDyNnSNBXmWlpDTTh0vBtRW4qLA&usqp=CAU",3.5))
  array.push(new Empanadas(5,"pollo con queso","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPns3DxRhkDyNnSNBXmWlpDTTh0vBtRW4qLA&usqp=CAU",3))
  array.push(new Empanadas(6,"vegetariana","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPns3DxRhkDyNnSNBXmWlpDTTh0vBtRW4qLA&usqp=CAU",3,5))
  array.push(new Empanadas(7,"jamon y queso","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPns3DxRhkDyNnSNBXmWlpDTTh0vBtRW4qLA&usqp=CAU",2))
 
  return(
  <>
    {array.map((data,index )=>(
      <Presentacion key={index} data={data}/>))}
  </>
)
};