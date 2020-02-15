import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const renderRows = () => {
  let rows = [];
  for (let i = 0; i < 5; i++) {
    rows.push(
      <div className="item loading" key={i}>
        <div className="title loading-animate" />
        <div className="text loading-animate" />
      </div>
    );
  }
  return rows;
};
const Loading = props => {
  const { isLoading } = props;
  return <>{isLoading && renderRows()}</>;
};
Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired
};
export default Loading;
