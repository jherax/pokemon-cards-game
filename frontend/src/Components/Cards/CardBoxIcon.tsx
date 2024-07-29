import Boxes, {type Box} from '../Boxes/Boxes';
import FlexContainer from '../Container/FlexContainer';
import H3 from '../Headers/H3';
import {useStyles} from './CardBoxIcon.styles';

const CardBoxIcon = ({data}: CardBoxIconProps) => {
  const classes = useStyles();

  return (
    <FlexContainer alignItems='stretch'>
      {data.map(({title, boxes}) => (
        <div key={title} className={classes.row}>
          <H3 text={title} />
          <Boxes boxes={boxes} />
        </div>
      ))}
    </FlexContainer>
  );
};

export default CardBoxIcon;

export type CardBoxIconProps = Readonly<{
  data: Array<{
    title: string;
    boxes: Box[];
  }>;
}>;
