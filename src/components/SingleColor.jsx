import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const handleClipboard = async () => {
    if (navigator.clipboard)
      try {
        navigator.clipboard.writeText(`#${hex}`);
        toast.success("copied!");
      } catch {
        toast.error("cannot access clipboard");
      }
  };
  return (
    <div
      className={
        index > 10 ? "color color-light" : "color"
      } /*using the index to change the text color to light*/
      style={{ backgroundColor: `#${hex}` }}
      onClick={handleClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </div>
  );
};

export default SingleColor;
