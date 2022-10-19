import { useEffect, useState } from "react";
import Hero from "../hero";


const WeatherPage = () => {
  const [cities, setCities] = useState();
  const [selectedCity, setSelectedCity] = useState("Tokyo");
  const [weather, setWeather] = useState();

  const handleClick = (name) => {
    setSelectedCity(name);
  };

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/capital/")
      .then((response) => response.json())
      .then((response) => {
        setCities(response);
      })
      .catch((err) => console.error(err));
    // console.log(cities);
  }, []);

  useEffect(() => {
    fetch(
      `http://api.weatherstack.com/current?access_key=f61f971da2cb187062dd98fe9f6c7b42&query=${selectedCity}`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setWeather(response);
      })
      .catch((err) => console.error(err));
    console.log(weather);
  }, [selectedCity]);

  if (!cities || !weather) {
    return <div>Loading...</div>;
  }
  console.log(weather);
  return (
    <div>
      {" "}
      {/* <Hero cities={cities} weather={weather} handleClick={handleClick} /> */}
    </div>
  );
};

  export default documentsete;