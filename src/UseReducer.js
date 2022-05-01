import React, {useState, useReducer} from "react";

function UseReducer() {
  // const [checked, setChecked] = useState(false);
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  );
  console.log(checked);


  // This function is a "reducer" (a reducer takes current state and return new state)
  // This keeps logic out of the onChange events.
  // This is commented out because we are using a reducer
  // function toggle() {
  //   setChecked((checked) => !checked)
  // }

  // But you can also import reducer
  return (
    <>
      <h1>Use Reducer</h1>
      <input 
        type="checkbox" 
        value={checked} 
        onChange={toggle}
      />
    <p>{checked ? "checked" : "not checked"}</p>
    </>
  )
}

export default UseReducer
