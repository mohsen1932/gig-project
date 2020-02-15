import React, { Component } from "react";
import "./styles.scss";
import * as actions from "../../redux/actions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class Menu extends Component {
  state = {
    showMenu: false
  };
  toggleMenu = () => {
    const { showMenu } = this.state;
    this.setState({
      showMenu: !showMenu
    });
  };
  rotateText = () => {
    const { rotate, setRotate } = this.props;
    setRotate(!rotate);
    this.toggleMenu();
  };
  randomizeItemsColors = () => {
    const { randomizeColors } = this.props;
    randomizeColors();
    this.toggleMenu();
  };
  changeLanguage = e => {
    const { value } = e.target;
    const { setLanguage, getCompanyValues, setCompanyValues } = this.props;
    setLanguage(value);
    setCompanyValues([]);
    getCompanyValues();
    this.toggleMenu();
  };
  changeMonochrome = () => {
    const { setMonochrome, monochrome } = this.props;
    setMonochrome(!monochrome);
    this.toggleMenu();
  };
  render() {
    const { showMenu } = this.state;
    const { language, monochrome } = this.props;
    return (
      <>
        <button onClick={() => this.toggleMenu()} className="menu-btn" />
        <div
          onClick={() => this.toggleMenu()}
          className={`shader ${showMenu && "open"} `}
        />
        <div className={`menu-box ${showMenu && "open"} `}>
          <h3>Menu</h3>
          <button onClick={() => this.rotateText()} className="btn">
            Rotate Texts
          </button>
          <button onClick={() => this.randomizeItemsColors()} className="btn">
            Randomize Colors
          </button>
          <label>Language:</label>
          <select value={language} onChange={e => this.changeLanguage(e)}>
            <option value="en">English</option>
            <option value="sv">Swedish</option>
          </select>
          <br />

          <label htmlFor="monochrome">
            <input
              type="checkbox"
              name="monochrome"
              id="monochrome"
              checked={monochrome}
              onChange={() => this.changeMonochrome()}
            />{" "}
            Monochrome
          </label>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  language: state.app.language,
  rotate: state.app.rotate,
  monochrome: state.app.monochrome
});
const mapDispatchToProps = dispatch => {
  const {
    setMonochrome,
    setRotate,
    setLanguage,
    randomizeColors,
    getCompanyValues,
    setCompanyValues
  } = actions;
  return bindActionCreators(
    {
      setMonochrome,
      setRotate,
      setLanguage,
      randomizeColors,
      getCompanyValues,
      setCompanyValues
    },
    dispatch
  );
};
Menu.propTypes = {
  language: PropTypes.string.isRequired,
  rotate: PropTypes.bool.isRequired,
  monochrome: PropTypes.bool.isRequired,
  setMonochrome: PropTypes.func.isRequired,
  setRotate: PropTypes.func.isRequired,
  setLanguage: PropTypes.func.isRequired,
  randomizeColors: PropTypes.func.isRequired,
  getCompanyValues: PropTypes.func.isRequired,
  setCompanyValues: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
