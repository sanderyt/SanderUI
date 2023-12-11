import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("applies the default 'md' size class", () => {
    const { container } = render(<Button>Default Size</Button>);
    expect(container.firstChild).toHaveClass("isMd");
  });

  it("applies the 'sm' size class when size prop is 'sm'", () => {
    const { container } = render(<Button size="sm">Small Size</Button>);
    expect(container.firstChild).toHaveClass("isSm");
  });

  it("applies the 'lg' size class when size prop is 'lg'", () => {
    const { container } = render(<Button size="lg">Large Size</Button>);
    expect(container.firstChild).toHaveClass("isLg");
  });

  it("applies the 'xl' size class when size prop is 'xl'", () => {
    const { container } = render(<Button size="xl">Extra Large Size</Button>);
    expect(container.firstChild).toHaveClass("isXl");
  });

  it("applies the '2xl' size class when size prop is '2xl'", () => {
    const { container } = render(<Button size="2xl">2x Large Size</Button>);
    expect(container.firstChild).toHaveClass("is2Xl");
  });

  it("applies the default 'primary' variant class", () => {
    const { container } = render(<Button>Primary Variant</Button>);
    expect(container.firstChild).toHaveClass("isPrimary");
  });

  it("applies the 'secondary' variant class when variant prop is 'secondary'", () => {
    const { container } = render(
      <Button variant="secondary">Secondary Variant</Button>
    );
    expect(container.firstChild).toHaveClass("isSecondary");
  });

  it("applies the 'secondary-gray' variant class when variant prop is 'secondary-gray'", () => {
    const { container } = render(
      <Button variant="secondary-gray">Secondary Gray Variant</Button>
    );
    expect(container.firstChild).toHaveClass("isSecondaryGray");
  });

  it("calls the onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me</Button>
    );
    const button = getByText("Click me");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  it("applies additional className correctly", () => {
    const { container } = render(
      <Button className="custom-class">Custom Class</Button>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
