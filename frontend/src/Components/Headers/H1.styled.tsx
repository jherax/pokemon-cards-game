import {createUseStyles} from 'react-jss';

type StyleProps = {
  color: string;
};

export const useStyles = createUseStyles({
  h1: {
    fontSize: '2rem',
    color: ({color}: StyleProps) => color,
    padding: '0 5px',
    margin: '0',
  },
});
