import React from "react";
import Status from "./Status";
import { create } from "react-test-renderer";
import StatusWithHooks from "./StatusWithHooks";
import { act } from "react-dom/test-utils";

describe("Status Component", () => {
  test("status from props should be in state", () => {
    const component = create(<Status status="hello" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("hello");
  });

  test("after render input shouldn't be displayed", () => {
    const component = create(<StatusWithHooks status="hello" />);
    const root = component.root;
    expect(() => {
      root.findByType("input");
    }).toThrow();
  });

  test("input should be displayed in edit mode instead of span", async () => {
    const component = create(<StatusWithHooks status="hello" />);
    const root = component.root;
    let button = await root.findByType("button");
    act(() => {
      button.props.onClick();
    });
    let input = await root.findByType("input");
    expect(input.props.value).toBe("hello");
  });

  test("after render span should be displayed correct", async () => {
    const component = create(<StatusWithHooks status="hello" />);
    const root = component.root;
    let span = await root.findByType("span");
    expect(span.children[0]).toBe("hello");
  });
});
