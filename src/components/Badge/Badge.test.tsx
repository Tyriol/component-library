import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Badge from "./Badge";

describe(Badge, () => {
  it("displays with default styles when no variations are applied", () => {
    render(<Badge title="test" />);
    const badgeElement = screen.getByText("test");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.className).toMatch(/badge/);
    expect(badgeElement.className).toMatch(/rounded/);
    expect(badgeElement.className).toMatch(/gray/);
  });

  it("displays as a square badge if the square variant option is passed in via props", () => {
    render(<Badge title="test" variant="square" />);
    const badgeElement = screen.getByText("test");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.className).toMatch(/square/);
  });

  it("displays as the correct colour if the correct colour is passed in via props", () => {
    render(<Badge title="test" colour="pink" />);
    const badgeElement = screen.getByText("test");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.className).toMatch(/pink/);
  });

  it("falls back to the default colour if an invalid colour is passed in", () => {
    render(<Badge title="test" colour="mauve" />);
    const badgeElement = screen.getByText("test");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.className).toMatch(/gray/);
  });

  it("displays the correct title passed in", () => {
    render(<Badge title="Badge" />);
    const badgeElement = screen.getByText("Badge");
    expect(badgeElement).toBeInTheDocument();
  });
});
