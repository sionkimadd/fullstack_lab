import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";

interface RouterConfig {
    path: string;
    element: React.ReactElement;
}

const routes = [
    {
        path: "/",
        element: <Landing />,
    },
]

const renderRoute = (route: RouterConfig) => {
    return (
        <Route key={route.path} path={route.path} element={route.element} />
    );
};

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route) => renderRoute(route))}
            </Routes>
        </BrowserRouter>
    );
}