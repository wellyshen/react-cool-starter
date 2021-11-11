import { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ErrorBoundary from "..";

describe("<ErrorBoundary />", () => {
  const tree = (children?: ReactNode) =>
    render(
      <MemoryRouter>
        <ErrorBoundary>{children}</ErrorBoundary>
      </MemoryRouter>
    ).container.firstChild;

  it("renders nothing if no children", () => {
    expect(tree()).toMatchSnapshot();
  });

  it("renders children if no error", () => {
    expect(
      tree(
        <div>
          <h1>I am Welly</h1>
        </div>
      )
    ).toMatchSnapshot();
  });

  it("renders error view if an error occurs", () => {
    console.error = jest.fn();

    tree(<div>{new Error()}</div>);

    expect(screen.getByTestId("error-view")).toBeInTheDocument();
  });
});
