import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loading from "./components/loading/index";
import * as actions from "./redux/actions";
import "./theme/theme.scss";
import Failure from "./components/failure";
import Item from "./components/item";
import Logo from "./components/logo";
import Menu from "./components/menu";

class App extends Component {
  componentDidMount() {
    this.tryGetOffices();
    this.tryGetCompanyValues();
  }
  componentWillUnmount() {
    const { setCompanyValues, setOffices } = this.props;
    setCompanyValues([]);
    setOffices([]);
  }
  tryGetOffices = () => {
    const { getOffices } = this.props;
    getOffices();
  };
  tryGetCompanyValues = () => {
    const { getCompanyValues } = this.props;
    getCompanyValues();
  };

  render() {
    const {
      company_values_failure,
      company_values_loading,
      offices_failure,
      offices_loading,
      company_values,
      offices,
      rotate,
      monochrome
    } = this.props;
    return (
      <>
        <Menu />
        <div className="wrapper">
          <Logo />
          <Loading isLoading={offices_loading} />
          <Failure
            isFailure={offices_failure}
            title="offices"
            handleBtn={this.tryGetOffices}
          />
          {offices.map(item => (
            <Item
              text={item.address}
              title={item.country}
              color={item.color}
              rotate={rotate}
              monochrome={monochrome}
              key={`office-${item.id}`}
            />
          ))}
          <Loading isLoading={company_values_loading} />
          <Failure
            isFailure={company_values_failure}
            title="company values"
            handleBtn={this.tryGetCompanyValues}
          />
          {company_values.map(item => (
            <Item
              text={item.description}
              title={item.title}
              color={item.color}
              rotate={rotate}
              monochrome={monochrome}
              key={`company_value-${item.id}`}
            />
          ))}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  company_values: state.app.company_values,
  company_values_failure: state.app.company_values_failure,
  company_values_loading: state.app.company_values_loading,
  offices: state.app.offices,
  offices_failure: state.app.offices_failure,
  offices_loading: state.app.offices_loading,
  rotate: state.app.rotate,
  monochrome: state.app.monochrome
});
const mapDispatchToProps = dispatch => {
  const {
    getCompanyValues,
    setCompanyValues,
    getOffices,
    setOffices
  } = actions;
  return bindActionCreators(
    { getCompanyValues, setCompanyValues, getOffices, setOffices },
    dispatch
  );
};
App.propTypes = {
  company_values: PropTypes.array.isRequired,
  offices: PropTypes.array.isRequired,
  company_values_failure: PropTypes.bool.isRequired,
  company_values_loading: PropTypes.bool.isRequired,
  offices_failure: PropTypes.bool.isRequired,
  offices_loading: PropTypes.bool.isRequired,
  rotate: PropTypes.bool.isRequired,
  monochrome: PropTypes.bool.isRequired,
  getCompanyValues: PropTypes.func.isRequired,
  setCompanyValues: PropTypes.func.isRequired,
  getOffices: PropTypes.func.isRequired,
  setOffices: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
