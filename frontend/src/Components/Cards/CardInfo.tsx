import FlexContainer from '../Container/FlexContainer';
import H2 from '../Headers/H2';
import Paragraph from '../Paragraph/Paragraph';
import {useStyles} from './CardInfo.styled';

const CardInfo = ({data}: CardInfoProps) => {
  const {title, text = [], type = '', color = '#4e5761'} = data;
  const classes = useStyles({color});
  return (
    <FlexContainer>
      <H2 text={title} color={color}>
        {type && <span className={classes.type}>[ {type} ]</span>}
      </H2>
      {text.map((p, i) => (
        <Paragraph text={p} key={`paragraph-${i}`} />
      ))}
    </FlexContainer>
  );
};

export default CardInfo;

export type CardInfoProps = Readonly<{
  data: Card;
}>;

export type Card = {
  title: string;
  text?: string[];
  type?: string;
  color?: string;
};
