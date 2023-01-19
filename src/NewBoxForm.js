import { useState } from "react";

/**
 * NewBoxForm: renders a form to enter width, height, and color values for
 * a new box
 * 
 * Props:
 * - addNewBox: function to add new box to BoxList
 * 
 * State:
 * - boxFormData: one source of truth for current form data
 * 
 * BoxList -> NewBoxForm
 * @param {object} param0 - addNewBox function 
 * @returns new box form
 */
function NewBoxForm({addNewBox}) {
  const initialState = {
    width: "",
    height: "",
    color: ""
  }
  const [boxFormData, setBoxFormData] = useState(initialState);

  /**
   * handleChange: event handler for when an input changes
   * @param {event} evt - change event 
   */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setBoxFormData(curr => ({
      ...curr,
      [name]: value
    }));
  }

  /**
   * handleSubmit: event handler for form submission; calls addNewBox function
   * inherrited from BoxList, and clears form
   * @param {event} evt - submit event
   */
  function handleSubmit(evt) {
    evt.preventDefault();
    addNewBox(boxFormData);
    setBoxFormData(initialState);
  }

  return (
    <form>
      <label htmlFor="width"></label>Width: 
      <input id="width" name="width" onChange={handleChange}></input>
      <label htmlFor="height"></label>Height: 
      <input id="height" name="height" onChange={handleChange}></input>
      <label htmlFor="color"></label>Color: 
      <input id="color" name="color"onChange={handleChange}></input>
      <submit onClick={handleSubmit}>Make Box</submit>
    </form>
  );
}


export default NewBoxForm;