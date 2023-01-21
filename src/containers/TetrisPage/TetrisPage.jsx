import { useEffect } from "react";

import cn from "classnames";

import PageName from "../../components/general/pageName/pageName";

import CmdInput from "../../components/general/cmdInput/cmdInput.jsx";

import Game from "./logic/game.js";
import View from "./logic/view.js";
import Controller from "./logic/controller.js";

import startPauseGame from "./img/startPause.svg";
import rotateButton from "./img/rotate.svg";
import leftButton from "./img/left.svg";
import rightButton from "./img/right.svg";
import downButton from "./img/down.svg";

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
              <img src={startPauseGame} alt="Старт/Пауза" />
              <span>Старт/Пауза</span>
            </li>
            <li className={styles.controls__item}>
              <img src={rotateButton} alt="Перевернуть фигуру<" />
              <span>Перевернуть фигуру</span>
            </li>
            <li className={styles.controls__item}>
              <img src={leftButton} alt="Влево" />
              <span>Влево</span>
            </li>
            <li className={styles.controls__item}>
              <img src={rightButton} alt="Вправо" />
              <span>Вправо</span>
            </li>
            <li className={styles.controls__item}>
              <img src={downButton} alt="Вниз" />
              <span>Вниз</span>
            </li>
          </ul>
        </div>
        <div className={styles.aboutRouting}>
          <span>// Введите home для выхода</span>
        </div>
        <CmdInput />
      </div>
      <div className={cn(styles.col, styles.col_right)} id="tetris">
      </div>
    </div>
  );
}

export default TetrisPage;