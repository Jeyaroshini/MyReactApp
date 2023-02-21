import React, { useState } from "react";

function MouseEvents() {
  const [bgColour, setBgColour] = useState("white");

  const appStyles = {
    background: `${bgColour}`,
  };

  const styles = {
    background: "pink",
  };

  return (
    <div className="App" style={appStyles}>
      <button
        style={styles}
        onMouseEnter={() => setBgColour("yellow")}
        onMouseLeave={() => setBgColour("white")}
      >
        MouseEvent
      </button>
    </div>
  );
}

export default MouseEvents;
