import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login";
import Home from "./pages/Home.jsx";
import Customers from "./pages/customer/Customers.jsx";
import AddCustomerForm from "./pages/customer/AddCustomer.jsx";
import ProductFunction from "./pages/products/products.jsx";
import AddProductForm from "./pages/products/AddProduct.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/addcustomer" element={<AddCustomerForm />} />
        <Route path="/product" element={<ProductFunction />} />
        <Route path="/addproduct" element={<AddProductForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
