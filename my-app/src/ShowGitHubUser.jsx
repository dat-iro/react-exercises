import { GitHubUser } from "./GitHubUser"
import { useParams } from "react-router-dom";

export function ShowGitHubUser() {
  const { username } = useParams()

  return (
    <GitHubUser username={username} />
  )
}
