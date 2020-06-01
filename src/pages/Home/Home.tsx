import React, { useEffect, memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Helmet } from "react-helmet";

import { usersAction } from "../../actions";
import { UserList } from "../../components";
import { AppState } from "../../types";
import styles from "./styles.scss";

const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const { readyStatus, list } = useSelector(
    ({ home }: AppState) => home,
    shallowEqual
  );

  useEffect(() => {
    dispatch(usersAction.fetchUsersIfNeeded());
  }, []);

  const renderUserList = () => {
    if (!readyStatus || readyStatus === "invalid" || readyStatus === "request")
      return <p>Loading...</p>;

    if (readyStatus === "failure") return <p>Oops, Failed to load list!</p>;

    return <UserList list={list} />;
  };

  return (
    <div className={styles.Home}>
      <Helmet title="Home" />
      {renderUserList()}
    </div>
  );
};

export default memo(Home);
