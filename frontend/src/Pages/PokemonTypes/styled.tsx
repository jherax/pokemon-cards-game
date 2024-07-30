import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
  ul: {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    listStyleType: 'none',
    maxWidth: '1440px',
    padding: 0,
    margin: '0 auto',
    '@media (max-width: 480px)': {
      '& > a ': {
        width: '100%',
      },
    },
  },
  li: {
    margin: '1rem',
    padding: '1rem',
    borderRadius: '10px',
  },
  img: {
    maxWidth: '300px',
  },
});
