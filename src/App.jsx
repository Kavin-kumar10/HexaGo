import React from 'react';
import './App.scss';
import Upcomming from './Screens/Upcomming';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Desc from './Screens/Desc';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';
import Admin from './Screens/Admin';
import { useEffect, useState } from 'react';
import Form from './Components/Form';
import { useDispatch,useSelector } from 'react-redux';
import { getProducts } from './Redux/ProductSlice';
import Myproducts from './Screens/Myproducts';
import Header from './Components/Header';

function App(){

  //declarations
  const dispatch = useDispatch();
  const [signed,setSigned] = useState(true);
  
  //axios call on every dispatch
  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch])
  
  
  useEffect(()=>{
      if(!JSON.parse(localStorage.getItem('user'))){
        localStorage.setItem('user',{Username:''})
        setSigned(false);
      }
  },[])

  const [pop,setPop] = useState(false);

  return (
    <Router>
      <div className="App">
      {
          pop?
          <Form setPop={setPop}/>:null
        }
        <Routes>
            <Route path='/SignUp' element={<SignUp setSigned={setSigned}/>}/>
            <Route path='/SignIn' element={<SignIn setSigned={setSigned}/>}/>
            <Route path='/' element={<Home pop={pop} setPop={setPop}/>} />
            <Route path='/Admin' element={<Admin/>}/>
            <Route  path='/Upcomming' element={<Upcomming signed={signed} pop={pop} setPop={setPop}/>}/>
            <Route path='/Myproducts' element={<Myproducts setPop={setPop}/>}/>
            <Route path='/Product/:id' element={<Desc signed={signed} pop={pop}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
