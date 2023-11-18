import { useContext, useEffect, useState } from "react";

export function Clock() {
  const [date, setDate] = useState(new Date());
  const language = useContext(LanguageContext);

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000)

    return () => clearInterval(intervalId)
  }, [])

  const getCurrentTime = () => {
    return language === "english" ? "Current time:" : "Orario attuale:"
  };

  return (
    <div>
      <h1>{getCurrentTime()}</h1>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  )
}