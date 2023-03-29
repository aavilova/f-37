import React from "react";
import Slider from "../Slider";
import Checkbox from "../Checkbox";
import {sounds} from "../../constants/initialSounds";
import "./styles.css";

function Sizes({radiis, draws, onSizeChange, onDrawChange, handleBassValueChange}) {
  return (
    <div className={'sizes__container'}>
      <div className='abt'>
        <h1>SIZE CONTROLS</h1>
        <h1>-H</h1>
      </div>
      <div className={'sizes__list'}>
        {
          radiis.map((radii, index) => {
            if (index === 0) {
              return null;
            }
            return (
              <div key={'size' + index} className={'sizes__list__item'}>
                <Slider
                  value={100 * radii}
                  onChange={event => {
                    onSizeChange(event, index);
                    handleBassValueChange(sounds[index - 1].type, event.target.value * sounds[index - 1].modifier / 100)
                  }}
                />
                <Checkbox onChange={_event => onDrawChange(index - 1)} checked={!!draws[index - 1]}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Sizes;
