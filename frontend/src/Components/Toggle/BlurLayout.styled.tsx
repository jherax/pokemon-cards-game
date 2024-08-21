import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99999,
    background: 'rgba(255, 255, 255, 0.5)',
  },
  blur: {
    filter: 'blur(1px)',
  },
});
