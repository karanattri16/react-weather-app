import React, { Component } from "react";
import Title from "./Components/Title";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <div className="main" >
            <div className="container">
              <div className="row">
                <div className="col-sm-5 title-container">
                <Title />
                </div>
                <div className="col-sm-7 form-container">
                <Form />
                <Weather/>
              </div>
              </div>
            </div>
          </div>
        </div>
        
        
       
      </React.Fragment>
    );
  }
}
