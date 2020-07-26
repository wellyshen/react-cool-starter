import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { fetchUserListIfNeed } from "../../../store/userList";
import mockStore from "../../../utils/mockStore";
import Home from "../Home";

describe("<Home />", () => {
  const renderHelper = (reducer = { readyStatus: "invalid" }) => {
    const { dispatch, ProviderWithStore } = mockStore({ userList: reducer });
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
    const { dispatch } = renderHelper();

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].toString()).toBe(
      fetchUserListIfNeed().toString()
    );
  });

  it("renders the loading status if data invalid", () => {
    expect(renderHelper().firstChild).toMatchSnapshot();
  });

  it("renders the loading status if requesting data", () => {
    const reducer = { readyStatus: "request" };

    expect(renderHelper(reducer).firstChild).toMatchSnapshot();
  });

  it("renders an error if loading failed", () => {
    const reducer = { readyStatus: "failure" };

    expect(renderHelper(reducer).firstChild).toMatchSnapshot();
  });

  it("renders the <List /> if loading was successful", () => {
    const reducer = {
      readyStatus: "success",
      items: [
        {
          id: 1,
          name: "Welly",
          phone: "+886 0970...",
          email: "hivoid19@gmail.com",
          website: "https://wellyshen.com",
        },
      ],
    };

    expect(renderHelper(reducer).firstChild).toMatchSnapshot();
  });
});
