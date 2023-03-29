import React from "react";

function Checkbox({id, onChange, checked = false}) {
  return (
    <div>
      <input type="checkbox" id={id} onChange={onChange} checked={checked}></input>
    </div>
  )
}

export default Checkbox;
