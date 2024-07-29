import {type ReactNode} from 'react';

import {useStyles} from './FlexContainer.styled';

const FlexContainer = ({
  children,
  alignItems = 'center',
}: FlexContainerProps) => {
  const classes = useStyles({alignItems});
  return <div className={classes.container}>{children}</div>;
};

export default FlexContainer;

export type FlexContainerProps = Readonly<{
  children: ReactNode;
  alignItems?: string;
}>;
