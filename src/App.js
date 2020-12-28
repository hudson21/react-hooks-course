import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const App = () => {
  const [minutes, setMinutes] = useState(5);
  const [error, setError] = useState(null);

  const handleAdd = () => {
    setMinutes(minutes + 1);

    if (error) {
      setError(null);
    }
  };

  const handleSubtract = () => {
    if (minutes > 1) {
      setMinutes(minutes - 1);
    } else {
      setError("Greater than 0 plz 😤");
    }
  };

  return (
    <div style={{ width: "100%", textAlign: "center", marginTop: "1rem" }}>
      <button onClick={handleSubtract}>
        <FaMinus />
      </button>
      <span style={{ margin: "1rem" }}>{minutes} minutes</span>
      <button onClick={handleAdd}>
        <FaPlus />
      </button>
      {error && (
        <center>
          <button
            style={{ fontSize: "1.2rem", marginTop: "1rem" }}
            onClick={() => setError(null)}
          >
            Dismiss
          </button>
          <p style={{ color: "red", fontSize: "1.5rem" }}>{error}</p>
        </center>
      )}
    </div>
  );
};

export default App;
