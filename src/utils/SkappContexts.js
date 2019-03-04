import React from 'react'
const SettingsContext = React.createContext({
  settings: {
    metric: true, // False means Imperial Units
    light: true // False means Dark Theme
  },
  updateSettings: () => console.warn('There was an error loading the Settings Context')
}
);

export default SettingsContext