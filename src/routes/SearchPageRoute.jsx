import SearchListPage from "@pages/search/Main";
import SearchViewPage from "@pages/search/View";

const SearchPageRoute = () => {
  const routes = [
    { path: "/search/search_list", element: <SearchListPage /> },
    { path: "/search/view_resume", element: <SearchViewPage /> },
  ];

  return routes;
};

export default SearchPageRoute;
