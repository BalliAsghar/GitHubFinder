import axios from "../../_snowpack/pkg/axios.js";
import React, {useEffect, useState} from "../../_snowpack/pkg/react.js";
const Repos = ({username}) => {
  const [repos, setRepos] = useState();
  const [loading, setLoading] = useState(true);
  const API_URL = "https://api.github.com/users";
  const url = `${API_URL}/${username}/repos?sort=stars&per_page=4`;
  useEffect(() => {
    const fetchRepos = async () => {
      const response = await axios.get(url);
      setRepos(response.data);
      setLoading(false);
    };
    fetchRepos();
  }, []);
  if (loading) {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Loading..."));
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid-flow-row shadow-2xl stats ml-14"
  }, repos.map((repo) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "stat",
      key: repo.id
    }, /* @__PURE__ */ React.createElement("a", {
      className: "stat-value text-xl underline hover:text-blue-600",
      target: "_blank",
      href: repo.html_url
    }, repo.name), /* @__PURE__ */ React.createElement("div", {
      class: "stat-desc break-all	"
    }, repo.description));
  }));
};
export default Repos;
