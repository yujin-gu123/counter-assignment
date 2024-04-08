// import necessary react testing library helpers here
// import the Counter component here
import Counter from "../components/Counter";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

beforeEach(() => {
  // Render the Counter component here
  <Counter />;
});

test("renders counter message", () => {
  // Complete the unit test below based on the objective in the line above
  const { getByText } = render(<Counter />);
  expect(getByText("Counter")).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  // Complete the unit test below based on the objective in the line above
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("count")).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  // Complete the unit test below based on the objective in the line above
  const { getByText, getByTestId } = render(<Counter />);
  fireEvent.click(getByText("+"));
  expect(getByTestId("count")).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
  // Complete the unit test below based on the objective in the line above
  const { getByText, getByTestId } = render(<Counter />);
  fireEvent.click(getByText("-"));
  expect(getByTestId("count")).toHaveTextContent("-1");
});
