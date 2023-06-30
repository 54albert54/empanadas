import "./style.css"

export const BottonWS =({children,numWs,mensaje})=>{
   
return(
<div className="Botton">
{/* <a  href="whatsapp://send?text=Tu mensaje&phone=+19786011460"> movil</a> */}


<a title="Click para chatear" href={`whatsapp://send?text=${mensaje}&phone=${numWs}`} target="blank" rel="noopener"><p className="Botton_p" >{children}</p> </a>

    
   </div>
)
};

// https://api.whatsapp.com/send?phone=${numWs}&text=${mensaje}
// whatsapp://send?text=${mensaje}&phone=${numWs}