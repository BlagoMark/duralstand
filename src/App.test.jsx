import React from "react";
import { MainApp } from "./App";
import { render, screen } from "@testing-library/react";

it("renders witout crashing", () => {
  render(<MainApp />);
  const divElement = screen.getByRole("application");
  expect(divElement).toBe(divElement);
});
