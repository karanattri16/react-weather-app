import React, { Component } from "react";
import { WeatherConsumer } from "../Context";
export default class Form extends Component {
  render() {
    return (
      <WeatherConsumer>
        {value=>{
          return(
            <form onSubmit={value.getWeather}>
            <input type="text" placeholder="city" name="city" />
            <input type="text" placeholder="country" name="country" />
            <button  >Click</button>
            </form>
          )
        }}
      </WeatherConsumer>
      
    );
  }
}
