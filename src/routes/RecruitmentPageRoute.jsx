import RecruitmentPage from "@pages/recruitment/Main";
import RecruitmentView from "@pages/recruitment/View";
import RecruitmentCompany from "@pages/recruitment/Company";

const RecruitmentRoutes = () => {
  const routes = [
    { path: "/recruitment/recruitment", element: <RecruitmentPage /> },
    { path: "/recruitment/view", element: <RecruitmentView /> },
    { path: "/recruitment/company", element: <RecruitmentCompany /> },
  ];

  return routes;
};

export default RecruitmentRoutes;
