import React, { Component } from 'react';
//import { Container, Row, Col } from 'react-bootstrap';
import SkappBar from './components/SkappBar/SkappBar';
import styles from './Skapp.module.scss';
import SkappButton from './components/SkappButton/SkappButton';

class App extends Component {
  render() {
    return (
      <div className={styles.background}>
        <SkappBar />
        <SkappButton text='GET WEATHER' iconName='cloud_done'/>
        <SkappButton text='VIEW MORE' iconName='search'/>
        <SkappButton text='BACK TO FORECAST' iconName='search'/>
      </div>

    );
  }
}

export default App;
