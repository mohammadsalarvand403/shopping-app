const CartReducer=(state,action)=>{
switch(action.type){
    case "ADD_TO_CART":{
        const updatedCart=[...state.cart];
        const updatedIndex=updatedCart.findIndex(item => item.id ===action.payload.id)
        if (updatedIndex < 0) {
            updatedCart.push({...action.payload,quntity:1})
        }else{
            const updatedItem={...updatedCart[updatedIndex]}
            updatedItem.quntity++;
            updatedCart[updatedIndex]=updatedItem
        }
        return {...state, cart:updatedCart,total:state.total + action.payload.price}

       };
    case "REMOVE_PRODUCT":
       {
        const updatedCart=[...state.cart];
        const updatedIndex=updatedCart.findIndex(item => item.id ===action.payload.id
        );
        const updatedItem={...updatedCart[updatedIndex]}
        if(updatedItem.quntity === 1){
           const filterCart= updatedCart.filter((item)=> item.id !==action.payload.id)
            return {...state, cart:filterCart,total:state.total - action.payload.price}
        }else{
            const updatedItem={...updatedCart[updatedIndex]}
            updatedItem.quntity--;
            updatedCart[updatedIndex]=updatedItem
            return {...state, cart:updatedCart,total:state.total - action.payload.price}
        }
       }
        default:
        return state
    }
};
export default CartReducer;