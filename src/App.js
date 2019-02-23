import React, { Component } from 'react';
//import { Container, Row, Col } from 'react-bootstrap';
import SkappBar from './components/SkappBar/SkappBar';
import styles from './Skapp.module.scss';
import SkappHome from './components/SkappHome/SkappHome';

class App extends Component {
  citySubmit = (city) =>{
    alert(city);// Here will go the Fetch call to OpenWeather API
  }
  render() {
    return (
      <div className={styles.background}>
        <SkappBar citySubmit={this.citySubmit}/>
        <SkappHome citySubmit={this.citySubmit}/>
      </div>
    );
  }
}

export default App;
