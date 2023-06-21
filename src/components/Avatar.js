import styles from "../styles/Avatar.module.css";
function Avatar() {
  return (
    <div className={styles.Avatar}>
      <div className={styles.Avatar__circle}></div>
      <img
        className={styles.Avatar__img}
        src="https://its-new.co.kr/_resource/images/main/contents/sub_main_logo1.svg"
      />

      <div className={styles.Avatar_info}>
        <span className={styles.Avatar_info__name}>NEW</span>
        <span className={styles.Avatar_info__age}>10</span>
      </div>
    </div>
  );
}

export default Avatar;
