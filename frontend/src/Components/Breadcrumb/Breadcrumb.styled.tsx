import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    padding: '0', // TODO: add more styles?
  },
  ul: {
    padding: '0.5em 1em',
    margin: '0 auto',
    marginBottom: '1em',
    backgroundColor: '#edeff0',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: 1,
    '&:after': {
      clear: 'both',
      content: '',
      display: 'table',
    },
  },
  li: {
    display: 'inline-block',
    margin: '0.5em 0',
    fontSize: '1rem',
    color: '#959fa5',
    '&:after': {
      display: 'inline-block',
      content: "'\\00bb'",
      margin: '0 .6em',
    },
    '& > *': {
      display: 'inline-block',
      color: '#2c3f4c',
      textDecoration: 'none',
      '&:hover': {
        color: 'red',
      },
    },
  },
  current: {
    fontSize: '0.8rem',
    '&:after': {
      content: "''",
    },
  },
});
