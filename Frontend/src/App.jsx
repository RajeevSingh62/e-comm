import React from 'react'
import Nav from './Component/Nav'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './Component/Footer'
import SignUp from './Component/SignUp'
import PrivateComponent from './Component/PrivateComponent'
import Login from './Component/Login'
import AddProduct from './Component/AddProduct'
import ProductList from './Component/ProductList'
import UpdateProduct from './Component/UpdateProduct'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Nav/> 
      <Routes>
         
        <Route element={<PrivateComponent/>}>
        <Route path='/'element={<ProductList/>}/>
        <Route path='/add'element={<AddProduct/>}/>
        <Route path='/update/:id'element={<UpdateProduct/>}/>
        <Route path='/logout'element={<h1>logout listing</h1>}/>
        <Route path='/profile'element={<h1>profile component</h1>}/>
        </Route>
        
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App