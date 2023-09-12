import { useState } from "react"

import './App.css';

function App() {
  const d = new Date();
 let onlyDate = d.toDateString()
  const [myCounter, setMyCounter] = useState([onlyDate])
  const [stepCounter, setStepCounter] = useState(1)
  const [countCounter, setCountCounter] = useState(0)
  
  

function stepMinusHandler(){
  if(stepCounter> 1 )
  setStepCounter(stepCounter-1)

 
}
function stepPlusHandler(){
  

  setStepCounter(stepCounter+1)
  
}

// ////////////////////////////////////   Plus
function countPlusHandler(){
  setCountCounter(countCounter+stepCounter)
  const incrementDate = d.setDate(d.getDate()+(countCounter+stepCounter))
  const dateset = new Date(incrementDate)
  onlyDate = dateset.toDateString()
  setMyCounter(onlyDate)
  setCountCounter(countCounter+stepCounter)

  
  
}
  

//  /////////////////////// Minus
function countMinusHandler(){
  setCountCounter(countCounter-stepCounter)
  console.log(onlyDate)
  const newDate = new Date(myCounter)
  console.log(newDate)
  const incrementDate = newDate.setDate(newDate.getDate()-stepCounter)
  const dateset = new Date(incrementDate)
  console.log(dateset)
  onlyDate = dateset.toDateString()
  setMyCounter(onlyDate)
  

}
  
  
  
  
  return (
    <div className="App">
    <div className='stepDiv'> 
      <button className='stepMinus' onClick={stepMinusHandler}>-</button>
      <h3 className='countentStep'>Step: </h3><h3 className='stepCount'>{stepCounter}</h3>
      <button className='stepPlus' onClick={stepPlusHandler}>+</button>
    </div>
    <div className='countDiv'>
      <button className='countMinus' onClick={countMinusHandler}>-</button>
      <h3 className='countentCount'>Count: </h3 ><h3 className='count'>{countCounter}</h3>
      <button className='countPlus' onClick={countPlusHandler}>+</button>
    </div>
    <p className="contentShow"><span>{countCounter == 0 ? "" : countCounter == 1 ? countCounter +" day from " :countCounter == -1 ? countCounter +" day from " :countCounter +" days from " }</span>Today is {myCounter} </p>
    </div>
  );
}

export default App;
