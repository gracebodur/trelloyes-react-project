import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import renderer from "react-test-renderer";

describe("<Card />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the card title as expected", () => {
    const tree = renderer.create(<Card className="cardTitle" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the card content as expected", () => {
    const tree = renderer.create(<Card className="cardContent" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
