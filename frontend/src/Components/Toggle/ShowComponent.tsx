import {type ReactNode} from 'react';

function ShowComponent(props: ShowComponentProps) {
  // eslint-disable-next-line curly
  if (!props.show) return null;
  return <>{props.children}</>;
}

export default ShowComponent;

export type ShowComponentProps = Readonly<{
  children: ReactNode;
  show?: boolean;
}>;
