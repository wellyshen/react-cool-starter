import { USER_REQUESTING, USER_SUCCESS, USER_FAILURE } from "../../types";
import userInfo from "../userInfo";

describe("user data userInfo", () => {
  it("should handle initial state correctly", () => {
    // @ts-ignore
    expect(userInfo(undefined, {})).toEqual({});
  });

  it("should handle USER_REQUESTING correctly", () => {
    expect(
      userInfo(undefined, {
        type: USER_REQUESTING,
        userId: "1",
      })
    ).toEqual({ 1: { readyStatus: "request" } });
  });

  it("should handle USER_FAILURE correctly", () => {
    const err = "Oops! Something went wrong.";
    expect(
      userInfo(undefined, {
        type: USER_FAILURE,
        userId: "1",
        err,
      })
    ).toEqual({
      1: {
        readyStatus: "failure",
        err,
      },
    });
  });

  it("should handle USER_SUCCESS correctly", () => {
    const data = {
      name: "Welly",
      phone: "007",
      email: "test@gmail.com",
      website: "www.test.com",
    };
    expect(
      userInfo(undefined, {
        type: USER_SUCCESS,
        userId: "1",
        data,
      })
    ).toEqual({
      1: {
        readyStatus: "success",
        info: data,
      },
    });
  });
});
