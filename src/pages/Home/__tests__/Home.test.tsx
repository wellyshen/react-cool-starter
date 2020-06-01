import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { usersAction } from "../../../actions";
import mockStore from "../../../utils/mockStore";
import Home from "../Home";

describe("<Home />", () => {
  const tree = (
    reducer: Record<string, unknown> = { readyStatus: "invalid" }
  ) => {
    const { dispatch, ProviderWithStore } = mockStore({ home: reducer });
    const { container } = render(
      <ProviderWithStore>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ProviderWithStore>
    );

    return { dispatch, firstChild: container.firstChild };
  };

  it("should fetch data when page loaded", () => {
    const { dispatch } = tree();

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].toString()).toBe(
      usersAction.fetchUsersIfNeeded().toString()
    );
  });

  it("renders the loading status if data invalid", () => {
    expect(tree().firstChild).toMatchSnapshot();
  });

  it("renders the loading status if requesting data", () => {
    const reducer = { readyStatus: "request" };

    expect(tree(reducer).firstChild).toMatchSnapshot();
  });

  it("renders an error if loading failed", () => {
    const reducer = { readyStatus: "failure" };

    expect(tree(reducer).firstChild).toMatchSnapshot();
  });

  it("renders the <UserList /> if loading was successful", () => {
    const reducer = {
      readyStatus: "success",
      list: [{ id: "1", name: "Welly" }],
    };

    expect(tree(reducer).firstChild).toMatchSnapshot();
  });
});
