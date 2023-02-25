import { useEffect } from "react";

import cn from "classnames";

import PageName from "../../components/general/pageName/pageName";

import CmdInput from "../../components/general/cmdInput/cmdInput.jsx";

import Game from "./logic/game.js";
import View from "./logic/view.js";
import Controller from "./logic/controller.js";

import startPauseGame from "./img/startPause.png";
import controlFigure from "./img/controls.png";

import styles from "./TetrisPage.module.css";

const TetrisPage = () => {

  useEffect(() => {
    renderTetris();
  }, []);

  const renderTetris = () => {
    const tetris = document.querySelector("#tetris");

    const game = new Game();
    const view = new View(tetris, 400, 560, 20, 10);
    const controller = new Controller(game, view);
  };

  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.col, styles.col_left)}>
        <PageName />
        <div className={styles.controls}>
          <span className={styles.controls__header}>Управление:</span>
          <ul className={styles.controls__list}>
            <li className={styles.controls__item}>
              <img className={styles.controls__start_pause} src={startPauseGame} alt="Старт/Пауза" />
              <span>Старт/Пауза</span>
            </li>
            <li className={styles.controls__item}>
              <img className={styles.controls__figure} src={controlFigure} alt="Управление фигурой " />
              <span>Управление фигурой</span>
            </li>
          </ul>
        </div>
        <CmdInput isFocus={false} />
      </div>
      <div className={cn(styles.col, styles.col_right)} id="tetris">
      </div>
    </div>
  );
}

export default TetrisPage;