import React, { Component } from "react";
import { WeatherConsumer } from "../Context";

export default class Weather extends Component {
  render() {
  return(
    <WeatherConsumer>
      {data=>{
          const{fetched,city,country,temperature,minTemperature,maxTemperature,message}={...data}
          console.log({...data})
          return(
         <div>
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>Temperature :{temperature}</p>}
            {minTemperature && <p>Min Temp :{minTemperature}</p>}
            {maxTemperature && <p>Max Temp :{maxTemperature}</p>}
            {message && <p>{message}</p>}
         </div>
         
          )
            
             
         }}
    </WeatherConsumer>
  )
  }
    
  }

