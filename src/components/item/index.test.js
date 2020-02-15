import Item from "./index";

describe("<Item />", () => {
  test("renders", () => {
    const wrapper = shallow(
      <Item
        title="title"
        text="text"
        color="color"
        rotate={false}
        monochrome={false}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });
  test("should render with props", () => {
    const wrapper = shallow(
      <Item
        title="title"
        text="text"
        color="color"
        rotate={true}
        monochrome={true}
      />
    );
    expect(wrapper.find(".item.color.rotate.monochrome").exists()).toBe(true);
  });
});
