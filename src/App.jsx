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

function App(){
  const dispatch = useDispatch();

  //axios call 
  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch])

  const [signed,setSigned] = useState(false);
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
            <Route path='/' element={<Home/>}/>
            <Route path='/Admin' element={<Admin/>}/>
            <Route  path='/Upcomming' element={<Upcomming signed={signed} pop={pop} setPop={setPop}/>}/>
            <Route path='/Product/:id' element={<Desc signed={signed} pop={pop}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
