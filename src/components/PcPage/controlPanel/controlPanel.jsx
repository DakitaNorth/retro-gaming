import { NavLink } from "react-router-dom";

import cn from "classnames";

import musicOffImg from "./img/musicOff.svg";
import musicOnImg from "./img/musicOn.svg";

import pcOffImg from "./img/pcOff.svg";
import pcOnImg from "./img/pcOn.svg";

import bgMusic from "./files/bg-music.mp3";

import styles from "./controlPanel.module.css";

const ControlPanel = () => {

    const toggleMusicStatus = () => {
        let audio = document.querySelector("audio");

        if (audio.classList.contains("stop")) {
            audio.play();
            audio.classList.remove("stop");
        }
        else {
            audio.pause();
            audio.classList.add("stop");
        }

        toggleMusicIcon();
    };

    const toggleMusicIcon = () => {
        let soundImg = document.querySelector("." + styles.music_button);
        console.log(soundImg.getAttribute("src"));

        if (soundImg.getAttribute("src") === musicOffImg) {
            soundImg.setAttribute("src", musicOnImg);
        }
        else {
            soundImg.setAttribute("src", musicOffImg);
        }
    };

    return (
        <div className={styles.buttons}>
            <NavLink className={styles.buttons__pc_status} to="/">
                <img src={pcOnImg} alt="on-off button of pc" />
            </NavLink>
            {/* <button className={styles.buttons__sound_status} type="button" onClick={toggleMusicStatus}>
                <img className={styles.music_button} src={soundOffImg} alt="on-off sound" />
            </button> */}
            <button className={styles.buttons__sound_status} type="button" onClick={toggleMusicStatus}>
                <img className={styles.music_button} src={musicOffImg} alt="on-off sound" />
            </button>
            <audio className="audio stop" src={bgMusic} loop></audio>
        </div>
    );
}

export default ControlPanel;