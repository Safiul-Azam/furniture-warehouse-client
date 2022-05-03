import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import InventoryItem from './Pages/Home/InventoryItem/InventoryItem';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="">
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='inventory-items' element={<InventoryItem></InventoryItem>}></Route>
    </Routes>
    </div>
  );
}

export default App;
