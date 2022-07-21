import React from "react";
import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import styled from "styled-components";
import { Color } from "../../constants/colors";
import { styleByTheme } from "../../shared/styleByTheme/styleByTheme";
import { useUiComponentsThemeProvider } from "../useUiComponentsThemeProvider";
import { UiComponentsThemeProvider } from "../../shared/uiComponentsThemeProvider/UiComponentsThemeProvider";
import { ReactNode } from "react";

type ComponentType = {
  children: ReactNode;
};
describe("useUiComponentsThemeProvider", () => {
  it("receives defaultTheme", () => {
    render(<TestComponent />);
    const { result } = renderHook(() => useUiComponentsThemeProvider());
    expect(result.current).toEqual({ key: "light" });
  });

  it("receives lightTheme", () => {
    const wrapper = ({ children }: ComponentType) => (
      <UiComponentsThemeProvider theme={{ key: "light" }}>
        {children}
      </UiComponentsThemeProvider>
    );

    const { result } = renderHook(() => useUiComponentsThemeProvider(), {
      wrapper,
    });
    expect(result.current).toEqual({ key: "light" });
  });

  it("receives darkTheme", () => {
    const wrapper = ({ children }: ComponentType) => (
      <UiComponentsThemeProvider theme={{ key: "dark" }}>
        {children}
      </UiComponentsThemeProvider>
    );

    const { result } = renderHook(() => useUiComponentsThemeProvider(), {
      wrapper,
    });
    expect(result.current).toEqual({ key: "dark" });
  });
});

const TestComponent = styled.label`
  color: rgb(${styleByTheme({ light: Color.L500, dark: Color.D500 })});
`;
