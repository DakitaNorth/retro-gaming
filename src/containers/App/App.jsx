import { BrowserRouter } from "react-router-dom";

import PcPage from "../PcPage/PcPage";

import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <PcPage />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;