import { createContext,  useEffect,  useState } from "react";


export const AppContext = createContext()



export const AppProvider =({children})=>{
 
  const [jugos ,setJugos] = useState([])
  const [forRender ,setSorRender] = useState(true)
 
  useEffect(()=>{
   
    console.log("los jugos e an cambiadox")
  },[forRender])
    
  
  const AgregarJugos = (newJugo) =>{
    jugos
    setJugos(newJugo )
  }

  return(
    <AppContext.Provider value={{
      jugos,AgregarJugos,setSorRender
     
     
    }}>
      {children}
    </AppContext.Provider>
  )

}
