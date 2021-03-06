import React, { Component } from 'react'
import SkappBar from './components/SkappBar/SkappBar'
import SkappHome from './components/SkappHome/SkappHome'
import SkappForecast from './components/SkappForecast/SkappForecast'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SkappError from './components/SkappError/SkappError'
import SkappDetail from './components/SkappDetail/SkappDetail'
import SettingsContext from './utils/SkappContexts'
import posed, { PoseGroup } from 'react-pose'

const RoutesContainer = posed.div({
  enter: {
    opacity: 1, delay: 150,
    transition: {
      opacity: { ease: 'easeIn', duration: 150 }
    }
  },
  exit: {
    opacity: 0,
    transition: {
      opacity: { ease: 'easeIn', duration: 150 }
    }
  }
});

class App extends Component {

  state = {
    metric: true // False means Imperial Units
  }

  updateSettings = (option) => {
    this.setState((prevState) => {
      return {
        [option]: !prevState[option]
      }
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if ((this.state.metric !== prevState.metric)) {
      localStorage.setItem('SkappSettings', JSON.stringify(this.state));
    }
  }

  componentDidMount() {
    if (!localStorage.getItem('SkappSettings')) {
      localStorage.setItem('SkappSettings', JSON.stringify(this.state));
    } else {
      let loadedSettings = JSON.parse(localStorage.getItem('SkappSettings'));
      this.setState(loadedSettings);
    }
  }

  render() {
    return (
      <Router>
        <Route render={({ location }) => (
          <div>
            <SettingsContext.Provider value={{ settings: this.state, updateSettings: this.updateSettings }}>
              <Route path='/' component={SkappBar} key='bar' />
              <PoseGroup>
                <RoutesContainer key={location.pathname}>
                  <Switch location={location}>
                    <Route exact path='/' component={SkappHome} key='home' />
                    <Route exact path='/forecast' component={SkappForecast} key='forecast' />
                    <Route path='/details' component={SkappDetail} key='details' />
                    <Route exact path='/city-not-found' render={(props) => <SkappError
                      {...props}
                      key='city-not-found'
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
                      key='page-not-found'
                      icon='cloud_off'
                      messages={{
                        h1: 'OOPS!',
                        h2: 'PAGE NOT FOUND',
                        h3: 'The page you are looking for might have been removed, had its name changed or is temporarily unavailable'
                      }}
                      buttonIcon='cloud_done'
                      buttonText='BACK TO HOME' />} />
                  </Switch>
                </RoutesContainer>
              </PoseGroup>
            </SettingsContext.Provider>
          </div>
        )} />
      </Router>
    );
  }
}

export default App
