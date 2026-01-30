import { useState } from "react";
interface RunawayButtonProps {
  onClick?: () => void; 
}
function RunawayButton({ onClick }:RunawayButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    const x = Math.random() * 300 - 150; // random left/right
    const y = Math.random() * 200 - 100; // random up/down
    setPosition({ x, y });
  };

  return (
    <div className="button-wrapper" style={{ display: "inline-block" }}>
      <button
        type="button"
        className="no-button"
        onMouseEnter={moveButton}
        onClick={onClick} // ✅ call parent when clicked
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        No :(
      </button>
    </div>
  );
}

export default RunawayButton;
