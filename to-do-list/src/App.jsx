// import React, { useState } from "react";
// import "./App.css";
// import ToDoComponent from "./ToDoComponent";

// function App() {
//   const [inputText, setInputText] = useState("");
//   const [items, setItems] = useState([]);
//   // const [borrar, setBorrar] = useState("");
//   function handleChange(event) {
//     const newValue = event.target.value;
//     setInputText(newValue);
//   }
//   function addItem() {
//     setItems((prevItems) => {
//       return [...prevItems, inputText];
//     });
//     setInputText("");
//   }
//   function deleteItem(id) {
//     setItems((prevItems) => {
//       return prevItems.filter((item, index) => {
//         return index !== id;
//       });
//     });
//   }
//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>To-Do List</h1>
//       </div>
//       <div className="form">
//         <input onChange={handleChange} type="text" value={inputText} />
//         <button onClick={addItem}>
//           <span>Add</span>
//         </button>
//       </div>
//       <div>
//         <ul>
//           {items.map((item, index) => {
//             return (
//               <ToDoComponent
//                 key={index}
//                 id={index}
//                 item={item}
//                 onChecked={deleteItem}
//               />
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }
// // }
// export default App;

//CHALLENGE: I have extracted the Input Area, including the <input> and
//<button> elements into a seperate Component called InputArea.
//Your job is to make the app work as it did before but this time with the
//InputArea as a seperate Component.

// DO NOT: Modify the ToDoItem.jsx
// DO NOT: Move the input/button elements back into the App.jsx

//Hint 1: You will need to think about how to manage the state of the input element
//in InputArea.jsx.
//Hint 2: You will need to think about how to pass the input value back into
//the addItem() function in App.jsx.

import "./App.css";
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
