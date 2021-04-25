import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import NotFound from "../index";

describe("<NotFound />", () => {
  it("renders", () => {
    const tree = render(
      <MemoryRouter>
        {/* 
          @ts-expect-error */}
        <NotFound />
      </MemoryRouter>
    ).container.firstChild;

    expect(tree).toMatchSnapshot();
  });
});
