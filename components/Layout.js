import Nav from "./Nav";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div classnames={styles.container}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
