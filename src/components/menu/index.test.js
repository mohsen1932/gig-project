import { Menu } from "./index";

describe("<Menu />", () => {
  const mockfunc = jest.fn();
  test("renders", () => {
    const wrapper = shallow(
      <Menu
        language="en"
        rotate={false}
        monochrome={false}
        setMonochrome={mockfunc}
        setRotate={mockfunc}
        setLanguage={mockfunc}
        randomizeColors={mockfunc}
        getCompanyValues={mockfunc}
        setCompanyValues={mockfunc}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });
  test("should open menu box by clicking on menu button", () => {
    const wrapper = mount(
      <Menu
        language="en"
        rotate={false}
        monochrome={false}
        setMonochrome={mockfunc}
        setRotate={mockfunc}
        setLanguage={mockfunc}
        randomizeColors={mockfunc}
        getCompanyValues={mockfunc}
        setCompanyValues={mockfunc}
      />
    );
    wrapper.find(".menu-btn").simulate("click");
    expect(wrapper.find(".menu-box.open").exists()).toBe(true);
    expect(wrapper.find(".shader.open").exists()).toBe(true);
  });
});
