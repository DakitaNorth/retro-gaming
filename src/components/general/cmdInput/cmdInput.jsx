import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./cmdInput.module.css";

const CmdInput = () => {

    const navigate = useNavigate();

    const [isRouteCorrect, setIsRouteCorrect] = useState();

    const resizeInput = () => {
        let input = document.querySelector("." + styles.input);

        input.style.width = input.value.length + 1 + "ch";
    };

    const errorRouteHandler = () => {

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
                    setIsRouteCorrect();
                    break;
            }
        }
    }; 

    return (
        <div className={styles.wrapper}>
            <span>Go to&gt;</span>
            <div className={styles.input_wrapper}>
                <input className={styles.input} autoFocus="autofocus" maxLength="20" onChange={resizeInput} onKeyDown={redirectRoute} />
            </div>
        </div>
    );
}

export default CmdInput;