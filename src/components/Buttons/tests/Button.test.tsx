import React from "react";
import { cleanup, screen, render } from "@testing-library/react";

import { Button } from "../";
import { CheckIcon16 } from "../../Icons/CheckIcon16";

describe("Button", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders Button", () => {
    render(<Button>Teste</Button>);

    expect(screen.getByText("Teste")).toBeDefined();
  });

  it("renders Button with loading option", () => {
    render(<Button loading={true}>Teste</Button>);

    expect(screen.getByText("Teste")).toBeDefined();
  });

  it("renders Button with disabled option", () => {
    render(<Button disabled={true}>Teste</Button>);

    expect(screen.getByText("Teste")).toBeDefined();
  });

  describe("icons", () => {
    it("adds the axr-button--icon class if button has an icon", () => {
      render(<Button icon={<CheckIcon16 />}>Teste</Button>);

      expect(screen.getByRole("button")).toHaveClass("frz-button--icon");
    });
  });
});
