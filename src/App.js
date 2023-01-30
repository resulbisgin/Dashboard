import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
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
    </Routes>
    </BrowserRouter>
      </div>
    </>
  );
}

export default App;
