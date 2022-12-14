import Layout from "../../Layout/Layout";
import { useCart , useCartActions } from "../../Providers/CartProvider";
import './cartPage.css'
const CartPage = () => {
 const {cart,total}=useCart()
 const dispatch=useCartActions();
 if(!cart.length)return(
 <Layout>
   <main><h2>cart is empyt</h2></main>
 </Layout>
 );
 const incHandler=(cartItem)=>{
  dispatch({type:"ADD_TO_CART",payload:cartItem})
 }
 const decHandler=(cartItem)=>{
  dispatch({type:"REMOVE_PRODUCT",payload:cartItem})
 }
 
    return ( 
   <Layout>
     <main className="container">
    <section className="cartcenter">
    <section className="cartItemList">
      {cart.map((item)=>{
       return(
        <div key={item.id} className="cartItem">
        <div className="itemImg">
          <img src={item.image} alt={item.name}></img>
        </div>
        <div>{item.name}</div>
        <div>{item.price * item.quntity}</div>
        <div>
          <button onClick={()=>decHandler(item)}>remove</button>
          <button>{item.quntity}</button>
          <button onClick={()=>incHandler(item)}>Add</button>
        </div>
      </div>
       )
      })}
     </section>
     <section className="cartSummery">Cart summery
     <h2>{total}$</h2>
     </section>
    </section>
    </main>
   </Layout>
     );
}
 
export default CartPage;