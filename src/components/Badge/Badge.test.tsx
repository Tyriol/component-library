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
});
