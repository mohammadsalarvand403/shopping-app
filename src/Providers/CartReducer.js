const addProductToCart=(state,payload)=>{
    const updatedCart=[...state.cart];
    const updatedIndex=updatedCart.findIndex(item => item.id ===payload.id)
    if (updatedIndex < 0) {
        updatedCart.push({...payload,quntity:1})
    }else{
        const updatedItem={...updatedCart[updatedIndex]}
        updatedItem.quntity++;
        updatedCart[updatedIndex]=updatedItem
    }
    return {...state, cart:updatedCart,total:state.total + payload.price}

   
};
const removFromCart=(state,payload)=>{
    const updatedCart=[...state.cart];
    const updatedIndex=updatedCart.findIndex(item => item.id ===payload.id
    );
    const updatedItem={...updatedCart[updatedIndex]}
    if(updatedItem.quntity === 1){
       const filterCart= updatedCart.filter((item)=> item.id !==payload.id)
        return {...state, cart:filterCart,total:state.total - payload.price}
    }else{
        const updatedItem={...updatedCart[updatedIndex]}
        updatedItem.quntity--;
        updatedCart[updatedIndex]=updatedItem
        return {...state, cart:updatedCart,total:state.total - payload.price}
    }
}


const CartReducer=(state,action)=>{
switch(action.type){
    case "ADD_TO_CART":return addProductToCart(state,action.payload)
       
    case "REMOVE_PRODUCT":return removFromCart(state,action.payload)
       
        default:
        return state
    }
};
export default CartReducer;