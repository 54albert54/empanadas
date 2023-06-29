import "./style.css"

export const BottonWS =({children,numWs,mensaje})=>{
return(
<div className="Botton">
<a title="Click para chatear" href={`https://api.whatsapp.com/send?phone=${numWs}&text=${mensaje}`} target="blank" rel="noopener"><p className="Botton_p" >{children}</p> </a>

    
   </div>
)
};