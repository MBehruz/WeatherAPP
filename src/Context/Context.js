import React, { useReducer, useContext } from 'react';

import { WeatherReducer } from './Reducer';

const WeatherAPPContext = React.createContext();

const WeatherAPPProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WeatherReducer, {
    city: {
      city: 'Rishton',
      lat: '40.3567',
      lng: '71.2847',
      country: 'Uzbekistan',
      iso2: 'UZ',
      admin_name: 'Farg‘ona',
      capital: 'minor',
      population: '23706',
      population_proper: '23706',
    },
    current: '',
    daily: '',
  });

  return (
    <WeatherAPPContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherAPPContext.Provider>
  );
};

export default WeatherAPPProvider;

export const UseWeatherAppContext = () => {
  return useContext(WeatherAPPContext);
};
