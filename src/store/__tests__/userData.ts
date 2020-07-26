import axios from "axios";

import mockStore from "../../utils/mockStore";
import userData, {
  getRequesting,
  getSuccess,
  getFailure,
  fetchUserData,
} from "../userData";

jest.mock("axios");

const mockData = {
  id: 1,
  name: "Welly",
  phone: "+886 0970...",
  email: "hivoid19@gmail.com",
  website: "https://wellyshen.com",
};
const { id } = mockData;
const mockError = "Oops! Something went wrong.";

describe("userData reducer", () => {
  it("should handle initial state correctly", () => {
    // @ts-ignore
    expect(userData(undefined, {})).toEqual({});
  });

  it("should handle requesting correctly", () => {
    expect(
      userData(undefined, { type: getRequesting.type, payload: id })
    ).toEqual({ [id]: { readyStatus: "request" } });
  });

  it("should handle success correctly", () => {
    expect(
      userData(undefined, {
        type: getSuccess.type,
        payload: { id, item: mockData },
      })
    ).toEqual({
      [id]: { readyStatus: "success", item: mockData },
    });
  });

  it("should handle failure correctly", () => {
    expect(
      userData(undefined, {
        type: getFailure.type,
        payload: { id, error: mockError },
      })
    ).toEqual({
      [id]: { readyStatus: "failure", error: mockError },
    });
  });
});

describe("userData action", () => {
  const strId = id.toString();

  it("fetches user data successful", async () => {
    const { dispatch, getActions } = mockStore();
    const expectedActions = [
      { type: getRequesting.type, payload: strId },
      { type: getSuccess.type, payload: { id: strId, item: mockData } },
    ];

    // @ts-ignore
    axios.get.mockResolvedValue({ data: mockData });

    await dispatch(fetchUserData(strId));
    expect(getActions()).toEqual(expectedActions);
  });

  it("fetches user data failed", async () => {
    const { dispatch, getActions } = mockStore();
    const expectedActions = [
      { type: getRequesting.type, payload: strId },
      { type: getFailure.type, payload: { id: strId, error: mockError } },
    ];

    // @ts-ignore
    axios.get.mockRejectedValue({ message: mockError });

    await dispatch(fetchUserData(strId));
    expect(getActions()).toEqual(expectedActions);
  });
});
