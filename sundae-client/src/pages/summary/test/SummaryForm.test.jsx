import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

describe("<SummaryForm/>", () => {
  describe("Checkbox", () => {
    it("renders checkbox unchecked by default", () => {
      render(<SummaryForm />);

      const targetCheckboxThroughLabel = screen.queryByRole("checkbox", {
        name: /terms and conditions/i,
      });
      expect(targetCheckboxThroughLabel).not.toBeChecked();
    });
    it("enables button when checked", async () => {
      render(<SummaryForm />);
      const targetCheckboxThroughLabel = screen.queryByRole("checkbox", {
        name: /terms and conditions/i,
      });
      const targetButton = screen.queryByRole("checkbox", {
        name: /terms and conditions/i,
      });

      await userEvent.click(targetCheckboxThroughLabel);
      expect(targetCheckboxThroughLabel).toBeChecked();
      expect(targetButton).toBeEnabled();
    });
    it("disables button when unchecked", async () => {
      render(<SummaryForm />);
      const targetCheckboxThroughLabel = screen.queryByRole("checkbox", {
        name: /terms and conditions/i,
      });
      const targetButton = screen.queryByRole("button");

      expect(targetButton).toBeDisabled();
      await userEvent.click(targetCheckboxThroughLabel);
      await userEvent.click(targetCheckboxThroughLabel);
      expect(targetCheckboxThroughLabel).not.toBeChecked();
      expect(targetButton).toBeDisabled();
    });
    it("ensures popover is not on DOM by default ", () => {
      render(<SummaryForm />);

      const targetPopover = screen.queryByText(
        /no ice cream will actually be delivered/i
      );
      expect(targetPopover).not.toBeInTheDocument();
    });
    it("displays popover when terms are hovered", async () => {
      render(<SummaryForm />);
      const targetTermsAndConditions =
        screen.getByText(/terms and conditions/i);

      await userEvent.hover(targetTermsAndConditions);

      const targetPopover = screen.getByText(
        /no ice cream will actually be delivered/i
      );
      expect(targetPopover).toBeInTheDocument();
    });
  });
});
