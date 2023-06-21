import styles from "../styles/List.module.css";
function List() {
  return (
    <div className={styles.List}>
      <ul>
        Company
        <li>About Company</li>
        <li>CI</li>
        <li>Ethics</li>
        <li>IR</li>
        <li>Brochure</li>
      </ul>
      <ul>
        Bisiness
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
      </ul>
      <ul>
        careers
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
      </ul>
    </div>
  );
}
export default List;
