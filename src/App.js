import {useState} from 'react';
import Tooltip from './components/Tooltip';
import Button from './components/Button';
import "./App.css";

function App (){
  const [position , setPosition] = useState("my-tooltiptext t-top");
  const [hoverText , setHoverText] = useState("Tooltip Content");

  // function to handle tooltip content according to entered text

  const handleContentInput = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 0) {
      setHoverText(e.target.value);
    } else {
      setHoverText( "Tooltip Content");
    }
  };

  // function to handle direction according to select option
  const handlePositionInput = (e) => {
    console.log(e.target.value);
    setPosition(e.target.value);
  };


  return (
    <div className="App">
    <div>
    {/* heading */}
    <h1>Tooltip</h1>
    <div className="form-div">
      <label className="form-label">Enter Content of Tooltip</label>
      <input
        type="text"
        className="form-control"
        onKeyUp={(e)=>handleContentInput(e)}
      placeholder='Enter tooltip...'
      />
    </div>
    <div className="form-div">
    <label>Select position of Tooltip</label>
    <select
      className="form-select"
      onChange={(e) => handlePositionInput(e)}
    >
      <option value="top">Top</option>
      <option value="left">Left</option>
      <option value="right">Right</option>
      <option value="bottom">Bottom</option>
    </select>
  </div>
  </div>
   

    <Tooltip hoverText={hoverText} position={position} setPosition={setPosition} setHoverText={setHoverText}>
    {/* calling button component inside toolip*/}
    <Button />
  </Tooltip>
  </div>
 )};


export default App;