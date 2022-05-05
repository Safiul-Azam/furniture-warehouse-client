import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Inventory from './Pages/Home/Inventory/Inventory/Inventory';
import Header from './Pages/Shared/Header/Header';
import ManageInventory from './Pages/Home/Inventory/ManageInventory/ManageInventory';
import AllInventory from './Pages/Home/Inventory/AllInventory/AllInventory';
import AddItem from './Pages/Home/AddItem/AddItem';
import UpdateInventory from './Pages/Home/Inventory/UpdateInventory/UpdateInventory';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div className="">
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/allInventory' element={<AllInventory></AllInventory>}></Route>
      <Route path='/inventory/:inventoryId' element={<Inventory></Inventory>}></Route>
      <Route path='/manage-inventory' element={<ManageInventory></ManageInventory>}></Route>
      <Route path='/addItem' element={<AddItem></AddItem>}></Route>
      <Route path='/updateInventory/:updateId' element={<UpdateInventory></UpdateInventory>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    </div>
  );
}

export default App;
