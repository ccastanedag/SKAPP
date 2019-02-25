import React, { Component } from 'react'
import styles from './SkappForecast.module.scss';
import SkappChart from '../SkappChart/SkappChart';

export class SkappForecast extends Component {
  static state = {

  }

  render() {
    return (
      <div>
        <SkappChart/>
        {/* <SkappForecastArray/> */}
      </div>
    )
  }
}

export default SkappForecast
