import React from "react";
import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, i) => (
        <SingleColor color={color} key={nanoid()} index={i} />
      ))}
    </section>
  );
};

export default ColorList;
