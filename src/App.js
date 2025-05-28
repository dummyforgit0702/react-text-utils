import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  const [mode, setMode]= useState('light'); 

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark'); 
      document.body.style.backgroundColor='#a83939';
      showAlert("Dark mode is being enabled", "success");  
      document.title='TextUtils-Dark Mode'; 
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'; 
      showAlert("Light mode is being enabled", "success"); 
      document.title='TextUtils-Light Mode'; 
    }
  }

  const [alert, setAlert] = useState(null)

  const showAlert =(message, type)=>{
    setAlert({
      message:message, 
      type:type
    })
    setTimeout(()=>{
      setAlert(null);  
    }, 1500)
  }
  // return (


  // //  <>
   
  // //   {/* <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>  

  // //   <Alert alert={alert}/>
  // //   <div className="container my-3">
  // //     <Switch>
  // //         <Route path="/about">
  // //           <About />
  // //         </Route>
  // //         <Route path="/">
  // //           <Textform showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/>
  // //         </Route>
  // //     </Switch>
  // //   </div> */}
  // //   
  // //  </>
  //  <>
  //   <Router>
  //     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  //     <Alert alert={alert}/>
  //     <div className="container my-3">
               
  //         <Routes>
  //           <Route exact path="/about" element={<About/>} >
  //           </Route>

  //           <Route exact path="/home" element={<Textform showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}>

  //           </Route>
  //         </Routes>


  //     </div>


  //     </Router>

  //   </>

  // );
  return (
    <>
      {/* Use BrowserRouter instead of Router */}
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* 'exact' is optional in v6, can be removed. Route can be self-closing. */}
            <Route path="/about" element={<About mode={mode} />} />

            {/* Use 'Textform' (lowercase 'f') to match your import. 'exact' is optional. */}
            {/* Assuming you want Textform on the home/root path as well, you might want a route like: */}
            {/* <Route path="/" element={<Textform showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />} /> */}
            <Route path="/home" element={<Textform showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />} />
            
            {/* If you want Textform to be the default page (i.e., for path="/"), add this: */}
            <Route path="/" element={<Textform showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
