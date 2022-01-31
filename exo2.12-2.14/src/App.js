import axios from 'axios'
import React, { useState,useEffect } from 'react'
const App = () => {
    const [searchInput,setSearchinput]=useState('')
    const [countryData,setCountryData]=useState([])
    const [filtredResults,setFiltredResults]=useState([])
    const [weatherData,setWeatherData]=useState([])
    const [countryName,setCountryName]=useState('spain')
    console.log('weather data',weatherData);
    console.log("country name",countryName);
    console.log('filtred results ',filtredResults);
    const handelSearchInput = (e) => {
        setSearchinput(e.target.value)
           setFiltredResults ( countryData.filter((item)=>{
                return Object.values(item.name.common).join('').toLowerCase().includes(searchInput.toLowerCase())
            }
        ))
        filtredResults.length === 1 ? setCountryName( filtredResults[0].name.common ) : setCountryName('')
    }
    const Benchofcountries = (props) => {
        return (
            <div>
                {props.names}
            </div>
        )
    }
    const showCountryInfo = (clickedName) => {
        setCountryName([clickedName])
        setFiltredResults ( countryData.filter((name)=>{
            return Object.values(name.name.common).join('').toLowerCase().includes(clickedName.toLowerCase())
    }))}
    
    const CountryInfo = (props) => {
        return (
            <div>
                <h1> {props.commonName} </h1>
                <p> Capital : {props.capital} </p>
                <p> Population :  {props.ppulation} </p>
                <h1> Spoken languages : </h1>
                <p> {props.lang} </p>
                <h1> Flag </h1>
                <img  alt = {props.alt} src = {props.src} />
                <h1> weather in {props.ctryname} </h1>
                <p> Temperature : {props.temp} </p>
                <p> wind : {props.speed} </p>
                <img alt= {props.altt} src={props.srcc}/>
                <p>icon {weatherData.weather.icon}</p>
            </div>
        )
    }
    useEffect(() => {
        axios
        .get(`https://restcountries.com/v3.1/all`)
            .then( res =>
                setCountryData (res.data)
                )   
    },[])
    useEffect (()=>{
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=43e0b6f43224cd878f6a3436a806cac0`)
            .then ( response =>
                setWeatherData ( response.data ) 
                ) 
    },[countryName])
    return(
        <div>
            <div>
            <form >
                <p> 
                    Search Countries : <input 
                        placeholder = "search Country"
                        value = {searchInput}
                        onChange = {handelSearchInput}
                    />
                 </p>
            </form>
        </div>
        
        <div>
            {filtredResults.length > 10 || filtredResults.length === 0
                ? <p>"Too many matches, be more specific " </p> 
                 : filtredResults.length <= 10 && filtredResults.length >= 2 
                     ? <Benchofcountries
                            names={filtredResults.map((nm)=>
                                <li key={nm} > 
                                {nm.name.common} <button onClick = {()=> showCountryInfo(nm.name.common)} >Show</button> 
                                </li>
                            )} 
                        /> 
                        : <CountryInfo 
                                commonName = {filtredResults[0].name.common} 
                                capital = {filtredResults[0].capital} 
                                ppulation = {filtredResults[0].population}
                                lang = {Object.values(filtredResults[0].languages).map((lang)=>
                                    <li key = {lang}> {lang} </li> )
                                        }
                                alt='country Flag'
                                src={(filtredResults[0].flags.png) }
                                ctryname ={countryName}
                                temp={weatherData.main.temp}
                                speed={weatherData.wind.speed}
                                altt='weather icon'
                                srcc={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}

                            />
            }
            
        </div>

        </div>
    )
}
export default App