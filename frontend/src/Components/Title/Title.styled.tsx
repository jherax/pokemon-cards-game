import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    maxWidth: '1440px',
    padding: 0,
    margin: '0 auto',
  },
  hr: {
    width: '100%',
    border: 'none',
    display: 'block',
    height: '1px',
    margin: '1rem 0',
    backgroundColor: '#f5f5f5',
  },
});
