import axios from "axios";

import config from "../config";

export interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  website: string;
}

interface UserList {
  data?: User[];
  error?: Error;
}

interface UserData {
  data?: User;
  error?: Error;
}

export const getUserList = async (): Promise<UserList> => {
  try {
    const { data } = await axios.get(`${config.API_URL}/users`);
    return { data };
  } catch (error) {
    return { error };
  }
};

export const getUserData = async (id: string): Promise<UserData> => {
  try {
    const { data } = await axios.get(`${config.API_URL}/users/${id}`);
    return { data };
  } catch (error) {
    return { error };
  }
};
