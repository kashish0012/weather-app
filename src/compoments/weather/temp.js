import React, {useEffect, useState} from "react";
import './style.css'
import Weathercard from './weathercard'

const Temp = () => {
    const [searchValue, setSearchValue] = useState("chandpur");
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=074d1aa2509d8868375a1f2c2167398a`;

            const res = fetch(url);
            const data = await (await res).json();
            const { temp, humidity, pressure } = data.main;
            const {main: weathermood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset
            };

            setTempInfo(myNewWeatherInfo);
        } catch(error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    }, []);
  return (
    <>
    <div className="wrap">
        <div className="search">
            <input 
            type="search"
            placeholder='search...'
            autoFocus
            id='search'
            className='searchTerm'
            value={searchValue}
            onChange={(e)=> setSearchValue(e.target.value)} />

            <button 
            className="searchButton" 
            type="button"
            onClick={getWeatherInfo}>Search</button>
        </div>
    </div>

    <Weathercard tempInfo={tempInfo} />
    </>
  )
}

export default Temp;