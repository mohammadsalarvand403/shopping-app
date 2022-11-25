import Layout from "../../Layout/Layout";
import * as data from '../../data';
import { useCartActions } from "../../Providers/CartProvider";
const HomePage = () => {
  const Dispatch=useCartActions()
  const addProductHandler =(product)=>{
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
              <button onClick={()=>addProductHandler(product)} className="btn primary">AddCart</button>
            </div>
          </section>
        })}
      </section>
     </main>
      </Layout>
    </div> );
}
 
export default HomePage;