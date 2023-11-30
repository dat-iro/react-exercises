import { useEffect, useState } from "react";

export function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  cons [error, setError] = useState(null);

  useEffect(() => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
      })
    } catch (err) {
      setError(err)
    }
  }, [])

  return {
    location,
    error,
    onLocation: setLocation
  }
}