import React, { Component } from 'react'
import styles from './SkappForecast.module.scss';
import SkappChart from '../SkappChart/SkappChart';
import SkappForecastArray from '../SkappForecastArray/SkappForecastArray';
import queryString  from 'query-string';
import { getForecast } from '../../utils/api';

const fakeDataForecast = [
  {
    temperature: 25,//25.38,
    icon: "10d",
    date: "Tuesday, Feb 19",
    humidity: 85
  },
  {
    temperature: 22,//21.93,
    icon: "10n",
    date: "Friday, Feb 20",
    humidity: 81
  },
  {
    temperature: 19,//19.22,
    icon: "10n",
    date: "Saturday, Feb 21",
    humidity: 79
  },
  {
    temperature: 16,//16.27,
    icon: "02n",
    date: "Sunday, Feb 22",
    humidity: 92
  },
  {
    temperature: 14,//13.63,
    icon: "01n",
    date: "Monday, Feb 23",
    humidity: 88
  }
];

export class SkappForecast extends Component {
  static state = {
    legend: null, // Celsius, Farenheit, Percentage
    dataChart: null, // [34,45,23,34,56] which represent Cel
    labelChart: null // ["Tuesday, Feb 19","Monday, Feb 23"...]
  }

async componentDidMount(){
  /*const search = queryString.parse(this.props.location.search);
  const foreCast = await getForecast(search.city);
  console.log(foreCast);*/
}

  render() {
    return (
      <div className={styles.forecastContainer}>
        <SkappChart/>
        <SkappForecastArray 
          dataForecast={fakeDataForecast}
          unit='Celsius' />
      </div>
    )
  }
}

export default SkappForecast
