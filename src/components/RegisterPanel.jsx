import React from "react";

const RegisterPanel = ({ registers }) => (
  <div>
    <h2>📦 Registers</h2>
    <ul>
      {Object.entries(registers).map(([key, value]) => (
        <li key={key}>
          <strong>{key}</strong>: {value}
        </li>
      ))}
    </ul>
  </div>
);

export default RegisterPanel;
