/**
 * Box: renders a single box.
 *
 * Props:
 * - width: width of box
 * - height: height of box
 * - color: background color of box
 *
 * State: N/A
 *
 * BoxList -> Box
 *
 * @param {object} param0
 * @returns
 */
function Box({ width, height, color, id, removeBox }) {

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10px",
    marginBottom: "10px"
  };

  return (
    <div>
      <div style={style}></div>
      <button onClick={() => removeBox(id)}>Remove The Box!</button>
    </div>
  );
}

export default Box;