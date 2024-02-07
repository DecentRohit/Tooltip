import '../Tooltip.css'; // Import the CSS file for styling


function Tooltip (props) {

 const {position, hoverText, setPosition, setHoverText} = props;


  const hanldeTooltip = ()=>{
  
   setHoverText(hoverText);
   if (position === "right"){setPosition("my-tooltiptext t-right")}
   
  else if (position === "left"){
    setPosition("my-tooltiptext t-left")
  }
  else if (position === "bottom"){
    setPosition("my-tooltiptext t-bottom")
  }
  else if (position === "top"){
    setPosition("my-tooltiptext t-top")
  
  }}

  return (
    // div for binding component for tooltip
    <div className="my-tooltip" onMouseEnter={()=>hanldeTooltip()}>
      {/* span for tooltip text */}
      <span className={position}>{hoverText}</span>
      {/* componet fetching from where it is called */}
      {props.children}
    </div>
  );
}

export default Tooltip;