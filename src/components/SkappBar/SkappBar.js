import React, { Component } from 'react'
import styles from './SkappBar.module.scss'
import SkappLogo from '../../images/SkappLogo.svg'
import SkappSearchInput from '../SkappSearchInput/SkappSearchInput'
import SkappButton from '../SkappButton/SkappButton'
import { Link } from 'react-router-dom'
import SkappSettingsWidget from '../SkappSettingsWidget/SkappSettingsWidget'

class SkappBar extends Component {
  state = {
    cityName: ''
  }

  handleChange = (event) => {
    let newValue = event.target.value;
    this.setState(() => ({ cityName: newValue })
    );
  }

  resetInput = () => {
    this.setState({
      cityName: ''
    });
  }

  render() {
    return (
      <div className={styles.bar}>
        <div className={styles.logoBox}>
          <img src={SkappLogo} alt='Skapp Logo' />
        </div>
        <form className={styles}>
          <SkappSearchInput
            value={this.state.cityName}
            onChange={this.handleChange} />
          {
            <Link to={{ pathname: '/forecast', search: '?city=' + this.state.cityName }}>
              <SkappButton text='GET WEATHER' iconName='cloud_done' onClick={this.resetInput}/>
            </Link>
          }
        </form>
        {this.props.location.pathname === '/' && <SkappSettingsWidget />}
      </div>
    );
  }
}

export default SkappBar;