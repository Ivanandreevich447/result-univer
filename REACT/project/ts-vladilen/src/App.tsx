import CreateProduct from "./components/CreateProduct";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import Product from "./components/Product";
import UseProducts from "./hooks/products";
import  { useState } from "react";
import Iproduct from "./models";



const App = ()=>  {
const {loading, error, products,addProduct} = UseProducts()
const [modal, setModal] = useState(false)

const createHandler =(product: Iproduct) => {
  setModal(false)
  addProduct(product)
}

  return (
 <div className="container mx-auto max-w-2xl pt-5">
{loading && <Loader/>}
{error &&  <ErrorMessage error = {error}/>}

{
  products.map(prod => 
  <Product key={prod.id} product={prod}/> )
}
{modal &&  <Modal title="Создание нового продукта" onClose={()=> setModal(false)}>
  <CreateProduct onCreate={createHandler} />
</Modal>}
<button onClick={()=>  setModal(true)} className='py-2 px-4  absolute bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl ' >+</button>
 </div>
  );
}

export default App ;
