import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
  type: {
    fontSize: '0.8rem',
    fontWeight: 100,
    color: ({color}: {color: string}) => color,
  },
});
