import { usersAction, userAction } from "./actions";
import App from "./app";
import { asyncHome, asyncUserInfo, NotFound } from "./pages";

export default [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: asyncHome, // Add your route here
        loadData: (): Array<any> => [
          usersAction.fetchUsersIfNeeded(),
          // Add other pre-fetched actions here
        ],
      },
      {
        path: "/UserInfo/:id",
        component: asyncUserInfo,
        loadData: ({ params }: { params: { id: string } }): Array<any> => [
          userAction.fetchUserIfNeeded(params.id),
        ],
      },
      {
        component: NotFound,
      },
    ],
  },
];
