
import logotypeImg from "./img/logotype.svg";

import styles from "./logotype.module.css";

const Logotype = () => {
  return (
    <div className={styles.logotype}> 
        <img src={logotypeImg} alt="Logotype of Retro-Gaming Project" />
    </div>
  );
}

export default Logotype;