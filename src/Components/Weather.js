import React from 'react';
import {WeatherConsumer} from '../Context';
const Weather = ()=>(
    <WeatherConsumer>
    {data=>{
        const{city,country,temperature,minTemperature,maxTemperature,humidity,description,message}={...data}
       
        return(
       <div className="weather__info">
         {/*  A way to render conditionally the elements. */ }
          { city && country && <p className="weather__key"> CIty: <span className="weather__value">{city}</span>, Country:<span className="weather__value"> {country}</span></p>       } 
          {temperature && <p className="weather__key"> Temperature :<span className="weather__value">{temperature}</span></p>}
          {minTemperature && <p className="weather__key"> Min Temp :<span className="weather__value">{minTemperature}</span></p>}
          {maxTemperature && <p className="weather__key"> Max Temp :<span className="weather__value">{maxTemperature}</span></p>}
          {humidity && <p className="weather__key">Humidity : <span className="weather__value"> {humidity}</span></p>}
          {description && <p className="weather__key">Description : <span className="weather__value"> {description}</span></p>}
          
          {message && <p className="weather__error">{message}</p>}

       </div>
        )
       }}
  </WeatherConsumer>
)

      // 1. We can return a single element by
      //    using only normal brackett() instead of curly brackett{}.
      
      // 2. But here we need to write a return method inside annonymous func of WeatherConsumer
      //    element because we are doing destructuring also here.
      //    But we used normal brackett() in the start of the function.
      
      // 3. If we will use curly brackett{} for function definition then,
      //    we need the return method and pass the elements inside it.

export default Weather;