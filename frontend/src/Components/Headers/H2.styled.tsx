import {createUseStyles} from 'react-jss';

type StyleProps = {
  color: string;
  width: string;
};

export const useStyles = createUseStyles({
  h2: {
    width: (props: StyleProps) => props.width,
    fontSize: '1.5rem',
    fontWeight: 300,
    color: (props: StyleProps) => props.color,
    padding: '0 5px 10px 5px',
    margin: '0',
  },
});
