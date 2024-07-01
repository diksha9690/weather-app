 import Cardlist from './Cardlist'
const Content = ({ wheatherdata})=>{
  console.log(wheatherdata)
 
  return <div className="content position-relative gray-100  shadow-lg p-3 mb-5  rounded enable-shadows  ">
    <img src={"imges/"+wheatherdata.img+".jpg"}
    className="main-card-img position-absolute start-0 m-5 rounded" alt="..."/>
    <p className='fs-4 today' >Today</p>
    <h1 className='fw-bolder'>{wheatherdata.city}</h1>
    <h2 className='fs-3'>Temperature:{wheatherdata.temp}</h2>
    <h3>{wheatherdata.weather}</h3>
   
<div className=' week-cards-box'>
<Cardlist data={wheatherdata.data}/>
</div>
  </div>
}
export default Content;