
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

function App() {
  return (
    <div className="App bg-black">
      <NavBar></NavBar>
      <Routes>
        <Route path = '/' element = {<Home></Home>}></Route>
        <Route path = '/macbook' element = {<Macbook></Macbook>}></Route>
        <Route path = '/samsung' element = {<Samsung></Samsung>}></Route>
        <Route path = '/oneplus' element = {<OnePlus></OnePlus>}></Route>
        <Route path = '/iphone' element = {<Iphone></Iphone>}></Route>
        <Route path = '/watch' element = {<Watch></Watch>}></Route>
        <Route path = '/login' element = {<Login></Login>}></Route>
      </Routes>
   </div>
  );
}

export default App;
