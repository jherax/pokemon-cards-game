import {type ReactNode} from 'react';

import {useStyles} from './H2.styled';

const H2 = (props: H2Props) => {
  const {children, text, color = '#4e5761', width = '100%'} = props;
  const classes = useStyles({color, width});

  return (
    <h2 className={classes.h2}>
      {children} {text}
    </h2>
  );
};

export default H2;

export type H2Props = Readonly<{
  text: string;
  color?: string;
  width?: string;
  children?: ReactNode;
}>;
