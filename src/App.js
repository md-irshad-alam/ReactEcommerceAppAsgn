import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Product from './Componants/Product';


import Navbar from './Componants/Navbar';
import ShowProduct from './Componants/Cart';
import CheckoutForm from './Componants/CheckoutProduct';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart/checkout/:id" element={<CheckoutForm />} />
        <Route path="/cart" element={<ShowProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
