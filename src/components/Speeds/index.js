import React from "react";
import Slider from "../Slider";
import {sounds} from "../../constants/initialSounds";
import "./styles.css";

function Speeds({speeds, onSpeedChange, handleMelodyValueChange}) {
  return (
    <div className={'speeds__container'}>
       <div className='abt'>
        <h1>SPEED CONTROLS</h1>
        <h1>-H</h1>
      </div>
      <div className={'speeds__list'}>
        {
          speeds.map((speed, index) => {
            return (
              <Slider
                key={'speed' + index}
                value={50 + (100 * speed / 5)}
                onChange={(event) => {
                  onSpeedChange(event, index);
                  handleMelodyValueChange(sounds[index].type, event.target.value * sounds[index].modifier / 100);
                }}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Speeds;
