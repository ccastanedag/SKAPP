import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './SkappDetail.module.scss';
import { SkappIcon } from '../SkappForecastArray/SkappForecastArray';
import SkappButton from '../SkappButton/SkappButton';


const SkappFlag = ({ countryCode }) => {
  const flagSrc = `https://www.countryflags.io/${countryCode}/flat/64.png`;
  return <img src={flagSrc}/>
}

export class SkappDetail extends Component {
  render() {
    const { city,
      country,
      date,
      description,
      humidity,
      icon,
      max_temperature,
      min_temperature } = this.props.history.location.state;

    return (
      <div className={styles.detailContainer}>
        <div className={styles.detailShape}>
          <div className={styles.cityContainer}>
            <div className={styles.city}>
              <h1>{city}</h1>
              <h4>{date}</h4>
            </div>
            <div className={styles.flag}>
              <SkappFlag countryCode={country}/>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <h2>{description}</h2>
            <div className={styles.iconContainer}>
              <SkappIcon icon={icon} size={120} />
            </div>
          </div>
          <div className={styles.temperaturesContainer}>
            <div className={styles.minTemperature}><h2>Min</h2>{min_temperature}</div>
            <div className={styles.maxTemperature}><h2>Max</h2>{max_temperature}</div>
          </div>
          <div className={styles.descriptionContainer}>
            <h2>Humidity</h2>
            <h3>{humidity}%</h3>
          </div>
          <div className={styles.backButtonContainer}>
            <SkappButton iconName='search' text='BACK TO FORECAST' />
          </div>
        </div>
      </div>
    )
  }
}

export default SkappDetail
