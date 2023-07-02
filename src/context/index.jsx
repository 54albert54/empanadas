import { createContext,  useEffect,  useState } from "react";


export const AppContext = createContext()



export const AppProvider =({children})=>{
  const linkCel = "whatsapp://send"
  const linkPc ="https://api.whatsapp.com/send"
  const [jugos ,setJugos] = useState([])
  const [quipes ,setQuipes] = useState([])
  const [empanadas ,setempanadas] = useState([])
  const [forRender ,setSorRender] = useState(true)
  const [alerta,setAlerta] = useState("Presentacion_invisible")
  const [clase,setClase] = useState("")
  const [id, setId]=useState("")
  const [numero, setNumero] = useState("")
  const [link, setLink] = useState(linkCel)
  const [hasNumber, sethasNumber]= useState(true)
  const iconClose = "https://www.svgrepo.com/show/195829/cancel-close.svg"
  

//localStorage

const newNumber = "numero"
useEffect(()=>{
setTimeout(() => {
  try{
    if (numero.length<5){
    const localStorageNumber = localStorage.getItem(newNumber)
    
    if (localStorageNumber){
      setNumero(localStorageNumber)
      sethasNumber(true)
    }else sethasNumber(false)
   
}
  }catch (error){
console.log(error)
  } 
}, 1000);
},[])



const saveNumber =(nuevoNumeros)=>{
  localStorage.setItem(newNumber,JSON.stringify(nuevoNumeros))
  console.log(nuevoNumeros)
}

  const changeLink = ()=> {
    link == linkPc?setLink(linkCel):setLink(linkPc)
  }
 
  const AgregarQuipes = (newQuipe) =>{  
    setQuipes(newQuipe )
  }
  
  
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

const quitarQuipes =(id)=>{   
  const filterProducts =  quipes.filter(producto => producto.id != id )
  AgregarQuipes(filterProducts)
  
}


  return(
    <AppContext.Provider value={{
      jugos,AgregarJugos,setSorRender, quitarJugo,alerta,setAlerta,id, setId,empanadas,AgregarEmanadas,quitarEmpanadas,clase,setClase,quipes ,setQuipes
     ,iconClose,AgregarQuipes,quitarQuipes,numero, setNumero,link,changeLink,linkCel,saveNumber,hasNumber, sethasNumber
     
    }}>
      {children}
    </AppContext.Provider>
  )

}
