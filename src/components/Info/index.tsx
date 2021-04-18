import { memo } from "react";

import { User } from "../../services/jsonPlaceholder";
import styles from "./styles.module.scss";

interface Props {
  item: User;
}

export default memo(({ item }: Props) => (
  <div className={styles.UserCard}>
    <h4>User Info</h4>
    <ul>
      <li>Name: {item.name}</li>
      <li>Phone: {item.phone}</li>
      <li>Email: {item.email}</li>
      <li>Website: {item.website}</li>
    </ul>
  </div>
));
