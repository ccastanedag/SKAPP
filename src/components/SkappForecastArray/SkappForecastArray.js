import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SkappButton from '../SkappButton/SkappButton';
import styles from './SkappForecastArray.module.scss';

const SkappIcon = ({ icon }) => {
  const imgSrc = `/images/${icon}.svg`;
  return (
    <img src={imgSrc} width='100'/>
  );
}

export class SkappForecastArray extends Component {
  static propTypes = {
    dataForecast: PropTypes.array.isRequired,
    unit: PropTypes.string.isRequired
  }

  render() {
    const { dataForecast, unit } = this.props;
    return (
      <ul className={styles.arrayContainer}>
        {
          dataForecast.map((day) => {
            return (
              <li key={day.date}>
                <div className={styles.dayContainer}>
                  <div className={styles.temperatureIconContainer}>
                    {unit === 'Celsius' && <div className={styles.temperature}>{day.temperature} C°</div>}
                    {unit === 'Farenheit' && <div className={styles.temperature}>{day.temperature} F°</div>}
                    <div className={styles.icon}>
                      <SkappIcon icon={day.icon} />
                    </div>
                  </div>
                  <div className={styles.date}>{day.date}</div>
                  <div className={styles.viewMore}>
                    <SkappButton iconName='search' text='MORE DETAILS' />
                  </div>
                </div>
              </li>
            );
          })
        }
      </ul>
    )
  }
}

export default SkappForecastArray
