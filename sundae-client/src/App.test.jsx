import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import App from "./App";

describe("<App />", () => {
  it("Check if it's rendered properly", () => {
    render(<App />);
    const mainSentence = screen.getByText("heading", {
      name: /Vite React/i,
    });

    expect(mainSentence).toBeChecked();
  });
});
