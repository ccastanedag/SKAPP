import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './SkappDetail.module.scss';
import { SkappIcon } from '../SkappForecastArray/SkappForecastArray';
import SkappButton from '../SkappButton/SkappButton';
import SettingsContext from '../../utils/SkappContexts'
import queryString from 'query-string';
import SkappError from '../SkappError/SkappError'


const SkappFlag = ({ countryCode }) => {
  const flagSrc = `https://www.countryflags.io/${countryCode}/flat/64.png`;
  return <img src={flagSrc} />
}

export class SkappDetail extends Component {
  componentDidMount() {
    if (this.props.history.location.state) {
      this.setState({
        isLocationStateValid: true
      });
    }
  }
  state = {
    isLocationStateValid: false
  }
  static contextType = SettingsContext;
  render() {
    if (this.state.isLocationStateValid) {
      var { city,
        country,
        date,
        description,
        humidity,
        icon,
        max_temperature,
        min_temperature } = this.props.history.location.state;
    }

    return (
      <div>
        {this.state.isLocationStateValid && (<div className={styles.detailContainer}>
          <div className={styles.detailShape}>
            <div className={styles.cityContainer}>
              <div className={styles.city}>
                <h1>{city}</h1>
                <h4>{date}</h4>
              </div>
              <div className={styles.flag}>
                <SkappFlag countryCode={country} />
              </div>
            </div>
            <div className={styles.descriptionContainer}>
              <h2>{description}</h2>
              <div className={styles.iconContainer}>
                <SkappIcon icon={icon} size={120} />
              </div>
            </div>
            <div className={styles.temperaturesContainer}>
              <div className={styles.minTemperature}><h2>Min</h2>{min_temperature}{this.context.settings.metric ? ' C°' : ' F°'}</div>
              <div className={styles.maxTemperature}><h2>Max</h2>{max_temperature}{this.context.settings.metric ? ' C°' : ' F°'}</div>
            </div>
            <div className={styles.descriptionContainer}>
              <h2>Humidity</h2>
              <h3>{humidity}%</h3>
            </div>
            <div className={styles.backButtonContainer}>
              <SkappButton iconName='search' text='BACK TO FORECAST' />
            </div>
          </div>
        </div>)}
        {!this.state.isLocationStateValid && <SkappError icon='cloud_off'
          messages={{
            h1: 'OOPS!',
            h2: 'PAGE NOT FOUND',
            h3: 'The page you are looking for might have been removed, had its name changed or is temporarily unavailable'
          }}
          buttonIcon='cloud_done'
          buttonText='BACK TO HOME' />}
      </div>
    )
  }
}

export default SkappDetail
