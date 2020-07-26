import React, { useEffect, memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Helmet } from "react-helmet";

import { AppState } from "../../store";
import { fetchUserDataIfNeed } from "../../store/userData";
import { Info } from "../../components";
import styles from "./styles.scss";

type Props = {
  match: Record<string, any>;
};

const UserInfo = ({ match }: Props): JSX.Element => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const userData = useSelector(
    (state: AppState) => state.userData,
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchUserDataIfNeed(id));
  }, [id]);

  const renderInfo = () => {
    const userInfo = userData[id];

    if (!userInfo || userInfo.readyStatus === "request")
      return <p>Loading...</p>;

    if (userInfo.readyStatus === "failure")
      return <p>Oops! Failed to load data.</p>;

    return <Info item={userInfo.item} />;
  };

  return (
    <div className={styles.UserInfo}>
      <Helmet title="User Info" />
      {renderInfo()}
    </div>
  );
};

export default memo(UserInfo);
