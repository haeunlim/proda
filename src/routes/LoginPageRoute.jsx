import LoginPage from "@pages/login/Main"

const LoginPageRoutes = () => {
    const routes = [
        { path: "/login/login", element: <LoginPage /> },

    ]

    return routes;
}

export default LoginPageRoutes;