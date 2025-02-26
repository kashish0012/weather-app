import React, { useEffect, useState } from 'react'

const Weathercard = ({ tempInfo }) => {
    const [weatherState, setWeatherState] = useState("")
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
    } = tempInfo;

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds": 
                    setWeatherState("wi-cloudy")
                    break;
                case "Haze": 
                    setWeatherState("wi-fog")
                    break;
                case "Clear": 
                    setWeatherState("wi-day-haze")
                    break;
                case "Rain": 
                    setWeatherState("wi-rain")
                    break;
                case "Mist": 
                    setWeatherState("wi-dust")
                    break;
            
                default:
                    setWeatherState("wi-day-sunny")
                    break;
            }
            
        }
    }, [weathermood])

    let sec = sunset;
    let date = new Date(sec*1000)
    let timeStr = `${date.getHours()}:${date.getMinutes()}`
  return (
    <>
    <article className="widget">
        <div className="weatherIcon">
            <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
            <div className="temperature" >
                <span>{temp}&deg;</span>
            </div>

            <div className="description">
                <div className="weatherCondition">{weathermood}</div>
                <div className="place">{name}, {country}</div>
            </div>
        </div>

        <div className="date"> {new Date().toLocaleString()} </div>

        <div className="extra-temp">
            <div className="temp-info-minmax">
                
                <div className="two-sided-section">
                    <p>
                        <i className={"wi wi-sunset"}></i>
                    </p>
                    <p className="extra-info-leftside">
                        {timeStr} PM<br />
                        Sunset
                    </p>
                </div>
                <div className="two-sided-section">
                    <p>
                        <i className={"wi wi-humidity"}></i>
                    </p>
                    <p className="extra-info-leftside">
                        {humidity}&#37; <br />
                        Humidity
                    </p>
                </div>
            </div>

            <div className="weather-extra-info">
            <div className="two-sided-section">
                    <p>
                        <i className={"wi wi-rain"}></i>
                    </p>
                    <p className="extra-info-leftside">
                        {pressure} hPa <br />
                        Pressure
                    </p>
                </div><div className="two-sided-section">
                    <p>
                        <i className={"wi wi-strong-wind"}></i>
                    </p>
                    <p className="extra-info-leftside">
                        {speed} m&#47;s<br />
                        Speed
                    </p>
                </div>
            </div>

        </div>

    </article>
    </>
  )
}

export default Weathercard;
