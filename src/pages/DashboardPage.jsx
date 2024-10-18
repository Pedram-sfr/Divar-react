import AddPost from "components/templates/AddPost";
import PostList from "components/templates/PostList";

import styles from "./Dashboard.module.css";
import { useEffect } from "react";

function DashboardPage() {
  useEffect(() => {
    document.title = "دیوار من"
 }, []);
  return (
    <div className={styles.dashboard}>
      <div className={styles.post}>
        <AddPost />
      </div>
      <div className={styles.list}>
        <PostList />
      </div>
    </div>
  );
}

export default DashboardPage;
