import axios from "axios";

import mockStore from "../../utils/mockStore";
import userList, {
  initialState,
  getRequesting,
  getSuccess,
  getFailure,
  fetchUserList,
} from "../userList";

jest.mock("axios");

const mockData = [
  {
    id: 1,
    name: "Welly",
    phone: "+886 0970...",
    email: "hivoid19@gmail.com",
    website: "https://wellyshen.com",
  },
];
const mockError = "Oops! Something went wrong.";

describe("userList reducer", () => {
  it("should handle initial state", () => {
    // @ts-expect-error
    expect(userList(undefined, {})).toEqual(initialState);
  });

  it("should handle requesting correctly", () => {
    expect(userList(undefined, { type: getRequesting.type })).toEqual({
      readyStatus: "request",
      items: [],
      error: null,
    });
  });

  it("should handle success correctly", () => {
    expect(
      userList(undefined, { type: getSuccess.type, payload: mockData })
    ).toEqual({ ...initialState, readyStatus: "success", items: mockData });
  });

  it("should handle failure correctly", () => {
    expect(
      userList(undefined, { type: getFailure.type, payload: mockError })
    ).toEqual({ ...initialState, readyStatus: "failure", error: mockError });
  });
});

describe("userList action", () => {
  it("fetches user list successful", async () => {
    const { dispatch, getActions } = mockStore();
    const expectedActions = [
      { type: getRequesting.type },
      { type: getSuccess.type, payload: mockData },
    ];

    // @ts-expect-error
    axios.get.mockResolvedValue({ data: mockData });

    await dispatch(fetchUserList());
    expect(getActions()).toEqual(expectedActions);
  });

  it("fetches user list failed", async () => {
    const { dispatch, getActions } = mockStore();
    const expectedActions = [
      { type: getRequesting.type },
      { type: getFailure.type, payload: mockError },
    ];

    // @ts-expect-error
    axios.get.mockRejectedValue({ message: mockError });

    await dispatch(fetchUserList());
    expect(getActions()).toEqual(expectedActions);
  });
});
