import styles from "./Layout.module.scss";

import Footer from "../../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.main}>{children}</div>
      <Footer />
    </>
  );
}
