import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    '& > div': {
      margin: '0 2px',
      '& button': {
        '@media (max-width: 767px)': {
          width: '100%',
        },
      },
    },
  },
});
