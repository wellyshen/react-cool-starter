import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import NotFound from "../index";

describe("<NotFound />", () => {
  it("renders", () => {
    const tree = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    ).container.firstChild;

    expect(tree).toMatchSnapshot();
  });
});
