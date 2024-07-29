import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
  h3: {
    fontSize: '1.1rem',
    fontWeight: 400,
    color: ({color}: {color: string}) => color,
    padding: '5px',
    margin: '0',
  },
});
