import Layout from "../../Layout/Layout";
import * as data from '../../data';
import { useCart, useCartActions } from "../../Providers/CartProvider";
import Swal from 'sweetalert2';

function checkInCart(cart,product){
  return cart.find((c)=> c.id===product.id)
}
const HomePage = () => {

  const {cart}=useCart()

  const Dispatch=useCartActions()
  const addProductHandler =(product)=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${product.name} Add to Cart !`,
      showConfirmButton: false,
      timer: 1500
    })
    Dispatch({type:"ADD_TO_CART",payload:product})
  }
    return ( <div>
      <Layout>
     <main className="container">
      <section className="productList">
        {data.products.map((product)=>{
          return <section className="product" key={product.id}>
            <div className="productImg" >
              <img src={product.image} alt={product.name}/>
            </div>
            <div className="productDec">
              <p>{product.name}</p>
              <p> $ {product.price}</p>
              <button onClick={()=>addProductHandler(product)} className="btn primary">
                {checkInCart(cart,product) ?"checkInCart" :"AddCart"}
                </button>
            </div>
          </section>
        })}
      </section>
     </main>
      </Layout>
    </div> );
}
 
export default HomePage;