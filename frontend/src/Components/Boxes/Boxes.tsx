import {Fragment} from 'react/jsx-runtime';

import Icon from '../Logo/Icon';
import {type IconSize} from '../Logo/Icon.styled';
import {useStyles} from './Boxes.styled';

const Boxes = ({boxes}: BoxesProps) => {
  const classes = useStyles();
  return (
    <Fragment>
      {boxes.map(
        ({index, name = '', bg = '', img = '', text = '', size = 'small'}) => (
          <Fragment key={index}>
            {img && <Icon bg={bg} size={size} name={name} img={img} />}
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
  index: string; // TODO: uuid?
  name: string;
  text: string;
  bg: string;
  img: string;
  size: IconSize;
};
