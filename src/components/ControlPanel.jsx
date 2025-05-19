import React from "react";
import './ControlPanel.css';

const ControlPanel = ({ onStep, onReset, disabled, input, setInput }) => {
  return (
    <div className="control-panel">
      <input
        type="text"
        value={input}
        maxLength={10}
        onChange={(e) => setInput(e.target.value.replace(/[^0-9]/g, ""))}
        placeholder="Enter binary integer"
      />
      <button onClick={() => onReset(input)}>Reset</button>
      <button onClick={onStep} disabled={disabled}>Step</button>
    </div>
  );
};

export default ControlPanel;
