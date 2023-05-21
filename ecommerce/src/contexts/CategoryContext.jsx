import React, {createContext,useEffect,useState} from "react";
export const CategoryContext=createContext();

export function CategoryProvider({children}){
    const [category,setCategory]=useState([]);
    const fecthData=async ()=>{
        try{
            const response=await fetch("/api/categories");
            
            if(response.status===200){
                const data=await response.json();
                console.log(data,"Categories Log");
                setCategory(data.categories);
            }
        }
        catch(e){
            console.error(e);
        }
    }
    useEffect(()=>(
        fecthData()
    ),[]);

    console.log(category);
    return(
        <div>
            <CategoryContext.Provider value={{category}}>{children}</CategoryContext.Provider>
        </div>
    )
}