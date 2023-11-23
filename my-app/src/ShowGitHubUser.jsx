import { GitHubUser } from "./GitHubUser"

export function ShowGitHubUser() {
  const { username } = useParams()

  return (
    <GitHubUser username={username} />
  )
}