import SeminaList from "@pages/academy/Main";
import SeminaView from "@pages/academy/SeminaView";
import DailyList from "@pages/academy/DailyList";
import DailyWrite from "@pages/academy/DailyWrite";
import DailyView from "@pages/academy/DailyView";

const AcademyPageRoutes = () => {
    const routes = [
        { path: "/academy/semina", element: <SeminaList /> },
        { path: "/academy/semina_view", element: <SeminaView /> },
        { path: "/academy/daily", element: <DailyList /> },
        { path: "/academy/daily_write", element: <DailyWrite /> },
        { path: "/academy/daily_view", element: <DailyView /> },

    ]

    return routes;
}

export default AcademyPageRoutes;