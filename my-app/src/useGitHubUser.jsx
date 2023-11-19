import { useEffect, useState } from "react";

export function useGitHubUser({username}) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((data) => data.json())
      .then((data) => setUserData(data))
      .catch((error) => console.log(error))
  }, [username])

  return {userData}
}