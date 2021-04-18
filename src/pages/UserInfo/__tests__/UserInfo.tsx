import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { fetchUserDataIfNeed } from "../../../store/userData";
import mockStore from "../../../utils/mockStore";
import UserInfo from "../UserInfo";

describe("<UserInfo />", () => {
  const mockData = {
    id: 1,
    name: "Welly",
    phone: "+886 0970...",
    email: "hivoid19@gmail.com",
    website: "https://wellyshen.com",
  };
  const { id } = mockData;

  const renderHelper = (reducer = {}) => {
    const { dispatch, ProviderWithStore } = mockStore({ userData: reducer });
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
    const { dispatch } = renderHelper();

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].toString()).toBe(
      fetchUserDataIfNeed(id.toString()).toString()
    );
  });

  it("renders the loading status if data invalid", () => {
    expect(renderHelper().firstChild).toMatchSnapshot();
  });

  it("renders the loading status if requesting data", () => {
    const reducer = { [id]: { readyStatus: "request" } };

    expect(renderHelper(reducer).firstChild).toMatchSnapshot();
  });

  it("renders an error if loading failed", () => {
    const reducer = { [id]: { readyStatus: "failure" } };

    expect(renderHelper(reducer).firstChild).toMatchSnapshot();
  });

  it("renders the <Info /> if loading was successful", () => {
    const reducer = { [id]: { readyStatus: "success", item: mockData } };

    expect(renderHelper(reducer).firstChild).toMatchSnapshot();
  });
});
