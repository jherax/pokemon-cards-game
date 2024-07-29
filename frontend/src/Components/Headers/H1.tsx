import {type ReactNode} from 'react';

import {useStyles} from './H1.styled';

const H1 = ({children, text, color = '#4e5761'}: H1Props) => {
  const classes = useStyles({color});
  return (
    <h1 className={classes.h1}>
      {children} {text}
    </h1>
  );
};

export default H1;

export type H1Props = Readonly<{
  text: string;
  color?: string;
  children?: ReactNode;
}>;
