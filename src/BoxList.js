import Box from "./Box.js";
import NewBoxForm from "./NewBoxForm.js";
import { useState } from "react";

function BoxList() {
  const [boxes, setBoxes] = useState([]);


  function makeBox(boxData) {
    setBoxes(currBoxes => {
      return [...currBoxes, boxData];
    });
  }



  return (
    <NewBoxForm makeBox={makeBox} />
    //a map of new Boxes created by NewBoxForm
  );
}

export default BoxList;