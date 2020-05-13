import React from 'react'
import {WeatherConsumer} from '../Context';

const Form = ()=>(
  
    <WeatherConsumer> 
        {value=>
                (
                   <form autoComplete="off" onSubmit={value.getWeather}>
                   <input type="text" placeholder="city" name="city"/>
                   <input type="text" placeholder="country/optional" name="country" />
                   <button  >Get Weather</button>
                  </form>
                )
        }
    </WeatherConsumer>
      )
      // 1. We can return a single element like here it is a form element by
      // using only normal brackett() instead of curly brackett{}.
      
      //2. If we will use curly brackett{} for function definition then,
      // we need the return method and pass the elements inside it.

export default Form;