import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json())

export function useGitHubUser({ username }) {
  if(!username) {
    return {
      userData: null,
      loading: false,
      error: new Error(),
      onFetchData: () => {},
    };
  }

  const { data, error } = useSWR("https://api.github.com/users", fetcher)

  return {
    userData: data,
    loading: !data && !error,
    error,
    onFetchData: mutate,
  };
}