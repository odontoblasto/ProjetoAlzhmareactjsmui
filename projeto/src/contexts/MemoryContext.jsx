import { createContext,useState } from "react";

export const MemoryContext = createContext()

export const MemoryProvider = ({children})=>{

 const[memo,setMemo] = useState([

])
return(
    <MemoryContext.Provider value={{memo,setMemo}}>
      {children}
    </MemoryContext.Provider>)
  
}