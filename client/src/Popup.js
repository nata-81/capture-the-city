import React from "react";

const Popup = props => {
  var content = (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <h1>{props.title}</h1>
      </div>
      <p>{props.content}</p>
    </div>
  );

  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <div onClick={ () => props.setTrigger(false)} style={{ cursor: "pointer", marginTop: "-40px" }}>
          <p style={{ fontSize: "30px", color: props.color } }>X</p>
        </div>
        { content }
        <div style={{ height: "80px" }}></div>
      </div>
    </div>
  ) : "";
};

export default Popup;