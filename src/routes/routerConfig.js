import HomePage from "../containers/HomePage/HomePage";
import TetrisPage from "../containers/TetrisPage/TetrisPage";
import MinesweeperPage from "../containers/MinesweeperPage/MinesweeperPage";

const routesConfig = [
    {
        path: "*",
        element: <HomePage />
    },
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/tetris",
        element: <TetrisPage />
    },
    {
        path: "/minesweeper",
        element: <MinesweeperPage />
    }
];

export default routesConfig;