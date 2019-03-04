import React, { Component } from 'react'
//import { Container, Row, Col } from 'react-bootstrap'
import SkappBar from './components/SkappBar/SkappBar'
import styles from './Skapp.module.scss'
import SkappHome from './components/SkappHome/SkappHome'
import SkappForecast from './components/SkappForecast/SkappForecast'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SkappError from './components/SkappError/SkappError'
import SkappDetail from './components/SkappDetail/SkappDetail'
import SettingsContext from './utils/SkappContexts'

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
              <Route exact path='/city-not-found' render={(props) => <SkappError
                {...props}
                icon='youtube_searched_for'
                messages={{
                  h1: 'OH NO!',
                  h2: `CITY NOT FOUND`,
                  h3: `Sorry, We couldn't find weather information about your city. Is it possible that you have written it wrong?`
                }}
                buttonIcon='cloud_done'
                buttonText='TRY AGAIN' />} />
              <Route render={(props) => <SkappError
                {...props}
                icon='cloud_off'
                messages={{
                  h1: 'OOPS!',
                  h2: 'PAGE NOT FOUND',
                  h3: 'The page you are looking for might have been removed, had its name changed or is temporarily unavailable'
                }}
                buttonIcon='cloud_done'
                buttonText='BACK TO HOME' />} />
            </Switch>
          </SettingsContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App
