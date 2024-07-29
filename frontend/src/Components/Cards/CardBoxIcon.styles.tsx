import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
  row: {
    flex: '1 0 0',
    margin: '5px',
    minWidth: '230px',
    textAlign: 'center',
    '@media (max-width: 767px)': {
      minWidth: '150px',
    },
  },
});
