import React, { Component } from 'react';
//import { Container, Row, Col } from 'react-bootstrap';
import SkappBar from './components/SkappBar/SkappBar';
import styles from './Skapp.module.scss';
import SkappHome from './components/SkappHome/SkappHome';
import SkappForecast from './components/SkappForecast/SkappForecast';
import { getDetail, getForecast } from './utils/api';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SkappError404 from './components/SkappError404/SkappError404';
import SkappDetail from './components/SkappDetail/SkappDetail';

class App extends Component {
  citySubmit = (city) => {
    alert(city);// Here will go the Fetch call to OpenWeather API
  }
  render() {
    return (
       <Router>
         <div className={styles.background}>
           <SkappBar citySubmit={this.citySubmit} />
           <Switch>
             <Route exact path='/' component={SkappHome}/>
             <Route exact path='/forecast' component={SkappForecast} />
             <Route path='/detail' component={SkappDetail} />
             <Route component={SkappError404} />
           </Switch>
         </div>
       </Router>
    );
  }
}

export default App;
