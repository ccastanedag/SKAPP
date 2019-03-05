import React, { Component } from 'react'
import styles from './SkappHome.module.scss'
import SkappSearchInput from '../SkappSearchInput/SkappSearchInput'
import SkappButton from '../SkappButton/SkappButton'
import { Link } from 'react-router-dom'
import { Box } from '../../utils/SkappAnimations' 

class SkappHome extends Component {

  state = {
    cityName: '',
    animation: 'begin',
    intervalId: null
  }

  handleChange = (event) => {
    let newValue = event.target.value;
    this.setState(() => {
      return {
        cityName: newValue
      }
    });
  }

  resetInput = () => {
    this.setState({
      cityName: ''
    });
  }

  componentDidMount(){
    const id =  setInterval(()=>{
      this.setState({
        animation: 'end'
      });
    },150);

    this.setState({
      intervalId: id
    });
  }

  componentWillUnmount(){
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div className={styles.homeContainer}>
        <Box className={styles.homeBox} pose={this.state.animation}>
          <div className={styles.homeTop}>
            <label className={styles.title}>Enter a city</label>
            <SkappSearchInput
              value={this.state.cityName}
              onChange={this.handleChange} />
          </div>
          <div className={styles.homeBottom}>
            <Link to={{ pathname: '/forecast', search: '?city=' + this.state.cityName }}>
              <SkappButton iconName='cloud_done' text='GET WEATHER' onClick={this.resetInput} />
            </Link>
          </div>
        </Box>
      </div>
    );
  }
}

export default SkappHome;