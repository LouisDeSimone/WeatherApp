import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';



const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    return (
      <>
        <Row>
          <Col>
            <h1 className="title">Weather App</h1>
          </Col>
        </Row>
  
        <Row>
          <Col lg={4} sm={6} xs={8}>
            <FormControl
            className = "form"
            type="search submit" 
              placeholder="Enter City"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
            <hr className="gap"></hr>
            </Col>
            <Col lg={4} sm={6} xs={8}>
             <FormControl
            className = "form"
            type="search submit" 
              placeholder="Enter State"
              onChange={(event) => setState(event.target.value)}
              value={state}
            />
            <hr className="gap"></hr>
            {/* <h1 className="or">or</h1>
            <FormControl
            className = "form"
            type="search submit"
              placeholder="Enter Zip Code"
              onChange={(event) => setZip(event.target.value)}
              value={zip}
            /> */}
            </Col>
            <Col lg={4} sm={6} xs={8}>
             <FormControl
            className = "form"
            type="search submit" 
              placeholder="Enter Country"
              onChange={(event) => setCountry(event.target.value)}
              value={country}
            />
            
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Button onClick={() => onSearch(city, zip)}>Check Weather</Button>
          </Col>
        </Row>
        
      </>
    );
  };

export default CitySelector;
