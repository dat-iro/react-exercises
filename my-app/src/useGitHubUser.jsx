import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json())

export function useGitHubUser({ username }) {
  const { data, error, mutate } = useSWR(`https://api.github.com/users/${username}`, fetcher);

  return {
    userData: data,
    loading: !data && !error,
    error,
    onFetchData: mutate,
  }
}