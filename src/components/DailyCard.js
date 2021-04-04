import React from 'react';
import {Card} from 'react-bootstrap';
// import CitySelector from "CitySelector";

function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}

const images = importAll(require.context('./icons', false, /\.(png)$/));



const newIcon = {};
const DailyCard = (props) => {
  
  // create a date object with Date class constructor
  return (
    <div className="box">
    <Card>
    <div className="WIcon">
    
      <Card.Img 
        variant="top"
        // get the src from example url and pass the icon prop for icon code
        //src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        src={images[`${props.icon}.png`].default} 
      ></Card.Img>
      </div>
      <Card.Body className="card-body">
        <Card.Title>{props.main}</Card.Title>
        <h2>{props.name}, {props.country}</h2>
        <h1>{Math.round(props.temp)}&#176;F</h1>
         <h3 className="capitalize">{props.description}</h3>
         {/* maximum temperature */}
        <h2 className="maxMin">Max: {Math.round(props.temp_max)}&#176;F     |   Min: {Math.round(props.temp_min)}&#176;F</h2>
        {/* minimum temperature */}
        {/* <h2>Min: {Math.round(props.temp_min)}</h2> */}
        {/* <p>lat: {props.lat} long: {props.long}</p> */}
      </Card.Body>
    </Card>
    </div>
  );
};
export default DailyCard;