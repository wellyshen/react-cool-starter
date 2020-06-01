import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { userAction } from "../../../actions";
import mockStore from "../../../utils/mockStore";
import UserInfo from "../UserInfo";

describe("<UserInfo />", () => {
  const id = "1";
  const tree = (reducer: Record<string, unknown> = {}) => {
    const { dispatch, ProviderWithStore } = mockStore({ userInfo: reducer });
    const { container } = render(
      <ProviderWithStore>
        <MemoryRouter>
          <UserInfo match={{ params: { id } }} />
        </MemoryRouter>
      </ProviderWithStore>
    );

    return { dispatch, firstChild: container.firstChild };
  };

  it("should fetch data when page loaded", () => {
    const { dispatch } = tree();

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].toString()).toBe(
      userAction.fetchUserIfNeeded(id).toString()
    );
  });

  it("renders the loading status if data invalid", () => {
    expect(tree().firstChild).toMatchSnapshot();
  });

  it("renders the loading status if requesting data", () => {
    const reducer = { 1: { readyStatus: "request" } };

    expect(tree(reducer).firstChild).toMatchSnapshot();
  });

  it("renders an error if loading failed", () => {
    const reducer = { 1: { readyStatus: "failure" } };

    expect(tree(reducer).firstChild).toMatchSnapshot();
  });

  it("renders the <UserCard /> if loading was successful", () => {
    const reducer = {
      1: {
        readyStatus: "success",
        info: {
          name: "Welly",
          phone: "007",
          email: "test@gmail.com",
          website: "www.test.com",
        },
      },
    };

    expect(tree(reducer).firstChild).toMatchSnapshot();
  });
});
