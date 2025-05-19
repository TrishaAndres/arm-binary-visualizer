import React, { useState } from 'react';
import ControlPanel from './components/ControlPanel';
import MemoryPanel from './components/MemoryPanel';
import { initialize, stepExecution } from './logic/interpreter';
import './App.css';

function App() {
  const [input, setInput] = useState("1101");
  const [simState, setSimState] = useState(() => initialize(input));
  const [done, setDone] = useState(false);

  const handleStep = () => {
    const result = stepExecution(simState);
    setSimState(result.state);
    setDone(result.done);
  };

  const handleReset = (newInput) => {
    const sanitized = newInput.replace(/[^0-9]/g, "");
    setInput(sanitized);
    setSimState(initialize(sanitized));
    setDone(false);
  };

  return (
    <div className="App">
      <h1>💾 ARM Assembly Binary to Decimal Visualizer</h1>

      <ControlPanel
        onStep={handleStep}
        onReset={handleReset}
        disabled={done}
        input={input}
        setInput={setInput}
      />

      <MemoryPanel memory={simState.registers} />

      {done && (
        <div className="result">
          ✅ Final Decimal Value: <strong>{simState.registers.sum}</strong>
        </div>
      )}
    </div>
  );
}

export default App;
