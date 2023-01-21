import { Routes, Route } from "react-router-dom";

import routesConfig from "../../routes/routerConfig";

import Delayed from "../../services/delayed";

import Logotype from "../../components/PcPage/logotype/logotype";
import DisplayEffects from "../../components/PcPage/displayEffects/displayEffects";
import ControlPanel from "../../components/PcPage/controlPanel/controlPanel";

import styles from "./PcPage.module.css";

const PcPage = () => {
    return (
        <div className={styles.pc}>
            <Logotype />

            <div className={styles.pc__display}>
                <DisplayEffects />

                <Delayed>
                    <Routes>
                        {routesConfig.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.element}
                            />
                        ))}
                    </Routes>
                </Delayed>

            </div>

            <ControlPanel />
        </div>
    );
}

export default PcPage;