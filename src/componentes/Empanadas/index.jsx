import { useContext } from "react";
import { Presentacion } from "../Presentacion";
import { AppContext } from "../../context";

export const Empanadas =()=>{
  const context =useContext(AppContext)
  let array = []
  class Empanadas{
    constructor(id,clase,sabor,img,precios){
      this.id = id
      this.clase= clase
      this.sabor = sabor;
      this.img = img;
      this.precios = precios
    }
  }

  array.push(new Empanadas(1,"empanada","jamon","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPns3DxRhkDyNnSNBXmWlpDTTh0vBtRW4qLA&usqp=CAU",1.5))
  array.push(new Empanadas(2,"empanada","queso","data:image/jpeg;base64,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",1.5))
  array.push(new Empanadas(3,"empanada","huevo","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5onfZiq6bbvDtEeHr-HC2KitTB4I5qcdOLw&usqp=CAU",2.5))
  array.push(new Empanadas(4,"empanada","panaPizza","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_M38R-Xa9Fa2U5F55lUKhEtT2QpzPTp-5zw&usqp=CAU",3.5))
  array.push(new Empanadas(5,"empanada","pollo con queso","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPns3DxRhkDyNnSNBXmWlpDTTh0vBtRW4qLA&usqp=CAU",3))
  array.push(new Empanadas(6,"empanada","vegetariana","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfw71Tvf1TWqbywhxDiqjST6OYD1xXzG4Hw&usqp=CAU",3,5))
  array.push(new Empanadas(7,"empanada","jamon y queso","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROp3JbmWmda87dboJaNzmD8rKgAwM_Oa-O7g&usqp=CAU",2))
 
  return(
  <>
    {array.map((data,index )=>(
      <Presentacion key={index} data={data} productos={context.empanadas} />))}
  </>
)
};