import posed from 'react-pose'

const Box = posed.div({
  begin: {
    y: -150,
    opacity: 0,
    transition: {
      y: { type: 'spring', stiffness: 100 }
    }
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      y: { type: 'spring', stiffness: 100 }
    }
  }
});

export { Box }