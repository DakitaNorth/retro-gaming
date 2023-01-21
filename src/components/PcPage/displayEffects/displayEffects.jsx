import cn from "classnames";

import styles from "./displayEffects.module.css";

const DisplayEffects = () => {

    return (
        <div className={styles.pc__effect}>
            <div className={styles.pc__noise}></div>
            <div className={styles.pc__lines}></div>
            <div className={cn(styles.pc__glare_1, styles.pc__glare)}></div>
            <div className={cn(styles.pc__glare_2, styles.pc__glare)}></div>
            <div className={styles.pc__loading}>
                <div className={styles.pc__loading_lines}>
                </div>
            </div>
        </div>
    );
}

export default DisplayEffects;