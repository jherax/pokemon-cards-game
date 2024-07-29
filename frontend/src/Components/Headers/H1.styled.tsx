import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
  h1: {
    fontSize: '2rem',
    color: ({color}: {color: string}) => color,
    padding: '0 5px',
    margin: '0',
  },
});
