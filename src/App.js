import React from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <div>
    <AuthContextProvider>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/account' element={<Account/>}/>



    </Routes>

    </AuthContextProvider>
    
    </div>
  );
}

export default App;
