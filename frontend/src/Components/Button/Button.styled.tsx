import {createUseStyles} from 'react-jss';

type StyleProps = {
  color: string;
  hide: boolean;
  align: 'center' | 'left' | 'right';
};

export const useStyles = createUseStyles({
  container: {
    paddingTop: '25px',
    paddingBottom: '50px',
    textAlign: ({align}: StyleProps) => align,
    visibility: ({hide}: StyleProps) => (hide ? 'hidden' : 'visible'),
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
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    '&:not(:disabled):hover': {
      background: ({color}: StyleProps) => color,
      color: '#fff',
    },
  },
});
