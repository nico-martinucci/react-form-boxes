import { useState } from "react";



function NewBoxForm() {
  const [boxFormData, setBoxFormData] = useState({
    width: "",
    height: "",
    color: ""
  });

  function handleSubmit(evt) {
    evt.preventDefault();

  }



  return (
    <form >
      <label htmlFor="width"></label><input id="width" ></input>
      <label htmlFor="height"></label><input id="height" ></input>
      <label htmlFor="color"></label><input id="color" ></input>
      <submit onClick={handleSubmit}>Make Box</submit>
    </form>
  );
}