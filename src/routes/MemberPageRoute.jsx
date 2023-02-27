import MemberPage from "@pages/member/Main"

const MemberPageRoutes = () => {
    const routes = [
        { path: "/member/member", element: <MemberPage /> },

    ]

    return routes;
}

export default MemberPageRoutes;