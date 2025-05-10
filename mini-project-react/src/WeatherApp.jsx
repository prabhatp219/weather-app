import SearchBox from './SearchBox'
import InfoBox from './infobox'
import { useState } from 'react'
export default function WeatherApp(){
    const[WeatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:4,
        weather:"haze",
    })

    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }

    return(
        <div>
            <h2>Weather App by P<sup>3</sup>N</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={WeatherInfo} />
        </div>
    )
}