import { useEffect, useState } from "react";


export function GitHubUser({username}) {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((user) => setUserData(user))
      .catch((error) => console.log(error))
  }, [username])

  return (
    <div>
      <h3>Name: {(userData && userData.name) ? userData.name : "Nome non presente"}</h3>
      <h4>Login: {(userData && userData.login) ? userData.login : "Non presente!"}</h4>
      {(userData && userData.avatar_url) && <img src={userData.avatar_url} alt="user avatar" />}
    </div>
  )
}