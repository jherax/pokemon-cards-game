import {Fragment} from 'react/jsx-runtime';

import Boxes from '../Boxes/Boxes';
import FlexContainer from '../Container/FlexContainer';
import H2 from '../Headers/H2';
import H3 from '../Headers/H3';
import Paragraph from '../Paragraph/Paragraph';
import {useStyles} from './CardAttack.styled';

const CardAttacks = ({data}: CardAttackProps) => {
  const classes = useStyles();
  const {title, attacks = []} = data;

  return (
    <FlexContainer>
      <H2 text={title} />
      {attacks.map(({cost, name, text, damage}) => (
        <Fragment key={name}>
          <span className={classes.types}>
            <Boxes boxes={cost} />
          </span>
          <H3 text={name} />
          {damage && <span className={classes.damage}>{damage}</span>}
          <Paragraph text={text} />
        </Fragment>
      ))}
    </FlexContainer>
  );
};

export default CardAttacks;

export type CardAttackProps = Readonly<{
  data: {
    title: string;
    attacks?: PokeCardDetailAttack[];
  };
}>;
