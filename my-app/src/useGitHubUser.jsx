import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json())

export function useGitHubUser() {
  const { data, error } = useSWR("https://api.github.com/users", fetcher)

  return (
    <ul>
      {!data && !error && <div>Loading...</div>}
      {error && <div>An error has occurred</div>}
      {data.map((user) => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  )
}