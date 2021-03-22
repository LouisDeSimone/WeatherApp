  
import React from 'react';
import CitySelector from './components/CitySelector';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import {API_KEY, API_BASE_URL} from './apis/config'
import DailyCard from './components/DailyCard';
import Footer from './components/Footer'



const App = () => {
  const {data, error, isLoading, setUrl} = UseFetch();

  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return (
      <DailyCard
      name={data.name}
      country={data.sys.country}
      temp={data.main.temp} 
                description={data.weather[0].description} 
                temp_max={data.main.temp_max} 
                temp_min={data.main.temp_min} 
                icon={data.weather[0].icon}/>
    )
    //<WeatherList weathers={data.list} />
  };

  return (
    <div className="mainPage">
    <Container className="App">
   
      <CitySelector onSearch={(city, zip, state, country) => setUrl(`${API_BASE_URL}/data/2.5/weather?q=${city},${state},${country}&zip=${zip}&appid=${API_KEY}&units=imperial`)} />
      {/* <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`)} /> */}
      {/* conditionally render  */}
      {getContent()}
      
    </Container>
    <Footer />
    </div>
    
    
   
  );
};

export default App;