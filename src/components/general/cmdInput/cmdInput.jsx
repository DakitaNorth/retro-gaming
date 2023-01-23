import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./cmdInput.module.css";

const CmdInput = ({ isFocus }) => {

    const navigate = useNavigate();

    const location = useLocation();

    const [isRouteCorrect, setIsRouteCorrect] = useState(true);
    const [isHomeRoute, setIsHomeRoute] = useState(true);

    useEffect(() => {
        if (location.pathname !== "/") {
            setIsHomeRoute(false);
        }
        else {
            setIsHomeRoute(true);
        }
    }, []);

    const resizeInput = () => {
        let input = document.querySelector("." + styles.input);

        input.style.width = input.value.length + 1 + "ch";
    };

    const redirectRoute = e => {
        if (e.key === "Enter") {
            let input = document.querySelector("." + styles.input);

            switch (input.value) {
                case "tetris":
                    console.log(input.value);
                    navigate("/" + input.value);
                    break;
                case "ping-pong":
                    console.log(input.value);
                    navigate("/" + input.value);
                    break;
                case "space-invaders":
                    console.log(input.value);
                    navigate("/" + input.value);
                    break;
                case "home":
                    console.log(input.value);
                    navigate("/");
                    break;
                default:
                    setIsRouteCorrect(false);
                    break;
            }
        }
    };

    return (
        <div className={styles.wrapper}>
            {!isRouteCorrect ? (
                <div className={styles.error_wrapper}>
                    <span>// Некорректный путь</span>
                </div>
            ) : (
                null
            )}

            {isHomeRoute ? (
                null
            ) : (
                <div className={styles.about_wrapper}>
                    <span>// Введите home для шага назад</span>
                </div>
            )}

            <div className={styles.cmd_wrapper}>
                <span>Go to&gt;</span>
                <div className={styles.input_wrapper}>
                    <input className={styles.input} autoFocus={isFocus} maxLength="20" onChange={resizeInput} onKeyDown={redirectRoute} />
                </div>
            </div>
        </div>
    );
}

export default CmdInput;