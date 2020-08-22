import { AppThunk } from "../store";
import { fetchUserListIfNeed } from "../store/userList";
import { fetchUserDataIfNeed } from "../store/userData";
import App from "../app";
import { asyncHome, asyncUserInfo, NotFound } from "../pages";

export default [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: asyncHome, // Add your route here
        loadData: (): AppThunk[] => [
          fetchUserListIfNeed(),
          // Add other pre-fetched actions here
        ],
      },
      {
        path: "/UserInfo/:id",
        component: asyncUserInfo,
        loadData: ({ params }: { params: { id: string } }): AppThunk[] => [
          fetchUserDataIfNeed(params.id),
        ],
      },
      {
        component: NotFound,
      },
    ],
  },
];
