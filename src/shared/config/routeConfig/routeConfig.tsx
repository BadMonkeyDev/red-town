import { RouteProps } from 'react-router-dom';
import MainPage from 'pages/MainPage/ui/MainPage';
import { AboutPage } from 'pages/AboutPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
};
