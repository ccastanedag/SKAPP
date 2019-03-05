import React, { Component } from 'react'
import styles from './SkappDetail.module.scss'
import { SkappIcon } from '../SkappForecastArray/SkappForecastArray'
import SkappButton from '../SkappButton/SkappButton'
import SettingsContext from '../../utils/SkappContexts'
import SkappError from '../SkappError/SkappError'
import { Box } from '../../utils/SkappAnimations'

const SkappFlag = ({ countryCode }) => {
  const flagSrc = `https://www.countryflags.io/${countryCode}/flat/64.png`;
  return <img src={flagSrc} alt='flag country' />
}

export class SkappDetail extends Component {
  componentDidMount() {
    if (this.props.history.location.state) {
      this.setState({
        isLocationStateValid: true,
        locationState: this.props.history.location.state,
        animation: 'end'
      });
    }
  }
  backToForecast = () => {
    this.props.history.goBack();
  }
  state = {
    isLocationStateValid: false,
    locationState: null,
    animation: 'begin'
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
        min_temperature } = this.state.locationState;
    }

    return (
      <div>
        {this.state.isLocationStateValid && (<div className={styles.detailContainer}>
          <Box className={styles.detailShape} pose={this.state.animation}>
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
                <SkappIcon icon={icon} size={90} />
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
              <SkappButton iconName='search' text='BACK TO FORECAST' onClick={this.backToForecast} />
            </div>
          </Box>
        </div>)}
        {!this.state.isLocationStateValid && <SkappError
          {...this.props}
          key='page-not-found-2'
          icon='cloud_off'
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
