import { useEffect } from "react";

import cn from "classnames";

import PageName from "../../components/general/pageName/pageName";

import CmdInput from "../../components/general/cmdInput/cmdInput.jsx";

import Matrix from "./logic/matrix.js";
import View from "./logic/view.js";
import Controller from "./logic/controller.js";

import startPauseGame from "./img/startPause.png";
import openElement from "./img/lkm.png";
import flagElement from "./img/pkm.png";

import styles from "./MinesweeperPage.module.css";

const MinesweeperPage = () => {

  useEffect(() => {
    renderMinesweeper();
  }, []);

  const renderMinesweeper = () => {
    const minesweeper = document.querySelector("#minesweeper");

    const matrix = new Matrix(9, 9, 10);
    const view = new View(minesweeper, 40, 380, 560);
    const controller = new Controller(matrix, view);
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
              <img className={styles.controls__open} src={openElement} alt="Управление фигурой " />
              <span>Открыть ячейку</span>
            </li>
            <li className={styles.controls__item}>
              <img className={styles.controls__set_flag} src={flagElement} alt="Управление фигурой " />
              <span>Поставить флаг</span>
            </li>
          </ul>
        </div>
        <CmdInput isFocus={false} />
      </div>
      <div className={cn(styles.col, styles.col_right)} id="minesweeper">
      </div>
    </div>
  );
}

export default MinesweeperPage;