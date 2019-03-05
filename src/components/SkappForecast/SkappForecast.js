import React, { Component } from 'react'
import styles from './SkappForecast.module.scss'
import SkappChart from '../SkappChart/SkappChart'
import SkappForecastArray from '../SkappForecastArray/SkappForecastArray'
import queryString from 'query-string'
import { getForecast, getForecastFormatted, getCountryCity } from '../../utils/api'
import SettingsContext from '../../utils/SkappContexts'
import SkappLoading from '../SkappLoading/SkappLoading'

export class SkappForecast extends Component {
  static contextType = SettingsContext;
  state = {
    dataForecast: null, // Data filtered and formatted from Open Weather
    countryCity: null
  }

  async componentDidMount() {
    const isMetric = this.context.settings.metric ? 'metric' : 'imperial';
    const search = queryString.parse(this.props.location.search);
    if (search.city === '' || !('city' in search)) {
      this.props.history.push('/page-not-found');
    }
    else {
      const foreCast = await getForecast(search.city, isMetric);
      if (foreCast.cod === '200') {
        this.setState(() => {
          return {
            dataForecast: getForecastFormatted(foreCast),
            countryCity: getCountryCity(foreCast)
          }
        });
      }
      if (foreCast.cod === '404') {
        this.props.history.push('/city-not-found');
      }
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const oldSearch = queryString.parse(prevProps.location.search);
    const newSearch = queryString.parse(this.props.location.search);
    
    if (prevProps.location.search !== this.props.location.search) {
      if (('city' in oldSearch) && ('city' in newSearch)) {
        if (oldSearch.city !== newSearch.city) {
          this.setState(() => {
            return {
              dataForecast: null,
              countryCity: null
            }
          });
          const isMetric = this.context.settings.metric ? 'metric' : 'imperial';
          const search = queryString.parse(this.props.location.search);
          if (search.city === '' || !('city' in search)) {
            this.props.history.push('/page-not-found');
          }
          else {
            const foreCast = await getForecast(search.city, isMetric);
            if (foreCast.cod === '200') {
              this.setState(() => {
                return {
                  dataForecast: getForecastFormatted(foreCast),
                  countryCity: getCountryCity(foreCast)
                }
              });
            }
            if (foreCast.cod === '404') {
              this.props.history.push('/city-not-found');
            }
          }
        }
      }
      else {
          this.props.history.push('/page-not-found');        
      }
    }
  }

  render() {
    const { dataForecast, countryCity } = this.state;
    return (
      <div className={styles.forecastContainer}>
        {dataForecast && <SkappChart dataChart={dataForecast} />}
        {dataForecast && <SkappForecastArray dataForecast={dataForecast} unit='Celsius' countryCity={countryCity} />}
        {!dataForecast && <SkappLoading/>}
      </div>
    )
  }
}

export default SkappForecast
