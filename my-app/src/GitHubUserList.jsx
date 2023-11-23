import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GitHubUserList() {
  const [usersData, setUsersData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((data) => data.json())
      .then((data) => setUsersData(data))
      .catch((err) => console.log(err))
  }, []);

  return (
    <>
      <ul>
        {usersData && usersData.map((el, key) => (<li key={key}><Link to={el.login}>{el.login}</Link></li>))}
      </ul>
      <Outlet />
    </>
  );
}