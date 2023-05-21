import React, {createContext,useEffect,useState} from "react";
export const CakeContext=createContext();

export function CakeProvider({children}){
    const [products,setProducts]=useState([]);
    const fecthData=async ()=>{
        try{
            const response=await fetch("/api/products");
            if(response.status===200){
                const data=await response.json();
                console.log(data,"Cake Log");
                setProducts(data.products);
            }
        }
        catch(e){
            console.error(e);
        }
    }
    useEffect(()=>(
        fecthData()
    ),[]);

    console.log(products);
    return(
        <div>
            <CakeContext.Provider value={{products}}>{children}</CakeContext.Provider>
        </div>
    )
}