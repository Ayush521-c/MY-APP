// import logo from './logo.svg';
// import Textform from './components/Textform';
import React, { Component }  from 'react';
import Navbar from './components/Navbar';
import './App.css';
import About from "./components/About"
import { useState } from 'react';




function App() {
  // const[text,settext]=useState({
  
  // })
  const[mode,setdarkmode]=useState("light"
  
  )
  const togglemode=()=>{
    if (mode==="light"){
      setdarkmode("dark")
      document.body.style.backgroundColor="blue"
      
    }
    else{
      setdarkmode("light")
    }
  }
 
  return (

    
<>
    <Navbar title="ayhohdidpiqJOD"     mode={mode}  togglemode={togglemode}/>
    <div className='container'>
      
      
      
      
      </div>
      
      <About/>
     
    
</>

    


  )
}

export default App;
