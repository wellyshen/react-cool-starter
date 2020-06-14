import React, { useEffect, memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Helmet } from "react-helmet";

import { userAction } from "../../actions";
import { UserCard } from "../../components";
import { AppState } from "../../types";
import styles from "./styles.scss";

type Props = {
  match: Record<string, any>;
};

const UserInfo = ({ match }: Props): JSX.Element => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const userInfo = useSelector(
    (state: AppState) => state.userInfo,
    shallowEqual
  );

  useEffect(() => {
    dispatch(userAction.fetchUserIfNeeded(id));
  }, [id]);

  const renderUserCard = () => {
    const userInfoById = userInfo[id];

    if (!userInfoById || userInfoById.readyStatus === "request")
      return <p>Loading...</p>;

    if (userInfoById.readyStatus === "failure")
      return <p>Oops, Failed to load info!</p>;

    return <UserCard info={userInfoById.info} />;
  };

  return (
    <div className={styles.UserInfo}>
      <Helmet title="User Info" />
      {renderUserCard()}
    </div>
  );
};

export default memo(UserInfo);
