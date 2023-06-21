import { useContext } from "react";
import { createContext } from "react";
import { GlobalContext } from "./productcontext";
import { useReducer } from "react";
import { useEffect } from "react";
import reducer from "../reducer/filter_reducer";

const FilterContext = createContext();
const initialState = {
    filter_products:[],
    all_product:[],
    sorting_value:"lowest",
    list_view:false,
    grid_view:true,
    filters: {
        text:"",
        category:"All",
        company:"All",
        minPrice:0,
        maxPrice:0,
        price:0,
    },
}
export const FilterContextProvider = ({children}) =>{
    const{products} = GlobalContext();
    console.log(products)
    const[state,dispatch] = useReducer(reducer,initialState);

   const setGrid = () =>{
    dispatch({type:"SET_GRID"})
   } 

   const setList = () =>{
    dispatch({type:"SET_LIST"})
   } 



    const sorting = (event) =>{
        let userValue = event.target.value;
        dispatch({type:"SET_SORT_VALUE",payload:userValue});

    }
    const updateFilterValue = (event) =>{
        let name  = event.target.name;
        let value = event.target.value;
        return dispatch({type:"UPDATE_FILTERS_VALUE",payload:{name,value}})
      }

      const clearFilter = () =>{
        return dispatch({type:"CLEAR_FILTER"})
      }

    useEffect(()=>{
        dispatch({type:"FILTERS_PRODUCTS"})
        dispatch({type:"SORTING_PRODUCTS",payload:products})
    },[state.sorting_value,state.filters])

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCT",payload:products});
    },[products])

    return (
        <FilterContext.Provider value={{...state,sorting,updateFilterValue,setGrid,setList,clearFilter}}>
        {children}
    </FilterContext.Provider>
    ) 
}

export const useFilterContext = () =>{
    return useContext(FilterContext);
}