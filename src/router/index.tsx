import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Employees from "../pages/Employees";
import Organization from "../pages/Organization";

interface RouterConfig {
    path: string;
    element: React.ReactElement;
}

const routes = [
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/employees",
        element: <Employees />,
    },
    {
        path: "/organization",
        element: <Organization />,
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