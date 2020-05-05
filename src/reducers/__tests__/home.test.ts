import { USERS_REQUESTING, USERS_SUCCESS, USERS_FAILURE } from "../../types";
import home, { initialState } from "../home";

describe("users data home", () => {
  it("should handle initial state", () => {
    // @ts-ignore
    expect(home(undefined, {})).toEqual(initialState);
  });

  it("should handle USERS_REQUESTING correctly", () => {
    expect(
      home(undefined, {
        type: USERS_REQUESTING,
        err: null,
        data: [],
      })
    ).toEqual({
      readyStatus: "request",
      err: null,
      list: [],
    });
  });

  it("should handle USERS_FAILURE correctly", () => {
    const err = "Oops! Something went wrong.";
    expect(
      home(undefined, {
        type: USERS_FAILURE,
        err,
      })
    ).toEqual({
      ...initialState,
      readyStatus: "failure",
      err,
    });
  });

  it("should handle USERS_SUCCESS correctly", () => {
    const data = [{ id: "1", name: "Welly" }];
    expect(
      home(undefined, {
        type: USERS_SUCCESS,
        err: null,
        data,
      })
    ).toEqual({
      ...initialState,
      readyStatus: "success",
      list: data,
    });
  });
});
