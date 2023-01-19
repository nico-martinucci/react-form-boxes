import Box from "./Box.js";
import NewBoxForm from "./NewBoxForm.js";
import { useState } from "react";
import { uniqueId as _uniqueId } from "lodash/uniqueId";

/**
 * BoxList: includes add new box form and list of current boxes
 * 
 * Props: N/A
 * 
 * State:
 * - boxes: list of currently added boxes
 * 
 * BoxList -> NewBoxForm
 * BoxList -> Box, Box, Box ...
 * 
 * @returns - rendered BoxList with form and boxes.
 */
function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /**
   * addNewBox: adds a new box to the boxes array; called on NewBoxForm
   * submission.
   * @param {object} boxData - { width, height, color } 
   */
  function addNewBox(boxData) {
    setBoxes(currBoxes => {
      return [...currBoxes, 
        { ...boxData, id: _uniqueId() }
      ];
    });
  }

  function removeBox(id) {
    setBoxes(currBoxes => currBoxes.filter(
      box => box.id !== id
    ));
  }

  return (
    <NewBoxForm addNewBox={addNewBox} />
    //a map of new Boxes created by NewBoxForm
  );
}

export default BoxList;