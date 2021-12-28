import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.float_left}>
          <p>
            <i>December 2021, Rockville, Maryland</i>
          </p>
        </div>
        <div className={styles.float_right}>
          <p style={{ fontFamily: "monospace" }}>0x04</p>
        </div>
      </div>
    </div>
  );
}
