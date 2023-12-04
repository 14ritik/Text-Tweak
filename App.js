//import logo from './logo.svg';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import './App.css';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const togglemode=()=>{
    if (mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#141414';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      }
  }
  return (
  <>
     <Router>
        <Navbar title='TextTweak' mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Textform heading="Enter Your Text Here" mode={mode} showAlert={showAlert}/>}/>
            <Route path="/About" element={<About mode={mode}/>}></Route>
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
//--openssl-legacy-provider 