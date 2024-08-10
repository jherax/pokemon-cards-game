import {useCallback, useEffect, useState} from 'react';
import {Fragment} from 'react/jsx-runtime';

import usePokemonCardRandom from '../../Hooks/usePokemonCardRandom';
import Button from '../Button/Button';
import CardAttacks from '../Cards/CardAttack';
import CardBoxIcon from '../Cards/CardBoxIcon';
import CardInfo from '../Cards/CardInfo';
import {useStyles} from './CardOptions.styled';

const SECTIONS = {
  showDetails: false,
  showBattle: false,
  showEdit: false,
  showDelete: false,
};

function CardOptions({
  card,
  edit,
  onClickOption,
  hideOptions = false,
  color = '#4e5761',
}: CardOptionsProps) {
  const [toggle, setToggle] = useState({...SECTIONS});
  const classes = useStyles({hideOptions, ...toggle});
  const {randomCard, getRandomCard} = usePokemonCardRandom();

  const {ability, attacks, rules, miscellaneous} = card;
  const cloneEdit = edit ? 'Edit' : 'Clone';

  useEffect(() => {
    if (hideOptions === false) {
      setToggle({...SECTIONS});
    }
  }, [hideOptions]);

  // paint the random card for battle!
  useEffect(() => {
    if (randomCard) {
      console.info(randomCard);
    }
  }, [randomCard]);

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
      <section className={classes.cardDetails}>
        {ability && <CardInfo data={ability} />}
        {rules && <CardInfo data={rules} />}
        {attacks && <CardAttacks data={attacks} />}
        <CardBoxIcon data={miscellaneous} />
      </section>
    </Fragment>
  );
}

export default CardOptions;

export type CardOptionsProps = Readonly<{
  card: PokeCardDetail;
  edit: boolean;
  onClickOption: () => void;
  hideOptions?: boolean;
  color?: string;
}>;
