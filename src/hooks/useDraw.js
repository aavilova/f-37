import {useState} from "react";
import {initialDraws} from "../constants/initialValues";

function useDraw() {
  const [draws, setDraws] = useState(initialDraws);

  function onDrawChange(index) {
    const newDraws = [...draws];

    newDraws[index] = newDraws[index] === 1 ? 0 : 1;

    setDraws(newDraws);
  }

  return {draws, onDrawChange};
}

export default useDraw;
