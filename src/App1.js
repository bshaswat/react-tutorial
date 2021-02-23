import React from "react"

function App1() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

  return (
      <div>
          <input type="checkbox" />
          <p>Placeholder text here</p>

          <input type="checkbox" />
          <p>Placeholder text here</p>

          <input type="checkbox" />
          <p>Placeholder text here</p>

          <input type="checkbox" />
          <p>Placeholder text here</p>

          <h1>Good {timeOfDay}!</h1>
      </div>
    )
}

export default App1