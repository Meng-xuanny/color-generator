import React, { useState } from "react";

export default function Form({ addColor }) {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          placeholder="#f15025"
          onChange={(e) => setColor(e.target.value)}
          className="form-input"
        />

        <button
          className="btn"
          type="submit"
          style={{ backgroundColor: color }}
        >
          submit
        </button>
      </form>
    </section>
  );
}
