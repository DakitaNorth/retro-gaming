import styles from "./gamesList.module.css";

const GamesList = () => {

    const gamesList = [
        {
            id: 0,
            name: "Tetris"
        },
        {
            id: 1,
            name: "Ping-pong"
        },
        {
            id: 2,
            name: "Space-Invaders"
        },
    ];


    const gamesStandart = gamesList.map(({ id, name }) => {
        return (
            <li key={id} className={styles.games_list__item}>
                <span className={styles.game__name}>&gt; {name}</span>
            </li>
        )
    });

    return (
        <div className={styles.wrapper}>
            <p className={styles.choose_text}>Введи одну из них, чтобы продолжить:</p>
            <ul className={styles.games_list}>
                {gamesStandart}
            </ul>
        </div>
    );
}

export default GamesList;