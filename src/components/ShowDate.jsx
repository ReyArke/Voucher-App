import React from 'react'

const ShowDate = ({timestamp,}) => {
  const data = new Date(timestamp);

  const currentDate = data.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  const currentTime = data.toLocaleTimeString("en-GB", {
    timeZone: "Asia/Yangon",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  return (
    <div>
      <p className="text-xs">{currentDate}</p>
      <p className="text-xs">{currentTime}</p>
    </div>
  )
}

export default ShowDate

