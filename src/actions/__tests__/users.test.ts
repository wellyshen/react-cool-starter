import axios from "axios";

import mockStore from "../../utils/mockStore";
import { initialState } from "../../reducers/home";
import { fetchUsers } from "../users";

jest.mock("axios");

describe("users action", () => {
  it("creates USERS_SUCCESS when fetching users has been done", async () => {
    const { dispatch, getActions } = mockStore({ users: initialState });
    const data = [{ id: "test", name: "Welly" }];
    const expectedActions = [
      { type: "USERS_REQUESTING" },
      { type: "USERS_SUCCESS", data },
    ];

    // @ts-ignore
    axios.get.mockResolvedValue({ data });

    // @ts-ignore
    await dispatch(fetchUsers());
    expect(getActions()).toEqual(expectedActions);
  });

  it("creates USERS_FAILURE when fail to fetch users", async () => {
    const { dispatch, getActions } = mockStore({ users: initialState });
    const errorMessage = "Request failed with status code 404";
    const expectedActions = [
      { type: "USERS_REQUESTING" },
      { type: "USERS_FAILURE", err: errorMessage },
    ];

    // @ts-ignore
    axios.get.mockRejectedValue({ message: errorMessage });

    // @ts-ignore
    await dispatch(fetchUsers());
    expect(getActions()).toEqual(expectedActions);
  });
});
