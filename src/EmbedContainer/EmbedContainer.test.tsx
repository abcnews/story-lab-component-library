import React from "react";
import { render } from "@testing-library/react";

import EmbedContainer from "./EmbedContainer";
import { EmbedContainerProps } from "./EmbedContainer.types";

describe("EmbedContainer Component", () => {
  let props: EmbedContainerProps;

  beforeEach(() => {
    props = {
      theme: "primary",
    };
  });

  const renderComponent = () =>
    render(
      <EmbedContainer {...props}>
        <div>Test</div>
      </EmbedContainer>
    );

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-component");

    expect(testComponent).toHaveClass("test-component-primary");
  });

  it("should have secondary className with theme set as secondary", () => {
    props.theme = "secondary";
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-component");

    expect(testComponent).toHaveClass("test-component-secondary");
  });
});
