import { useState } from "react";



const Cardlist = ({ data }) => {
 

  const getDay = (date) => {
    let weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return weekdays[new Date(date).getDay()];
  };
  //  const weather = data.list[noofday].dt_txt
  const newdata = [];
  let img = ""
  for (let i = 0; i <  data.length; i += 8) {
    const element = data[i];
    
    newdata.push(element);
   

   
    
  }
 
  return (
    <>
     
      {newdata.map((ele,index) => {
        return (
          <div
            className="weeks-card    shadow-lg rounded-5 justify-content-center justify-content-center  " key={index}
            
          >
            
            <div className="card-body">
              <h5 className="card-title fs-4 pt-3 fw-bold ">{getDay(ele.dt_txt)}</h5>

              <img src={"imges/"+ ele.weather[0].icon + ".jpg"}  height={"200px"} width={"100px"} className="card-img" alt="..." />
              <p className="card-text fs-4 text-secondary"> {Math.floor(ele.main.temp-273)}°C</p>
              <p>{ ele.weather[0].main}</p>
             
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Cardlist;
