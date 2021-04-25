import { useEffect, memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Helmet } from "react-helmet";

import { AppState, AppThunk } from "../../store";
import { fetchUserListIfNeed } from "../../store/userList";
import { List } from "../../components";
import styles from "./styles.module.scss";

const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const { readyStatus, items } = useSelector(
    ({ userList }: AppState) => userList,
    shallowEqual
  );

  // Fetch client-side data here
  useEffect(() => {
    dispatch(fetchUserListIfNeed());
  }, [dispatch]);

  const renderList = () => {
    if (!readyStatus || readyStatus === "invalid" || readyStatus === "request")
      return <p>Loading...</p>;

    if (readyStatus === "failure") return <p>Oops, Failed to load list!</p>;

    return <List items={items} />;
  };

  return (
    <div className={styles.Home}>
      <Helmet title="Home" />
      {renderList()}
    </div>
  );
};

// Fetch server-side data here
export const loadData = (): AppThunk[] => [
  fetchUserListIfNeed(),
  // More pre-fetched actions...
];

export default memo(Home);
