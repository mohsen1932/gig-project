import Loading from "./index";

describe("<Loading />", () => {
  test("renders", () => {
    const wrapper = shallow(<Loading isLoading={false} />);
    expect(wrapper.exists()).toBe(true);
  });
  test("should render Loading div if isLoading props is true", () => {
    const wrapper = shallow(<Loading isLoading={true} />);
    expect(wrapper.find(".loading").exists()).toBe(true);
  });
  test("should render five loading boxes", () => {
    const wrapper = shallow(<Loading isLoading={true} />);
    expect(wrapper.find(".loading").length).toEqual(5);
  });
});
