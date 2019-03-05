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

const UL = posed.ul({
  begin: {
    y: 150,
    opacity: 0,
    transition: {
      y: { type: 'spring', stiffness: 100 }
    }
  },
  end: {
    y: 0,
    opacity: 1,
    beforeChildren: true,
    transition: {
      y: { duration: 500, ease: 'backInOut' }
    },
    staggerChildren: 250
  }
});

const LI = posed.li({
  begin: {
    y: -20,
    opacity: 0,
    transition: {
      y: { type: 'spring', stiffness: 100 }
    }
  },
  end: {
    y: 0,
    opacity:1,
    transition: {
      y: { type: 'spring', stiffness: 100 }
    }
  }
});

export { Box, UL, LI }