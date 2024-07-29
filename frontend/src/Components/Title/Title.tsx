import {type ReactNode} from 'react';

import H1 from '../Headers/H1';
import H2 from '../Headers/H2';
import Paragraph from '../Paragraph/Paragraph';
import {useStyles} from './Title.styled';

const Title = ({
  children,
  title = '',
  subtitle = '',
  text = '',
  color,
}: TitleProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {children}
      {title && <H1 text={title} color={color} />}
      {subtitle && <H2 text={subtitle} />}
      {text && <Paragraph text={text} />}
      <hr className={classes.hr} />
    </div>
  );
};

export default Title;

export type TitleProps = Readonly<{
  title?: string;
  subtitle?: string;
  text?: string;
  color?: string;
  children?: ReactNode;
}>;
