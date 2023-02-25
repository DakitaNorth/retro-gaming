import { useEffect, useState } from "react";

import cn from "classnames";

import PageName from "../../components/general/pageName/pageName";

import CmdInput from "../../components/general/cmdInput/cmdInput.jsx";

import Game from "./logic/game.js";
import View from "./logic/view.js";
import Controller from "./logic/controller.js";

import styles from "./TetrisPage.module.css";

const TetrisPage = () => {

  const [startPauseGame, setStartPauseGame] = useState(new Image());
  const [controlFigure, setControlFigure] = useState(new Image());

  useEffect(() => {
    renderTetris();
  }, []);

  const renderTetris = () => {
    const tetris = document.querySelector("#tetris");

    const game = new Game();
    const view = new View(tetris, 400, 560, 20, 10);
    const controller = new Controller(game, view);

    setImgPath();
  };

  const setImgPath = () => {
    setStartPauseGame(startPauseGame.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARkSURBVHgB7VlLbBNHGP53Y5N1nk5LVTAHTNoqgUMJxKlUpPIwVaVySKS2h6K0NMQcitRUQq16qZpK0J6qqg8qtQechocFB0BKJEBCKDwO4UBecIAgIRIOJAiBSIgdb0i8y3yDZ5kNbAhW1pKRP2nlefwz+80/3/wzO1bIAbHe5iaV6H/KMowUbW98r63dqV6lHEPOEVbkzJH+5j9MU6lBWtO8wbLy4iBlGZPx5EA8MTXGyZnmwOe1bbvkeo+c4WRNcyPSaoFKhZqXso14PAkOgs8z9TknCU+st6lJZIpKCv2UHpUmeVdRFPJ4PeQWZqZnmDfN9HsXkVCqkUoFZX6Nte3tHpVUK3QVF/tsRGXCmlZIbiExk7IIF5do/AGm9Omgnnwkh9b23JOEUwW8ioenVYXcBPpX08sJnhbefh4cCUOzbspARlGRz0rrSZ2mmaadkN/p3EaesNt4dcIacLbjGg1eHrXyDV+t5b8d+/tsduGGlVS1eqmtDfIoF+g5P0SX2APUbVhBIfbE/u6mh2O6ra/3P6qkt1YtpowId3Vepc4D/VYeL0FE/m9Pl80usNxvERZt6rettREG2aftwryvQ4zwyK0xW1+vvenLjHAn8yJefOrG95zQv7u7aMeHUYqeifD6fewXnkJ5647jVLexkpNCG9hEmG1ofZDPSk+aLNpgwLyOtQUwsD3RT6z3vigOz/tEA28FghWO9RNjST5IEIBd/bY11Hmwnw8ktrebNrH2y1h5ablGu6Of8nQmcFx0JX6Ne3ZwYJR7DloL168kZ8I69VwY4l5Fu9CGSu7Z28MPqIvpuurdpby8lPXbwAaDNG83nuT947kurRcnOHo43LCKLp6+Sbs+i1llYkoXElikeADMzo//bJnTfk5JfPHtOuaNdGQ40Ee/fXeSfvj9SYdIw1sjzIONLessucT2XuRSQPl8AC3v/CnM04F5yMSR8MjQAxae7nAZgJhYUAKBoJ/Kyn20bHmFLRrAFmXEDlwiAoTWr6DrV0a5bCbGdd6XkFeA2YoFCGDRZUQYevz1mxNUx6IESMwGvFonvUiQq/9yDY8MHWxw6APY2RrmkWGwZZRLqjVyjALpaPOycCSMVd3NNBzZvI/n4Zk/jzZSJoAHMUCsB0QJpKvFRsPi9sdv37RsW37ZTB9seYdemnCp38f1K+90VTVPXvI109zssAQiKK9O21SvXmKzg2zETGFmkMYamb3TvUjHyuHeZut4/8aSCuubzrvIm7UDvAx542DfdHT3ztPFu7W2Tcmf1txGnrDbeHUO8Lg+wo0MgHsD+VN8oTE5mSTTEBeA5py2joTlCw3V5YkAWcMw5mWbi5IwtovMxHji50S8IIg0NhBxKQdP6/oUuQVZBom4zt41zdMqmQOM31+yre14e7gvclZcaBcxsq8vLqNs4/69h+wWPr1dm8q5raHoJrk+t6MEE/5laYH52dTUUJZhpIxh5tlhpJUCSMIOxy+e/P90C4ScI5xzeAwpwsNQHVlsPgAAAABJRU5ErkJggg==");
    setControlFigure(controlFigure.src = "data:image/png;base64,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");
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