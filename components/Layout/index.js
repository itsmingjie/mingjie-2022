import styles from "./Layout.module.scss";

import Footer from "../../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="h-full flex flex-col items-center justify-center">
        <div className="max-w-[640px] bg-gradient-to-br from-pink/10 to-pink/5 shadow-lg shadow-pink/20 hover:shadow-pink/30 hover:shadow-md ease-in-out duration-200 p-5 rounded-lg">
          {children}
        </div>
      </div>
    </>
  );
}
