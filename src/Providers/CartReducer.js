const CartReducer=(state,action)=>{
switch(action.type){
    case "ADD_TO_CART":
        const updatedCart=[...state.cart];
        const updatedIndex=updatedCart.findIndex(item => item.id ===action.payload.id)
        if (updatedIndex <0) {
            updatedCart.push({...action.payload,quntity:1})
        }else{
            const updatedItem={...updatedCart[updatedIndex]}
            updatedItem.quntity++;
            updatedCart[updatedIndex]=updatedItem
        }
        return {...state, cart:updatedCart}

        default:
        return state
    }
};
export default CartReducer;