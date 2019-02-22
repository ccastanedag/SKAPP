import React, { Component } from 'react';
//import { Container, Row, Col } from 'react-bootstrap';
import SkappBar from './components/SkappBar/SkappBar';
import styles from './Skapp.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.background}>
        <SkappBar />
      </div>

    );
  }
}

export default App;
