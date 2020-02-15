import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Failure = props => {
  const { isFailure, title, handleBtn } = props;
  return (
    <>
      {isFailure && (
        <div className="item failure">
          <h3>Getting {title}</h3>
          <button className="btn" onClick={() => handleBtn()}>
            Try again
          </button>
          <p>Something went wrong!!</p>
        </div>
      )}
    </>
  );
};
Failure.propTypes = {
  isFailure: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  handleBtn: PropTypes.func.isRequired
};
export default Failure;
