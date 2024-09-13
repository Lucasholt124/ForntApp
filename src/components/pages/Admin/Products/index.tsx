import { Routes, Route } from "react-router-dom"
import List from './List/index';
import Form from './Form/index';

const Products = () => {
  return (
    <Routes>
      <Route path="/admin/products" element={<List/>}>
        <List/>
      </Route>
      <Route path="/admin/products/:productId" element={<Form />}>
        <Form/>
      </Route>
    </Routes>
  )
}

export default Products