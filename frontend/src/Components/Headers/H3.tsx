import {type ReactNode} from 'react';

import {useStyles} from './H3.styled';

const H3 = ({children, text, color = '#151b22'}: H3Props) => {
  const classes = useStyles({color});

  return (
    <h3 className={classes.h3}>
      {children} {text}
    </h3>
  );
};

export default H3;

export type H3Props = Readonly<{
  text: string;
  color?: string;
  children?: ReactNode;
}>;
