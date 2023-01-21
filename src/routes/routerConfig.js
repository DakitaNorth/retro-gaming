import HomePage from "../containers/HomePage/HomePage";
import TetrisPage from "../containers/TetrisPage/TetrisPage";

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
        path: "/ping-pong",
        element: <HomePage />
    },
    {
        path: "/space-invaders",
        element: <HomePage />
    },
    {
        path: "/pc-off",
        element: <HomePage />
    }
];

export default routesConfig;