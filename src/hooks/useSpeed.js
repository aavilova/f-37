import {useState} from "react";
import {initialSpeeds} from "../constants/initialValues";

function useSpeed() {
  const [speeds, setSpeeds] = useState(initialSpeeds);

  function onSpeedChange(event, index) {
    const newSpeeds = [...speeds];

    newSpeeds[index] = 5 * ((event.target.value / 100) - .5);

    setSpeeds(newSpeeds);
  }

  return {speeds, onSpeedChange};
}

export default useSpeed;
