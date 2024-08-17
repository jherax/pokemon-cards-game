import {type ReactNode} from 'react';

import {useStyles} from './ShowError.styled';

function ShowError({hasError, message, children}: ShowErrorProps) {
  const classes = useStyles();
  return hasError ? (
    <output className={classes.error}>{message}</output>
  ) : (
    <>{children}</>
  );
}

export default ShowError;

export type ShowErrorProps = Readonly<{
  hasError: boolean;
  message: string;
  children: ReactNode;
}>;
