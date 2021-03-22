  
import React from 'react'
//mport { Col, Row } from 'react-bootstrap'
//import WeatherCard from './WeatherCard'
import DailyCard from './DailyCard'

function WeatherList(main, weather) {
    return (
        
                <DailyCard
                name={name} 
                temp={main.temp} 
                description={weather[0].description} 
                temp_max={main.temp_max} 
                temp_min={main.temp_min} 
                icon={weather[0].icon}/>
            )}
                 
       
        // <Row>
        //    {weathers.map(({dt,main, weather}) => (
        //         <Col key={dt}>
        //             <WeatherCard temp_max={main.temp_max} temp_min={main.temp_min} dt={dt * 1000} main={weather[0].main} icon={weather[0].icon}/>
        //         </Col>
        //     ))} 
        // </Row>
        
        

    


export default WeatherList;