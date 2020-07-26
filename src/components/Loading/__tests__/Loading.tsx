import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Loading from "../index";

describe("<Loading />", () => {
  it("renders", () => {
    const tree = render(
      <MemoryRouter>
        <Loading />
      </MemoryRouter>
    ).container.firstChild;

    expect(tree).toMatchSnapshot();
  });
});
