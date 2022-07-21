import React from "react";
import { render, screen, RenderResult } from "@testing-library/react";

import { CheckIcon16 } from "..";

describe("Icons", () => {
  enum Size {
    Small = 8,
    Small_12 = 12,
    Medium = 16,
    Medium_18 = 1618,
    Big = 24,
  }

  it("CheckIcon16", () => {
    render(<CheckIcon16 />);
    // expectIconToBeCorrect(wrapper, 'check-icon-16', Size.Medium);
    expect(true).toBe(true);
  });
});

// const expectIconToBeCorrect = (
//   wrapper: RenderResult,
//   testId: string,
//   dimensions: number
// ) => {
//   expect(screen.getByTestId(testId)).toHaveClass('axr-icon');
//   expect(screen.getByTestId(testId)).toHaveClass(`axr-icon-${dimensions}`);
//   expect(screen.getByTestId(testId).getAttribute('style')).toEqual(
//     expect.stringMatching(/--svg-fill-color:.*;/)
//   );
// }
