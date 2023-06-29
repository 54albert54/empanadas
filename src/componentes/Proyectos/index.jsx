
import { Repertorio } from "./Repertorio";
import "./style.css"
import {arrayRepertorios} from "./data.js"


export const Proyectos =()=>{
 


return(
<div className="repertorio_main">
{arrayRepertorios.map((repositorio,id) =>(

 <Repertorio key={id} info={repositorio} />)
 
)}
</div>

)
};