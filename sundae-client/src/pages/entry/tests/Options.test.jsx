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
});
