import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Item = props => {
  const { title, text, color, rotate, monochrome } = props;
  return (
    <div
      className={`item ${color} ${rotate ? "rotate" : ""} ${
        monochrome ? "monochrome" : ""
      }`}
    >
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};
Item.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rotate: PropTypes.bool.isRequired,
  monochrome: PropTypes.bool.isRequired
};
export default Item;
