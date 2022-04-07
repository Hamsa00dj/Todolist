
import { useState } from 'react';
import './App.css';
import TODO from './TODO';



function App() {

  const [inputList, setInputList] = useState("")
  const [items, setItems ] = useState([])

  
  
  
  const itemEvent = (event) =>{
    setInputList(event.target.value) 
    console.log(itemEvent)
  }

  const listOfItems = () =>{
    setItems((oldItems) =>{
      return[...oldItems, inputList]
    }
    )
    setInputList("")
  }
  const deleteItems = () =>{
    console.log(deleteItems);
}
  return (
    <div className="App">
     <div className=' center_div'>
       
       <h1>TODO LIST</h1>
      
     
       <input type="text" placeholder='Add Items' onChange={itemEvent} value={inputList}></input>
       <button onClick={listOfItems}>+</button>
       {/* <button onClick={deleteItems}>-</button> */}
       {/* <ul> */}
         {/* <li>{inputList}</li> */}
         {items.map((itemval, index) => {
          <TODO
           return key = {index} 
           id = {index} 
           text ={itemval} 
           onSelect = {deleteItems}/>
         })}
       {/* </ul> */}

     </div>
    </div>
  );
}

export default App;
