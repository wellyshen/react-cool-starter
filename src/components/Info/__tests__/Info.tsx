import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Info from "../index";

describe("<Info />", () => {
  it("renders", () => {
    const tree = render(
      <MemoryRouter>
        <Info
          item={{
            id: 1,
            name: "Welly",
            phone: "+886 0970...",
            email: "hivoid19@gmail.com",
            website: "https://wellyshen.com",
          }}
        />
      </MemoryRouter>
    ).container.firstChild;

    expect(tree).toMatchSnapshot();
  });
});
