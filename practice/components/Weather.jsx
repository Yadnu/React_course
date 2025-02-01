import React from 'react'
const coolWeather = () => {
  return (
        <h1>It is cold outside</h1>
  )
}
const niceWeather = () => {
  return (
        <h1>It is nice outside</h1>
  )
}

const hotWeather = () => {
    return (
            <h1>It is hot outside</h1>
    )
}
const Weather = ({ temperature }) => {
  if (temperature < 15) {
    return coolWeather();
  }
  else if (temperature >= 15 && temperature <=25) {
    return niceWeather();
  }
  else{
    return hotWeather();
  }
}

export default Weather