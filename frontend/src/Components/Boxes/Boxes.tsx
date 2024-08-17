import {Fragment} from 'react/jsx-runtime';

import Icon from '../Logo/Icon';
import {useStyles} from './Boxes.styled';

const Boxes = ({boxes}: BoxesProps) => {
  const classes = useStyles();
  return (
    <Fragment>
      {boxes.map(
        ({index, name = '', bg = '', img = '', text = '', size = 'small'}) => (
          <Fragment key={index}>
            {img && <Icon name={name} img={img} size={size} bg={bg} />}
            {text && <span className={classes.text}>{text}</span>}
          </Fragment>
        ),
      )}
    </Fragment>
  );
};

export default Boxes;

export type BoxesProps = Readonly<{
  boxes: Box[];
}>;

export type Box = {
  index: string;
  name?: string;
  text?: string;
  img?: string;
  bg: string;
  size: IconSize;
};
