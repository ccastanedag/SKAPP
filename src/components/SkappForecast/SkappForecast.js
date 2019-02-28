import React, { Component } from 'react'
import styles from './SkappForecast.module.scss';
import SkappChart from '../SkappChart/SkappChart';
import SkappForecastArray from '../SkappForecastArray/SkappForecastArray';
import queryString from 'query-string';
import { getForecast, getForecastFormatted, getCountryCity } from '../../utils/api';

export class SkappForecast extends Component {
  state = {
    dataForecast: null, // Data filtered and formatted from Open Weather
    countryCity: null
  }

  async componentDidMount() {
    const search = queryString.parse(this.props.location.search);
    const foreCast = await getForecast(search.city, 'metric');
    this.setState(() => {
      return {
        dataForecast: getForecastFormatted(foreCast),
        countryCity: getCountryCity(foreCast)
      }
    });
  }

  render() {
    const { dataForecast, countryCity } = this.state;
    return (
      <div className={styles.forecastContainer}>
        {dataForecast && <SkappChart dataChart={dataForecast}/>}
        {dataForecast && <SkappForecastArray dataForecast={dataForecast} unit='Celsius' countryCity={countryCity}/>}     
        {!dataForecast && <p>LOADING</p>}
      </div>
    )
  }
}

export default SkappForecast
