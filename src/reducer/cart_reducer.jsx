const CartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {

        let { name, price, amount, id,data1 } = action.payload;
        console.log(data1);
        console.log(name)
        console.log(price)
        console.log(id)


        let existProduct = state.cart.find((Ele) => {
            return Ele.id === id;
        })

        if (existProduct) {
            let updatedProduct = state.cart.map((Ele) => {
                if (Ele.id === id) {
                   
                        let newAmount = Ele.amount + amount;
                        return {
                            ...Ele,
                           amount:newAmount,
                        }
                }
                else {
                    return Ele;
                }
            })
            return {
                ...state,
                cart: updatedProduct,
            }
        }
        else {
            let cartProduct;

            cartProduct = {
                id: id,
                name: data1.name,
                price,
                amount,
                image: data1.image[0].url,

            }

            // if(existProduct){

            //     let updateProduct = state.cart.map((Ele)=>{
            //         if(Ele.id===id){
            //             let newAmount = Ele.stock + state.max;
            //             return {
            //                 ...Ele,
            //                 amount:newAmount,
            //             }
            //         }
            //         else{
            //             return Ele;

            //         }
            //     })
            //     return {
            //         ...state,
            //         cart:updateProduct,
            //     }

            // }



            return {
                ...state,
                cart: [...state.cart, cartProduct],
            }
        }



    }

    if(action.type === "SET_DECREMENT"){
        let updatedProduct = state.cart.map((curEle)=>{
            if(curEle.id===action.payload){
                let decAmount = curEle.amount-1;
                if(decAmount<=1){
                    decAmount=1
                }
                return{
                    ...curEle,
                    amount:decAmount,
                }
            }
            else{
                return curEle
            }
          
        })
        return {
            ...state,
            cart:updatedProduct
        }
    }

    if(action.type === "SET_INCREMENT"){
        let updatedProduct = state.cart.map((curEle)=>{
            if(curEle.id===action.payload){
                let incAmount = curEle.amount+1;
                if(incAmount>=curEle.max){
                    incAmount=curEle.max
                }
                return{
                    ...curEle,
                    amount:incAmount,
                }
            }
            else{
                return curEle
            }
          
        })
        return {
            ...state,
            cart:updatedProduct

        }
        
        
    }
    if (action.type === "REMOVE_FROM_CART") {

        let updateProduct = state.cart.filter((Ele) => {

            return Ele.id !== action.payload;
        })
        return {

            ...state,
            cart: updateProduct,
        }
    }

    if (action.type === "CLEAR_CART") {

        return {
            ...state,
            cart: [],
        }
    }
    return state;
}

export default CartReducer;