import Failure from "./index";

describe("<Failure />", () => {
  const mockCallback = jest.fn();
  test("renders", () => {
    const wrapper = shallow(
      <Failure isFailure={false} title="title" handleBtn={mockCallback} />
    );
    expect(wrapper.exists()).toBe(true);
  });
  test("should render failure div if isFailure props is true", () => {
    const wrapper = shallow(
      <Failure isFailure={true} title="title" handleBtn={mockCallback} />
    );
    expect(wrapper.find(".failure").exists()).toBe(true);
  });
  test("should render H3 with title props", () => {
    const wrapper = shallow(
      <Failure isFailure={true} title="title" handleBtn={mockCallback} />
    );
    expect(wrapper.find("h3").text()).toEqual(`Getting title`);
  });
  test("should run mock function by clicking on try agian button", () => {
    const wrapper = shallow(
      <Failure isFailure={true} title="title" handleBtn={mockCallback} />
    );
    wrapper.find("button.btn").simulate("click");
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
