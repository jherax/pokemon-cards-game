import {createUseStyles} from 'react-jss';

type StyleProps = {
  color: string;
};

export const useStyles = createUseStyles({
  container: {
    paddingTop: '25px',
    paddingBottom: '50px',
    textAlign: 'center',
  },
  button: {
    background: 'transparent',
    border: ({color}: StyleProps) => `2px solid ${color}`,
    color: ({color}: StyleProps) => color,
    cursor: 'pointer',
    fontWeight: 'bold',
    width: '50%',
    padding: '8px 16px',
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    '@media (max-width: 767px)': {
      width: '90%',
    },
    '&:hover': {
      background: ({color}: StyleProps) => color,
      color: '#fff',
    },
  },
});
