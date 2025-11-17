import React, { Component, Fragment } from "react";

import CounterComponent from "./Counter";

const CounterOne =({count})=>{
  

    return (
      <Fragment>
        <div className="row">
          {count?.map((value, index) => (
            <div
              className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12"
              key={index}
            >
              <h4 className="counter">
                <CounterComponent max={value.num} />
              </h4>
              <p className="description">{value.description}</p>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
export default CounterOne;
