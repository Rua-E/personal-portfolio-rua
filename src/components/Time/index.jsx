// 

import { useState, useEffect } from "react"
import ScrambleText from "../ScrambleText"

export default function Time() {
  const myTimeZone = "America/New_York" // Home time (Maryland)
  const usersTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  const [myFormattedTime, setMyFormattedTime] = useState("")
  const [userFormattedTime, setUserFormattedTime] = useState("")

  // ✅ Extract readable city name from user's timezone (handles underscores like "New_York")
  const getCityFromTimeZone = (tz) => {
    const parts = tz.split("/")
    return parts.length > 1 ? parts[1].replace(/_/g, " ") : tz
  }

  const userCityName = getCityFromTimeZone(usersTimeZone)

  const getFormattedTime = (timeZone) => {
    const options = {
      timeZone: timeZone,
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }
    return new Intl.DateTimeFormat("en-US", options).format(new Date())
  }

  const updateClocks = () => {
    setMyFormattedTime(getFormattedTime(myTimeZone))
    setUserFormattedTime(getFormattedTime(usersTimeZone))
  }

  useEffect(() => {
    updateClocks()
    const intervalId = setInterval(updateClocks, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <ScrambleText shuffle delay={4.2}>
        Maryland
      </ScrambleText>{" "}
      {myFormattedTime}
      <span className="header--hash">{" // "}</span>{" "}
        <span 
        // className="flex items-center whitespace-nowrap gap-1"
        style={{ display: "inline-flex", whiteSpace: "nowrap", minWidth: "max-content", gap: "10px" }}
        >
      <ScrambleText shuffle delay={4.2}>
        {userCityName}
      </ScrambleText>{" "}
      {userFormattedTime}
        </span>
    </>
  )
}
