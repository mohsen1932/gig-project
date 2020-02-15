import Logo from "./index";

describe("<Logo />", () => {
  test("renders", () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.exists()).toBe(true);
  });
});
