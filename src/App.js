import React, { Component } from 'react';
//import { Container, Row, Col } from 'react-bootstrap';
import SkappBar from './components/SkappBar/SkappBar';
import styles from './Skapp.module.scss';
import SkappHome from './components/SkappHome/SkappHome';
import SkappForecast from './components/SkappForecast/SkappForecast';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SkappError404 from './components/SkappError404/SkappError404';
import SkappDetail from './components/SkappDetail/SkappDetail';
import SettingsContext from './utils/SkappContexts';

class App extends Component {

  state = {
    metric: true, // False means Imperial Units
    light: true // False means Dark Theme
  }

  updateSettings = (option) => {
    this.setState((prevState) => {
      return {
        [option]: !prevState[option]
      }
    });
  }

  render() {
    return (
      <Router>
        <div className={styles.background}>
          <SettingsContext.Provider value={{ settings: this.state, updateSettings: this.updateSettings }}>
            <Route path='/' component={SkappBar} />
            <Switch>
              <Route exact path='/' component={SkappHome} />
              <Route exact path='/forecast' component={SkappForecast} />
              <Route path='/details' component={SkappDetail} />
              <Route component={SkappError404} />
            </Switch>
          </SettingsContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
