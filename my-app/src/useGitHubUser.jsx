import { useEffect, useState } from "react";

export function useGitHubUser({username}) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function fetchData() {
    setLoading(true)
    setError(null)

    fetch(`https://api.github.com/users/${username}`)
      .then((data) => {
        if (data.status !== 200) {
          setError(new Error)
          return null
        } else {
          return data.json()
        }
      })
      .then((data) => setUserData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => fetchData(), [username])

  return {
    userData,
    loading,
    error,
    onFetchData: fetchData
  }
}