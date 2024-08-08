import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
  row: {
    minWidth: '150px',
    margin: '5px 10px 5px 0',
    padding: '0 5px 0 10px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontSize: '0.9rem',
    '& h3': {
      paddingLeft: '0',
    },
  },
});
