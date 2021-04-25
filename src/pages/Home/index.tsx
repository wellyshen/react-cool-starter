import loadable from "@loadable/component";

import { Loading, ErrorBoundary } from "../../components";
import { loadData } from "./Home";

const Home = loadable(() => import("./Home"), {
  fallback: <Loading />,
});

export default (): JSX.Element => (
  <ErrorBoundary>
    <Home />
  </ErrorBoundary>
);
export { loadData };
