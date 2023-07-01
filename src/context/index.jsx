import { createContext,  useEffect,  useState } from "react";


export const AppContext = createContext()



export const AppProvider =({children})=>{
 
  const [jugos ,setJugos] = useState([])
  const [empanadas ,setempanadas] = useState([])
  const [forRender ,setSorRender] = useState(true)
  const [alerta,setAlerta] = useState("Presentacion_invisible")
  const [id, setId]=useState("")
 
  useEffect(()=>{
   
    console.log("los jugos e an cambiadox")
  },[forRender])
  
  const AgregarEmanadas = (newEmpanada) =>{
    
    setempanadas(newEmpanada )
  }
  
  const AgregarJugos = (newJugo) =>{
   
    setJugos(newJugo )
  }
  const quitarElemento =(id)=>{
    
    const filterProducts =  jugos.filter(producto => producto.id != id )
    AgregarJugos(filterProducts)
    
 }

  return(
    <AppContext.Provider value={{
      jugos,AgregarJugos,setSorRender,quitarElemento,alerta,setAlerta,id, setId,empanadas,AgregarEmanadas
     
     
    }}>
      {children}
    </AppContext.Provider>
  )

}
