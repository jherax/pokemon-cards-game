import {type ReactNode} from 'react';

import H1 from '../Headers/H1';
import H2 from '../Headers/H2';
import Paragraph from '../Paragraph/Paragraph';
import SearchBar from '../Search/SearchBar';
import {useStyles} from './Title.styled';

const Title = ({
  children,
  title = '',
  subtitle = '',
  text = '',
  color,
  showSearchBar,
}: TitleProps) => {
  const classes = useStyles();
  const showText = !showSearchBar && !!text;

  return (
    <div className={classes.container}>
      {children}
      {title && <H1 text={title} color={color} />}
      {subtitle && <H2 text={subtitle} />}
      {showText && <Paragraph text={text} />}
      {showSearchBar && <SearchBar />}
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
  showSearchBar?: boolean;
}>;
