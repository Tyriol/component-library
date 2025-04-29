import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("The banner display", () => {
  it("shows up on screen", () => {
    render(<Banner />);
    const bannerElement = screen.getByText("Banner!!");
    expect(bannerElement).toBeInTheDocument();
  });
});
