import { useEffect, useState } from "react";

import PcPage from "../PcPage/PcPage";

import IncorrectWidth from "../IncorrectWidth/IncorrectWidth";

import styles from "./App.module.css";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const breakpoint = 1280;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (width >= breakpoint) {
    return (
      <div className={styles.wrapper}>
        <PcPage />
      </div>
    );
  }
  return (
    <IncorrectWidth />
  );
}

export default App;