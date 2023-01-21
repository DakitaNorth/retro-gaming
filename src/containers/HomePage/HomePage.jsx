import cn from "classnames";

import PageName from "../../components/general/pageName/pageName";

import GamesList from "../../components/HomePage/gamesList/gamesList";
import CmdInput from "../../components/general/cmdInput/cmdInput";
import LogotypeCol from "../../components/HomePage/logotypeCol/logotypeCol";

import styles from "./HomePage.module.css";

const HomePage = () => {

  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.col, styles.col_left)}>
        <PageName />
        <div className={styles.text}>
          <p>Hi %UserName%</p>
          <p>DakitaNorth благодарит тебя за посещение данного проекта</p>
          <p>Данный проект представляет из себя небольшой сборник ретро-игр написанных на базе React</p>
        </div>
        <GamesList />
        <CmdInput isFocus={true} />
      </div>
      <div className={cn(styles.col, styles.col_right)}>
        <LogotypeCol />
      </div>
    </div>
  );
}

export default HomePage;