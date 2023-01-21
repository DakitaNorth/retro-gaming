import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

import styles from "./pageName.module.css";

const PageName = () => {

    const location = useLocation();

    const [pathName, setPathName] = useState();

    useEffect(() => {
        let path = "";

        if(location.pathname !== "/") {
            path = location.pathname.replace("/", " ");
        }
        else {
            path = "home";
        }

        setPathName(path);
    }, []);

    return (
        <div className={styles.wrapper}>
            <span>&gt; {pathName}</span>
        </div>
    );
}

export default PageName;