import React, { Component } from 'react';
//import { Container, Row, Col } from 'react-bootstrap';
import SkappBar from './components/SkappBar/SkappBar';
import styles from './Skapp.module.scss';
import SkappHome from './components/SkappHome/SkappHome';
import SkappForecast from './components/SkappForecast/SkappForecast';
import { getForecast } from './utils/api';

class App extends Component {
  citySubmit = async(city) => {
    const response = await getForecast(city);
    console.log(response);
  }
  render() {
    return (
      <div className={styles.background}>
        <SkappBar citySubmit={this.citySubmit} />
        {/* <SkappHome citySubmit={this.citySubmit}/> */}
        <SkappForecast />
      </div>
    );
  }
}

export default App;
