// // import { useState } from "react";
// const ToDoComponent = ({ item, onChecked, id }) => {
//   //   const [isClick, setIsClick] = useState(false);
//   //   function handleItemClick() {
//   //     // setIsClick((prevValue) => !prevValue);
//   //   }
//   return (
//     <li
//       //   style={isClick ? { textDecoration: "line-through" } : null}
//       onClick={() => {
//         onChecked(id);
//       }}
//     >
//       {item}
//     </li>
//   );
// };

// export default ToDoComponent;

import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
