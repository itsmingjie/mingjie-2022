import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.float_left}>
          <p className="text-hint-1">
            <i>December 2021, Rockville, Maryland</i>
          </p>
        </div>
        <div className={styles.float_right}>
          <p className="font-mono text-hint-1">0x04</p>
        </div>
      </div>
    </div>
  );
}
