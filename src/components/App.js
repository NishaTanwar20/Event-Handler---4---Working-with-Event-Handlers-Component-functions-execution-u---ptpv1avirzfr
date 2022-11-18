import React from 'react'
import '../styles/App.css';
let timer;
const App = () => {

  const handleDoubleClick = (e) =>{
    // if(timer){
    //   clearTimeout(timer);
    //   return;
    // }
    // const timer = setTimeout(()=>{
      if(e.detail === 2){
        console.log("I was double clicked");
      }else{
        console.log("I was not double clicked");
      }
    // },500);
    
  }
  return (
    <div id="main">
      <button id="dblclick-btn"  onClick={handleDoubleClick}>Double click me</button>
    </div>
  )
}


export default App;
