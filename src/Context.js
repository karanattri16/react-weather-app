import React, { Component } from "react";

const WeatherContext = React.createContext();
export const WeatherProvider = WeatherContext.Provider;
export const WeatherConsumer = WeatherContext.Consumer;

const api_key = "a62f55bc74ace41fc22e351681f14c1c";

export default class Context extends Component {
  state = {
    city: undefined,
    country:undefined,
    temperature:undefined,
    minTemperature:undefined,
    maxTemperature:undefined,
    humidity:undefined,
    message:undefined
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.city.value;
     const country = e.target.country.value;
    
     const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=metric`
    );
    const data = await api_call.json();
    console.log(data)
    if(data.cod==404){
        this.setState({
          city: undefined,
          country:undefined,
          temperature:undefined,
          minTemperature:undefined,
          maxTemperature:undefined,
          humidity:undefined,
          description:undefined,
          message:data.message  + " / Please enter proper city name" })
      }
      else{
      this.setState({
         
        city:data.name,
        country:data.sys.country,
        temperature:data.main.temp,
        minTemperature:data.main.temp_min,
        maxTemperature:data.main.temp_max,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        message:undefined
      });

    }
   // console.log(this.state.city,this.state.temp,this.state.minTemperature);
    
  };

  render() {
    return (
      <div>
        <WeatherProvider value={{...this.state,
        getWeather:this.getWeather} }>
          {this.props.children}
        </WeatherProvider>
      </div>
    );
  }
}
