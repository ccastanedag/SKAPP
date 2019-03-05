import React, { Component } from 'react'
import styles from './SkappBar.module.scss'
import SkappLogo from '../../images/SkappLogo.svg'
import SkappSearchInput from '../SkappSearchInput/SkappSearchInput'
import SkappButton from '../SkappButton/SkappButton'
import { Link } from 'react-router-dom'
import SkappSettingsWidget from '../SkappSettingsWidget/SkappSettingsWidget'
import { Icon } from '@material-ui/core';

class SkappBack extends React.Component {
  goBack = (history) => {
    history.goBack();
  }
  render() {
    const { textBack, iconBack, history } = this.props
    return (
      <div onClick={() => this.goBack(history)}>
        <div className={styles.backMobile}>
          <Icon className={styles.iconBack} style={{ fontSize: 25 }}>{iconBack}</Icon>
        </div>
        <div className={styles.backDesktop}>{textBack}</div>
      </div>
    )
  }
}

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

  backToHome = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className={styles.bar}>
        <SkappBack textBack='BACK' iconBack='arrow_back' history={this.props.history} />
        <div className={styles.logoBoxContainer}>
          <div className={styles.logoBox} onClick={this.backToHome}>
            <img src={SkappLogo} alt='Skapp Logo' />
          </div>
        </div>
        <form className={styles.SkappBar}>
          <SkappSearchInput
            value={this.state.cityName}
            onChange={this.handleChange} />
            <Link to={{ pathname: '/forecast', search: '?city=' + this.state.cityName }} className={styles.link}>
              <SkappButton text='GET WEATHER' iconName='cloud_done' onClick={this.resetInput} />
            </Link>
        </form>
        {this.props.location.pathname === '/' && <SkappSettingsWidget />}
      </div>
    );
  }
}

export default SkappBar;