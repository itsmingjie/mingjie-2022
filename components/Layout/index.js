import styles from "./Layout.module.scss";

import Footer from "../../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        {children}
      </div>
    </>
  );
}
