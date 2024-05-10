import { useState } from "react";
import "./App.css";

function App() {
  const [elements, setElements] = useState([]);
  const [add, setAdd] = useState("");
  function handleChange(e) {
    const { value } = e.target;
    setAdd(value);
  }
  function handleClick(event) {
    event.preventDefault();
    setElements((prevValues) => [...prevValues, add]);
    setAdd(" ");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={add} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {elements.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
