import { useEffect, useState } from "react";
import { useGitHubUser } from "./useGitHubUser";


export function GitHubUser({username}) {
  const {userData} = useGitHubUser({username: username})

  return (
    <div>
      <h3>Name: {(userData && userData.name) ? userData.name : "Nome non presente"}</h3>
      <h4>Login: {(userData && userData.login) ? userData.login : "Non presente!"}</h4>
      {(userData && userData.avatar_url) && <img src={userData.avatar_url} alt="user avatar" />}
    </div>
  )
}