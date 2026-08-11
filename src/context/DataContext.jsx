import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext=createContext();

export const DataProvider=({children})=>{

let [products ,setProduct ]=useState([]);



useEffect(()=>{


    async function viewProducts(){

     let data = await axios.get("https://dummyjson.com/products");
     setProduct(data.data.products)

    }
        viewProducts();
},[])

return(
    <DataContext.Provider value={{products}}>
        {children}
    </DataContext.Provider>
)


}


