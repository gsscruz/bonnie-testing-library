import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Options from "../Options";

describe("<Options />", () => {
  it("displays image for each scoop option from server", async () => {
    render(<Options optionType="scoops" />);
    //find images
    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    //confirm alt text of images
    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });

  it("display image for each topping option from server", async () => {
    //render component
    render(<Options optionType="toppings" />);
    //target the images
    const targetToppingImages = await screen.findAllByRole("img", {
      name: /topping$/i,
    });
    expect(targetToppingImages).toHaveLength(3);

    //target the alt text
    const targetAltTexts = targetToppingImages.map((image) => image.alt);
    expect(targetAltTexts).toEqual([
      "Cherries topping",
      "M&Ms topping",
      "Hot fudge topping",
    ]);
  });
});
