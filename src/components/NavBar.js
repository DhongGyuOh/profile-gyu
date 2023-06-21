import styles from "../styles/NavBar.module.css";
import List from "./List";
import Avatar from "./Avatar";

function NavBar() {
  return (
    <div className={styles.NavBar}>
      <div>
        <Avatar />
      </div>
      <div>
        <List />
      </div>
    </div>
  );
}

export default NavBar;
