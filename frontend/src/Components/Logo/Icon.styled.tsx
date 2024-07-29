import {createUseStyles} from 'react-jss';

type StyleProps = {
  bg: string;
  size: IconSize;
  boxShadow?: boolean;
};

export type IconSize = keyof typeof SIZES;

export const SIZES = {
  xsmall: '17px',
  small: '35px',
  medium: '75px',
  big: '150px',
};

export const useStyles = createUseStyles({
  container: {
    display: 'inline-block',
    color: ({bg}: StyleProps) => bg,
    textAlign: 'center',
  },
  icon: {
    borderRadius: '100%',
    height: ({size}: StyleProps) => SIZES[size],
    width: ({size}: StyleProps) => SIZES[size],
    margin: '0 2px',
    display: 'inline-block',
    background: ({bg}: StyleProps) => bg,
    boxShadow: (props: StyleProps) => props.boxShadow && `0 0 10px ${props.bg}`,
  },
  hoverIcon: {
    transition: '0.2s all',
    '&:hover': {
      filter: 'saturate(200%)',
      transform: 'scale(1.1)',
      cursor: 'pointer',
    },
  },
  img: {
    height: '60%',
    width: '60%',
    margin: '20%',
  },
  text: {
    padding: '3px',
  },
});
