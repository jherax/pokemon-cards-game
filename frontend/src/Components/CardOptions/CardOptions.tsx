import {useCallback, useEffect, useState} from 'react';
import {Fragment} from 'react/jsx-runtime';

import usePokemonCardRandom from '../../Hooks/usePokemonCardRandom';
import BattleCard from '../Battle/BattleCard';
import Button from '../Button/Button';
import CardAttacks from '../Cards/CardAttack';
import CardBoxIcon from '../Cards/CardBoxIcon';
import CardInfo from '../Cards/CardInfo';
import ShowComponent from '../Toggle/ShowComponent';
import {useStyles} from './CardOptions.styled';

const SECTIONS = {
  showDetails: false,
  showBattle: false,
  showEdit: false,
  showDelete: false,
};

function CardOptions({
  edit,
  cardDetail,
  onClickOption,
  hideOptions = false,
  textColor: color = '#4e5761',
}: CardOptionsProps) {
  const [toggle, setToggle] = useState({...SECTIONS, showDetails: true});
  const {randomCard, getRandomCard} = usePokemonCardRandom();
  const classes = useStyles({hideOptions});

  const {ability, attacks, rules, miscellaneous} = cardDetail;
  const cloneEdit = edit ? 'Edit' : 'Clone';

  useEffect(() => {
    if (hideOptions === false) {
      setToggle({...SECTIONS});
    }
  }, [hideOptions]);

  const onDetails = useCallback(() => {
    setToggle({...SECTIONS, showDetails: true});
    onClickOption();
  }, [onClickOption]);

  const onBattle = () => {
    setToggle({...SECTIONS, showBattle: true});
    onClickOption();
    getRandomCard();
  };

  const onEdit = () => {
    setToggle({...SECTIONS, showEdit: true});
    onClickOption();
  };

  const onDelete = () => {
    setToggle({...SECTIONS, showDelete: true});
    onClickOption();
  };

  return (
    <Fragment>
      <section className={classes.buttons}>
        <Button color={color} text='View' onClick={onDetails} />
        <Button color={color} text='Battle' onClick={onBattle} />
        <Button color={color} text={cloneEdit} onClick={onEdit} disabled />
        <Button color={color} text='Delete' onClick={onDelete} hide={!edit} />
      </section>

      {/* https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/series/svp/42 */}
      <ShowComponent show={toggle.showDetails}>
        <section>
          {ability && <CardInfo data={ability} />}
          {rules && <CardInfo data={rules} />}
          {attacks && <CardAttacks data={attacks} />}
          <CardBoxIcon data={miscellaneous} />
        </section>
      </ShowComponent>

      <ShowComponent show={toggle.showBattle}>
        <BattleCard
          playerCard={cardDetail.card}
          opponentCard={randomCard}
          onClickVersus={onBattle}
        />
      </ShowComponent>
    </Fragment>
  );
}

export default CardOptions;

export type CardOptionsProps = Readonly<{
  edit: boolean;
  cardDetail: PokeCardDetail;
  onClickOption: () => void;
  hideOptions?: boolean;
  textColor?: string;
}>;
