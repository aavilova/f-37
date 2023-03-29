import {useState} from "react";
import {initialRadiis} from "../constants/initialValues";

function useRadii() {
  const [radiis, setRadiis] = useState(initialRadiis);

  function onSizeChange(event, index) {
    const newRadiis = [...radiis];

    newRadiis[index] = event.target.value / 100;

    setRadiis(newRadiis);
  }


  return {radiis, onSizeChange};
}

export default useRadii;
