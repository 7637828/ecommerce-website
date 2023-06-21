const FilterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCT":
        let priceArr = action.payload.map((Ele)=>{
            return Ele.price;
        })
        console.log(priceArr)

        let maxPrice = Math.max(...priceArr);
        console.log(maxPrice);
            return {
                ...state,
                filter_products: [...action.payload],
                all_product: [...action.payload],
                filters:{...state.filters, maxPrice:maxPrice,price:maxPrice}
            }

        case "SET_SORT_VALUE":
            // let userSortValue = document.getElementById("sort");
            // let sort_value = userValue;

            return {
                ...state,
                sorting_value: action.payload,
            }

        case "SORTING_PRODUCTS":
            let newSortData;
            // let tempSortData = [...action.payload];
            const { filter_products } = state;
            let tempSortData = [...filter_products];

            const sortingProducts = (a, b) => {

                if (state.sorting_value === "lowest") {
                    return a.price - b.price;
                }
                if (state.sorting_value === "highest") {
                    return b.price - a.price;
                }
                if (state.sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                }
                if (state.sorting_value === "z-a") {
                    return b.name.localeCompare(a.name);
                }
            }

            newSortData = tempSortData.sort(sortingProducts);
            return {
                ...state,
                filter_products: newSortData,

            }
        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            };
        case "SET_GRID":
            return{
                ...state,
                grid_view:true,
                list_view:false,
            }
        
        case "SET_LIST":
            return{
                ...state,
                list_view:true,
                grid_view:false,
            }

        case "FILTERS_PRODUCTS":

            let { all_product } = state;
            let tempFilterProduct = [...all_product];
            // console.log(tempFilterProduct)
            const { text, category, company,price } = state.filters;
            if (text) {
                tempFilterProduct = tempFilterProduct.filter((Ele) => {
                    return Ele.name.toLowerCase().includes(text)
                })
            }

            if (company!=="All") {
                tempFilterProduct = tempFilterProduct.filter((Ele) => {
                    return Ele.company.toLowerCase() === company.toLowerCase()
                })
            }
            if (category!=="All") {
                tempFilterProduct = tempFilterProduct.filter((Ele) => {
                    return Ele.category === category
                })
            }

            if(price){
                tempFilterProduct = tempFilterProduct.filter((Ele) => {
                    return Ele.price <=price;
                })
            }

            return{
                ...state,
                filter_products:tempFilterProduct

            }

            // if(category==="all"){
            //     return {
            //         ...state,
            //     }
            // }

            // if(company==="all"){
            //     return {
            //         ...state,
            //     }
            // }

            

        
        case "CLEAR_FILTER":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text:"",
                    category:"All",
                    company:"All",
                    minPrice:state.filters.maxPrice,
                    maxPrice:0,
                    price:state.filters.maxPrice,
                    // minPrice:0,
                    // maxPrice:0,
                    // price:0,
                },
            }
            
        default:
            return state;
    }
}
export default FilterReducer;