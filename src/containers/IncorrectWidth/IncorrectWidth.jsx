
import sadFrog from "./video/sadFrog.mp4";

import styles from "./IncorrectWidth.module.css";

const IncorrectWidth = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <video autoPlay="autoplay" loop="loop" muted="muted">
                    <source
                        src={sadFrog}
                        type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                    />
                </video>
                <p>К сожалению, проект не может быть отображен на экране размером меньше 1280 пикселей, равно как и на мобильных устройствах</p>
            </div>
        </div>
    );
}

export default IncorrectWidth;