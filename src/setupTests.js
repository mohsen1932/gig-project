// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import Enzyme, { shallow, render, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.Enzyme = Enzyme;
