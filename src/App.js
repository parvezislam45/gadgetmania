
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/Home/NavBar';
import Home from './Components/Home/Home'
import Macbook from './Components/Product/Macbook/Macbook'
import Iphone from './Components/Product/Iphone/Iphone'
import Samsung from './Components/Product/Samsung/Samsung'
import OnePlus from './Components/Product/OnePlus/OnePlus'
import Watch from './Components/Product/Watch/Watch'
import Login from './Components/Home/Login';
import AddItem from './Components/Inventory/AddItem';
import Update from './Components/Inventory/Update';
import RequireAuth from './RequreAuth/RequireAuth'
import Footer from './Components/Home/Footer';
import Orders from './Components/Inventory/Orders';
import NotFound from './Components/Home/NotFound';
import SignUp from './Components/Home/SignUp';
import Blog from './Components/Home/Blog';
function App() {
  return (
    <div className="App bg-black">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/macbook' element={
          <RequireAuth><Macbook></Macbook></RequireAuth>}></Route>
        <Route path='/samsung' element={<Samsung></Samsung>}></Route>
        <Route path='/oneplus' element={<OnePlus></OnePlus>}></Route>
        <Route path='/iphone' element={<Iphone></Iphone>}></Route>
        <Route path='/watch' element={<Watch></Watch>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/additem' element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
        <Route path='/update/:id' element={
          <RequireAuth><Update></Update></RequireAuth>}></Route>
        <Route path='/order:id' element={
          <RequireAuth><Orders></Orders>></RequireAuth>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
