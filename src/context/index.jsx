import { createContext,  useEffect,  useState } from "react";


export const AppContext = createContext()



export const AppProvider =({children})=>{
 
  const [jugos ,setJugos] = useState([])
  const [empanadas ,setempanadas] = useState([])
  const [forRender ,setSorRender] = useState(true)
  const [alerta,setAlerta] = useState("Presentacion_invisible")
  const [clase,setClase] = useState("")
  const [id, setId]=useState("")
 const iconClose = "https://www.svgrepo.com/show/195829/cancel-close.svg"
  // useEffect(()=>{
   
  //   console.log("los jugos e an cambiadox")
  // },[forRender])
  
  const AgregarEmanadas = (newEmpanada) =>{
    
    setempanadas(newEmpanada )
  }
  
  const AgregarJugos = (newJugo) =>{
   
    setJugos(newJugo )
  }
  const quitarJugo =(id)=>{
    
    const filterProducts =  jugos.filter(producto => producto.id != id )
    AgregarJugos(filterProducts)
    
 }
 const quitarEmpanadas =(id)=>{
    
  const filterProducts =  empanadas.filter(producto => producto.id != id )
  AgregarEmanadas(filterProducts)
  
}


  return(
    <AppContext.Provider value={{
      jugos,AgregarJugos,setSorRender, quitarJugo,alerta,setAlerta,id, setId,empanadas,AgregarEmanadas,quitarEmpanadas,clase,setClase
     ,iconClose
     
    }}>
      {children}
    </AppContext.Provider>
  )

}
