import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '10px',
  },
  row: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'strech',
    justifyContent: 'center',
    alignContent: 'center',
    '@media (max-width: 767px)': {
      flexFlow: 'column wrap',
    },
  },
  left: {
    padding: '1rem',
    flex: '1 0 0',
    '& img': {
      maxWidth: '400px',
      width: '100%',
    },
  },
  right: {
    flex: '2 0 0',
    textAlign: 'left',
  },
});
