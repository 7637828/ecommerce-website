import React,{ createContext,useContext, useEffect,useReducer} from "react";
import axios from "axios";
import reducer  from "../reducer/productReducer";

const AppContext = createContext();
// const API = "https://dummyjson.com/products";

export const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
  };


const AppProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer,initialState);
    console.log(state);
   
    useEffect( ()=>{
            axios.get("https://api.pujakaitem.com/api/products")
            .then((response) =>{
                dispatch({type:"SET_API_DATA",payload:response.data})  
                
            })
            .catch((error) =>{
                dispatch({type:"API_ERROR"});
            })

            },[]);

            // useEffect( ()=>{
            //     axios.get("https://api.pujakaitem.com/api/products")
            //     .then((response) =>{
            //         dispatch({type:"SET_API_DATA",payload:response.data})  
                    
            //     })
            //     .catch((error) =>{
            //         dispatch({type:"SET_ERROR"});
            //     })
    
            //     },[]);
            //     useEffect( ()=>{
            //         axios.get(`https://api.pujakaitem.com/api/products`)
            //         .then((response) =>{
            //             dispatch({type:"SET_SINGLE_PRODUCT",payload:response.data})  
                        
            //         })
            //         .catch((error) =>{
            //             dispatch({type:"SET_SINGLE_ERROR"});
            //         })
            //         },[]);

        //     const getProducts = async (url) =>{
        //         try{
        //             const res = await axios.get(url);
        //             const data = await res.data;
                    
        //             dispatch({type:"SET__API_DATA",payload:data})  
        
        //         }
        //         catch (err){
        //             dispatch({type:"API_ERROR"});
        
        //         }
        // }
       
  
        //     const getSingleProduct = async (url) =>{
        //         dispatch({type: "SET_SINGLE_LOADING"})
        //      try{
        //         const res = await axios.get(url);
        //         const singleProduct = await res.data;            
        //         dispatch([{type:"SET__SINGLE_PRODUCT",               payload:singleProduct}]);
        //     }
        //     catch (error){
        //         dispatch({type:"SET_SINGLE_ERROR"})
        //          }
        //     }
        // useEffect(()=>{
        //     getProducts(API);

        // },[]);
    
   
    
    return (
        <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
    )
    
}
const GlobalContext =() =>{
    return useContext(AppContext);
}

export {AppProvider,GlobalContext,AppContext};