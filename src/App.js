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
import Registration from './Pages/Login/Registration/Registration';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import MyAddedProducts from './Pages/MyAddedProduct/MyAddedProducts/MyAddedProducts';
import { ToastContainer } from 'react-toastify';
import NoFoundPage from './Pages/NoFoundPage/NoFoundPage';
import OurBlogs from './Pages/Home/OurBlogs/OurBlogs/OurBlogs';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/allInventory' element={<AllInventory></AllInventory>}></Route>
        <Route path='Our-blogs' element={<OurBlogs></OurBlogs>}></Route>
        <Route path='blogs'element={<Blogs></Blogs>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/manage-inventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/updateInventory/:updateId' element={
          <RequireAuth>
            <UpdateInventory></UpdateInventory>
          </RequireAuth>
        }></Route>
        <Route path='/myAddedProducts' element={
          <RequireAuth>
           <MyAddedProducts></MyAddedProducts>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='*'element={<NoFoundPage></NoFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
