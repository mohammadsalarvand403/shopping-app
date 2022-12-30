import { Link } from "react-router-dom";
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
        <div className="btnGroup">
          <button onClick={()=>decHandler(item)}>-</button>
          <button>{item.quntity}</button>
          <button onClick={()=>incHandler(item)}>+</button>
        </div>
      </div>
       )
      })}
     </section>
    <CartSummery cart={cart}  total={total}/>
    </section>
    </main>
   </Layout>
     );
}
 
export default CartPage;

const CartSummery = ({total,cart}) => {
  const orginalTotalPrice=cart.length 
  ? cart.reduce((acc,curr)=> acc + curr.quntity * curr.price , 0)
  : 0;
  return ( 
    <section className="cartSummery">
      <h2 style={{marginBottom:"20px"}}>CartSummery</h2>
      <div className="summeryItem">
        <p>cart total </p>
        <p>{orginalTotalPrice}$</p>
      </div>
      <div className="summeryItem">
        <p>cart discount</p>
        <p>{orginalTotalPrice - total}$</p>
      </div>
      <hr />
      <div className="summeryItem">
        <p>net price</p>
        <p>{total}$</p>
      </div>
        <Link to={"/checkout"}>
      <button className="btn primary" style={{width:"100%",marginTop:"10px"}}>Go to checkout</button>

        </Link>
    </section>
   );
}
 
