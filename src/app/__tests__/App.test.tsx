import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import App from "../index";

describe("<App />", () => {
  it("renders", () => {
    const mockStore = {
      default: (): void => null,
      subscribe: (): void => null,
      dispatch: (): void => null,
      getState: () => ({ home: (): void => null })
    };
    const mockRoute = {
      routes: [
        {
          path: "/",
          exact: true,
          component: () => (
            <div>
              <h1>Welcome Home!</h1>
            </div>
          )
        }
      ]
    };

    const tree = renderer
      .create(
        // @ts-ignore
        <Provider store={mockStore}>
          <MemoryRouter>
            <App route={mockRoute} />
          </MemoryRouter>
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
