import React, { Component } from 'react'
import styles from './SkappForecast.module.scss';
import SkappChart from '../SkappChart/SkappChart';
import SkappForecastArray from '../SkappForecastArray/SkappForecastArray';
import queryString from 'query-string';
import { getForecast, getForecastFormatted, getCountryCity } from '../../utils/api';
import SettingsContext from '../../utils/SkappContexts'

export class SkappForecast extends Component {
  static contextType = SettingsContext;
  state = {
    dataForecast: null, // Data filtered and formatted from Open Weather
    countryCity: null
  }

  async componentDidMount() {
    const isMetric = this.context.settings.metric? 'metric' : 'imperial';
    const search = queryString.parse(this.props.location.search);
    const foreCast = await getForecast(search.city, isMetric);
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
