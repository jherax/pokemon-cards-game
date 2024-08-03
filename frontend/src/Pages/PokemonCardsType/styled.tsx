import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
  ul: {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    listStyleType: 'none',
    maxWidth: '1400px',
    padding: 0,
    margin: '0 auto',
    '@media (max-width: 767px)': {
      '& a': {
        width: '50%',
      },
    },
  },
  li: {
    margin: '0.25rem',
    padding: '0.5rem',
    transition: '0.2s all',
    '&:hover': {
      transform: 'scale(1.1)',
      cursor: 'pointer',
    },
  },
  img: {
    width: '230px',
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
});
