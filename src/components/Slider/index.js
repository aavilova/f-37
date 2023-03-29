import React from "react";

function Slider({id, onChange, value}) {
  return (
    <div>
      <span>>></span>
      <input
        id={id}
        width={40}
        type={'range'}
        value={value}
        min={0}
        max={100}
        step={.01}
        orient="vertical"
        onChange={onChange}
      />
    </div>
  )
}

export default Slider;
