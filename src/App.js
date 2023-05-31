import Navbar from './component/navbar/navbar.component';
import Home from './routes/Home/home.compoenet.';
import Product from './routes/Product/Product.component';
import { Route, Routes } from "react-router-dom";
import SignIn from './routes/sign-in/sign-in.component';
import Searchbox from './component/searchbox/searchbox.component';
import CheckoutRoutes from './routes/Checkout/Checkout.routes';


function App() {
  return (
    <div>

      <h1>Basic React exercises Website</h1>

      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='product' element={< Product />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='/Checkout' element={<CheckoutRoutes />} />

        </Route>

      </Routes>


    </div>
  );
}

export default App;
