import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import { describe, expect, it } from "vitest";
import { screen, render, waitFor } from "@testing-library/react";

describe("<OrderEntry>", () => {
  it("handles error for scoops and toppings routes", async () => {
    server.resetHandlers(
      rest.get("http://localhost:3030/scoops", (req, res, ctx) =>
        res(ctx.status(500))
      ),
      rest.get("http://localhost:3030/toppings", (req, res, ctx) =>
        res(ctx.status(500))
      )
    );

    render(<OrderEntry />);

    await waitFor(async () => {
      const alerts = await screen.findAllByRole("alert");
      expect(alerts).toHaveLength(2);
    });
  });
});
