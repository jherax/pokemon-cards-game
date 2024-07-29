import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
  p: {
    marginTop: '5px',
    width: '100%',
    color: ({color}: {color: string}) => color,
    fontSize: '1rem',
    lineHeight: '1.5',
  },
});
