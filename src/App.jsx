import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Search from './Components/Searchbar'
import Content from './Components/CenterContent'
  import { useEffect , useState } from "react";
 


function App() {
 
 const [wheatherdata , setwheatherdata] = useState({
  city:"",
  temp:undefined,
  weather:undefined,
 img:undefined,
 data:[]


 })
  
  const [city , Setcity] = useState("Delhi");
 
  
  useEffect(()=>{
    
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=d723dda7fba44393a08b654915295164`)
    .then(res => res.json())
    .then((data) =>{console.log(data);
      setwheatherdata({
        ...wheatherdata,
        data:data.list,
        temp:Math.floor(data.list[0].main.temp - 273)+"°C",
        weather:data.list[0].weather[0].main,
        img:data.list[0].weather[0].icon,
        city:city
      })
     
    
      });

   },[city])
   
  
  return (
    <>
    <Search city={city}   Setcity={Setcity}/>
    <Content  wheatherdata ={wheatherdata} />
    
    </>
  )
}

export default App
