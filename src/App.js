import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
 
// import About from './components/About';

function App() {
  
  const [mode, setMode]= useState('light'); 

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark'); 
      document.body.style.backgroundColor='#a83939';
      showAlert("Dark mode is being enabled", "success");  
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'; 
      showAlert("Light mode is being enabled", "success"); 
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
  return (


   <>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>  

    <Alert alert={alert}/>
    <div className="container my-3">
       <Textform showAlert={showAlert} heading="Enter the text to analyse" mode={mode }/>
       {/* <About/> */}
    </div>
    
   </>
    
    
  );
}

export default App;
