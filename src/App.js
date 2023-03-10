import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
function App() {
  return (
    <>
    <Topbar/>
      <div className="container">
    <Sidebar/>
    <BrowserRouter>
    <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/user' element={<UserList/>}/>
        <Route path='/user/:userId' element={<User/>}/>
        <Route path='/newUser' element={<NewUser/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/products/:productId' element={<Product/>}/>
        <Route path='/newproduct' element={<NewProduct />}/>
    </Routes>
    </BrowserRouter>
      </div>
    </>
  );
}

export default App;
