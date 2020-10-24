import React, { useEffect, memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Helmet } from "react-helmet";

import { AppState } from "../../store";
import { fetchUserListIfNeed } from "../../store/userList";
import { List } from "../../components";
import styles from "./styles.module.scss";

const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const { readyStatus, items } = useSelector(
    ({ userList }: AppState) => userList,
    shallowEqual
  );

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
      HI
      <Helmet title="Home" />
      {renderList()}
    </div>
  );
};

export default memo(Home);
