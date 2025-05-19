import React from 'react';
import './MemoryPanel.css';

const MemoryPanel = ({ memory }) => {
  return (
    <div className="memory-panel">
      <h3>🧠 Memory</h3>
      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(memory).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemoryPanel;
