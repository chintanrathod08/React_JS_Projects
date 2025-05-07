import { RiMapPinLine, RiSearch2Line } from '@remixicon/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function WeatherApp() {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('Rajkot');
    const [suggest, setSuggest] = useState([]);
    const [isCitySelect, setIsCitySelect] = useState(true)
    const [selectedCoords, setSelectedCoords] = useState(null);

    const apiKey = 'e1d28d0d4bc59ef7883e7c397e81d032';



    useEffect(() => {
        const fetchWeather = async () => {
            try {
                let url = '';
                if(selectedCoords){
                    url = `https://api.openweathermap.org/data/2.5/weather?lat=${selectedCoords.lat}&lon=${selectedCoords.lon}&appid=${apiKey}&units=metric`
                }
                else{
                
                 url = `https://api.openweathermap.org/data/2.5/weather?q=Rajkot&appid=${apiKey}&units=metric`
                
                }

                const res = await axios.get(url)
                setWeatherData(res.data);
            
            } catch (err) {
                console.log("Error fetching weather data", err);
            }
        };

        if (isCitySelect) {
            fetchWeather();
        }

    }, [city,isCitySelect,selectedCoords]);


    const fetchSuggestion = async (query) => {
        if (!query) return;
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`
            );
            setSuggest(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const hlChange = (e) => {
        const val = e.target.value;
        setCity(val);
        fetchSuggestion(val);
        setIsCitySelect(false);
    };



    return (
        <>
            {weatherData && (
                <div className='w-[30%] h-auto pt-10 pb-10 p-5 border rounded-[10px] bg-[#242424] flex flex-col items-center justify-evenly' id='mainsec' >

                    <div className='w-full h-auto flex justify-evenly items-center relative'>
                        <input
                            type="text"
                            value={city}
                            onChange={hlChange}
                            className='border border-[white] w-[80%] bg-[#EBFDFF] rounded-[50px] h-[40px] ps-11'
                            placeholder='Enter City Name'
                        />
                        <RiSearch2Line className='text-[black] absolute left-13 cursor-pointer' />

                        {/* Suggestions Dropdown */}
                        {suggest.length > 0 && (
                            <ul id='suggestion' className="absolute top-[45px] left-[10%] bg-white text-black w-[80%] rounded-md shadow-lg z-10 max-h-[150px] overflow-y-auto">
                                {suggest.map((item, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => {
                                            setCity(`${item.name} ,${item.country}`)
                                            setSelectedCoords({lat: item.lat, lon: item.lon }) 
                                            setIsCitySelect(true)
                                            setSuggest([]);
                                        }}
                                    >
                                        {item.name}, {item.country}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Weather Icon */}
                    <div className='w-full h-auto flex justify-center items-center'>
                        <img
                            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                            alt="Weather icon"
                            className='w-[200px] h-[200px]'
                        />
                    </div>

                    {/* Temperature & City */}
                    <div className='w-full text-center text-[white]'>
                        <span className='flex items-center justify-center'>
                            <img
                                src="https://media-hosting.imagekit.io/1e898c7d4c44409e/thermometer.png?Expires=1841140627&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UyQrZd4bgwdpFMgNOCCotsF-APCgQpcujmR~arHygWV6eCfVPPacEDAwKLwnXqxsvDlIpAma9zNICEmJsZGIPsmzyawr-cBQ0fyYJgsJNUlSdxQ~GmWhCALok7DklGOPFOUY-UfX28mjQs7FTjv9wyJYoJV1dlzp5fst1E8JhhHBs8pwLcZrL~Mz7fCqOlgcTqFYrNiNiLhONFKENSneL7FR~D46aZrLO-brqSJxekGvitUdmKJN97JumJ8nlI0VGclp2KS955MnjRicBknj8HJV1pK9B-4eAFL34pHHUudfvIX2egg07B0hKUtxrPViVtbPqIQgUNgXibb94dYomg__"
                                alt=""
                                className='h-[35px]'
                            />
                            <p className='text-[2.3rem]'>{weatherData.main.temp}°c</p>
                        </span>
                        <span className='w-full flex items-center justify-center mt-2'>
                            <RiMapPinLine className='me-2 h-[20px]' />
                            <span className='text-[1.5rem] me-[2px]'>{weatherData.name}</span> ,
                            <span className='ms-2 mt-1'>{weatherData.sys.country}</span>
                        </span>
                    </div>

                    {/* Humidity & Wind */}
                    <div className='w-full h-auto grid grid-cols-2 mt-5'>
                        <div className='flex justify-start items-center'>
                            <img src="https://media-hosting.imagekit.io/3d72d6c76fcd45db/humidity.png?Expires=1841202386&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zJGQJ7hYsthiELuspXLhsG1gzOjPdxYQgez7KQYE6b~AxUFqb075r0nDVF7dqjvWJTS84lRhlqs-TG4IhO7kOUqZ74PRgfEx1JTm6t7xZ8DKNmX2TeWw2iwsqED7f2k5H8hL1h1KMYaPY8MtpxJMYPfQKmYsdv4VVPrluUozMeGdCCpOLon-xZu4uDqXOBxrGbqEuei~BGNrtXXZ4IgmSouwyqMQkxpeplrzbBxgyNGJT~VK8UCgv~oFkub9wHZLTRpDP95W6HRiv6w4Z0~mJGWoOJlPEIL8dDoe2zqEgLKgVcWzQl8p6w92lBFXDruoAUh4~8ZhXzWEC4wzjcdJag__" alt="" className='w-[2rem]' />
                            <div className='ms-2 text-[white]'>
                                <p>{weatherData.main.humidity}%</p>
                                <span>Humidity</span>
                            </div>
                        </div>
                        <div className='flex justify-end items-center'>
                            <img src="https://media-hosting.imagekit.io/d1ed2e427eac4a69/wind.png?Expires=1841133893&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yCRkEWWBLj1kVRTgnmAufMlJvOzThJlJRTN7v00s1BSD9ZrgLavclnm4R8Scd0eE73ciTLGOLF7sp016r9QW4jc8~iL0tDRB3AZRlCuSnak95v4Doxt-o8smDmp-uKCgobvbY3Hz8LyyTMWunAfwUjXgzFsRUbr~~glGMXNPrro9F8x15EiojUVaFlOnCwYEXLL6d3U0uXDvGe6IhnWka0gThgBamVVFrBC50grPybziTD~MahMQItBjHiuh-ssgS5RVTfjxrqphsqNBT62V8u45PF0aC8-H89FxSxoJFVm8HsLZaOK0l8vTzNgFFjrfK54kqIonOnIBOBai7mGs8A__" alt="" className='w-[2rem]' />
                            <div className='ms-2 text-[white]'>
                                <p>{weatherData.wind.speed} Km/h</p>
                                <span>Wind Speed</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default WeatherApp;
