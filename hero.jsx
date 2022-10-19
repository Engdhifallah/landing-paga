
import Image from "next/image";


const Hero = ({ cities, weather, handleClick }) => {
    return (
        <div>
           <section className="htm">
        
        <div className="left">
        <span className="span">the,weather</span>
        
        <div className="box">
            
            <h1>{weather.current.temperature}<sup>o</sup>{weather.location.name}</h1>
            <p id="p" >
            {weather.current.observation_time}</p>
               <p>wind_degree: {weather.current.wind_degree}</p>
                <p>City: {weather.location.name}</p>
                <Image src={weather.current.weather_icons[0]}width={50} height={50} />
            
        </div>
           

            
        
        </div>
        <div className="right">
            <div className="form">
                <form action="">
                    
                <input type="text"/>  
                </form>
            </div>
            <div className="lin">
                <ul>
                {cities.data.map((city) => (
          // eslint-disable-next-line react/jsx-key
          <li
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleClick(city.capital);
            }}
          >
            {city.name}
          </li>
        ))};
                </ul>
            </div>
            <h3>weather Details</h3>
            <div className="flist">
            <div className="botn">
                 <ul>
                    <li>Cloudy</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                    <li>Rain</li>
                 </ul>

            </div>
            <div class="list">
                <ul>
                    <li>{weather.current.weather_descriptions[0]}</li>
                    <li>{weather.current.humidity}</li>
                    <li>{weather.current.wind_degree}</li>
                    <li>{weather.request.language}</li>
                 </ul>
            </div>
        </div>
    </div>
    </section>
    </div>
    )
}


export default Hero;