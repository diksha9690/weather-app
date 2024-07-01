import {  useRef } from "react"

const Search = ({city,Setcity})=>{
 const cityname = useRef();
 const handlename = (event)=>{
 event.preventDefault();
city = cityname.current.value
 Setcity(city)
 cityname.current.value = ""
 
 city
 }
 
 
  return<>
    <div >
   
   <form className="m-4  w-75 mx-auto ">
   <label className="d-flex">
   <input type="text" className="form-control border rounded-pill " id="search" placeholder="Enter City " ref={cityname}/>
   <button className="btn" onClick={handlename} >Search</button>
   </label>
   </form>
  </div>
  </>
}
export default Search