import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button,  MenuItem,  Select, TextField, Typography } from '@mui/material';
import { Stack, Container } from '@mui/system';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Weather = () => {
  const weatherAPI = {
    key: '0f2d2d1e93524daf81c131226221109',
    base: 'http://api.weatherapi.com/v1',
  };

  const openWeatherAPI = {
    key: '6f12f43f81dcd59e47dfd4ec1bdc576c',
    base: 'http://api.openweathermap.org/data/2.5',
  };

  const [city, setCity] = useState('');

  const [weather, setWeather] = useState(null);

  const [api, setApi] = useState('weatherapi');

  const wAPIfetch = () => {
    fetch(
      `${weatherAPI.base}/current.json?key=${weatherAPI.key}&lang=ru&q=${city}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result.current.temp_c);
        console.log(result);
      });
  };

  const owAPIfetch = () => {
    fetch(
      `${openWeatherAPI.base}/weather?q=${city}&lang=ru&APPID=${openWeatherAPI.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather((result.main.temp - 273).toFixed(2));
        console.log(result);
      });
  };

  const search = () => {
    if (api === 'weatherapi') {
      wAPIfetch();
    } else if (api === 'openweatherapi') {
      owAPIfetch();
    }
  };

  const onChangeHandler = (event) => {
    setApi(event.target.value);

    if (event.target.value === 'weatherapi' && weather !== null) {
      wAPIfetch();
    } else if (event.target.value === 'openweatherapi' && weather !== null) {
      owAPIfetch();
    }
  };

  console.log(weather);
  console.log(city);

  return (
    <Container>
      <Stack
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        margin="20px"
        spacing={2}
      >
        <Link to="/" className="button2">
          <Button variant="outlined">Home</Button>
        </Link>
        <Select value={api} onChange={onChangeHandler}>
          <MenuItem value="weatherapi">Weather API</MenuItem>
          <MenuItem value="openweatherapi">OpenWeatherMap</MenuItem>
        </Select>
        <TextField
          size="small"
          type="text"
          className="search-bar"
          placeholder="Напишите название города"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <Button variant="outlined" onClick={search}>
          Показать погоду
        </Button>
        <Typography variant="h4">
          {weather !== null ? weather + '°c' : weather}
        </Typography>
      </Stack>
    </Container>
  );
};

export default Weather;
