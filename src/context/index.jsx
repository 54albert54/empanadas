import { createContext,  useState } from "react";


export const AppContext = createContext()



export const AppProvider =({children})=>{
  const [orden, setOrden] = useState([])
  const [jugos ,setJugos] = useState([])

  
  const AgregarJugos = (newJugo) =>{
    
    
    
    setJugos(
      [...jugos,newJugo]
      
    )
 
  }


  return(
    <AppContext.Provider value={{
      jugos,AgregarJugos,orden
     
     
    }}>
      {children}
    </AppContext.Provider>
  )

}
