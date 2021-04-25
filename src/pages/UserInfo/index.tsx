import loadable from "@loadable/component";

import { Loading, ErrorBoundary } from "../../components";
import { Props, loadData } from "./UserInfo";

const UserInfo = loadable(() => import("./UserInfo"), {
  fallback: <Loading />,
});

export default (props: Props): JSX.Element => (
  <ErrorBoundary>
    <UserInfo {...props} />
  </ErrorBoundary>
);
export { loadData };
