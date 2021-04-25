import { useEffect, memo } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Helmet } from "react-helmet";

import { AppState, AppThunk } from "../../store";
import { User } from "../../services/jsonPlaceholder";
import { fetchUserDataIfNeed } from "../../store/userData";
import { Info } from "../../components";
import styles from "./styles.module.scss";

export type Props = RouteComponentProps<{ id: string }>;

const UserInfo = ({ match }: Props): JSX.Element => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const userData = useSelector(
    (state: AppState) => state.userData,
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchUserDataIfNeed(id));
  }, [dispatch, id]);

  const renderInfo = () => {
    const userInfo = userData[id];

    if (!userInfo || userInfo.readyStatus === "request")
      return <p>Loading...</p>;

    if (userInfo.readyStatus === "failure")
      return <p>Oops! Failed to load data.</p>;

    return <Info item={userInfo.item as User} />;
  };

  return (
    <div className={styles.UserInfo}>
      <Helmet title="User Info" />
      {renderInfo()}
    </div>
  );
};

interface LoadDataArgs {
  params: { id: string };
}

export const loadData = ({ params }: LoadDataArgs): AppThunk[] => [
  fetchUserDataIfNeed(params.id),
];

export default memo(UserInfo);
