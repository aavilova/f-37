import React, {useState} from "react";
import Sizes from "./components/Sizes";
import Button from "./components/Buttons";
import Speeds from "./components/Speeds";
import Canvases from "./components/Canvases";
import useSpeed from "./hooks/useSpeed";
import useRadii from "./hooks/useRadii";
import useDraw from "./hooks/useDraw";
import useMusic from "./hooks/useMusic";
import "./App.css";

function App() {
  const {speeds, onSpeedChange} = useSpeed();
  const {radiis, onSizeChange} = useRadii();
  const {draws, onDrawChange} = useDraw();
  const {handleMelodyValueChange, handleBassValueChange} = useMusic();

  const [show, removeShow] =
    useState(true)
    

  return (
    <div className="App">

      {show && <div className="intro">
        <div className="alert">
          <div className="src">
            <p><span>>></span>C:\Users\AALISA\f37</p>
          </div>
          <p>Welcome to F37 fractals and sound generator! <br></br>Drag sliders and click on checkbockses however you want! Feel free to expirement and have fun ;)</p>
          <Button onClick={()=>{
              handleMelodyValueChange();
              handleBassValueChange();
              removeShow(!show);
              }
            }>Let’s go!</Button>
        </div>
      </div>}
      
      <div className="output">
        <section className='abt'>
          <h1>CANVAS OUTPUT</h1>
        </section>
        <Canvases speeds={speeds} radiis={radiis} draws={draws} />
        <section className="else">
          <div className="mod">
            <div>
              <h3>#F-37</h3>
            </div>
          </div>
          <p>Exprmtl canvas for fractal generation -V 2.0.5</p>
          <h3>CODE-?</h3>
        </section>
      </div>

      <div className="controls">
      <Speeds speeds={speeds} onSpeedChange={onSpeedChange} handleMelodyValueChange={handleMelodyValueChange} />
        <Sizes draws={draws} radiis={radiis} onDrawChange={onDrawChange} onSizeChange={onSizeChange} handleBassValueChange={handleBassValueChange} />
      </div>
    </div>
  );
}

export default App;
