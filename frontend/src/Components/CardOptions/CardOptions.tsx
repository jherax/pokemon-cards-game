import {useEffect, useState} from 'react';
import {Fragment} from 'react/jsx-runtime';

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
  color = '#4e5761',
  hideOptions = false,
  ...props
}: CardOptionsProps) {
  const [toggle, setToggle] = useState({...SECTIONS});
  const classes = useStyles({hideOptions, ...toggle});

  const cloneEdit = edit ? 'Edit' : 'Clone';
  const {ability, attacks, rules, miscellaneous} = card;

  useEffect(() => {
    if (hideOptions === false) {
      setToggle({...SECTIONS});
    }
  }, [hideOptions]);

  const onDetails = () => {
    setToggle({...SECTIONS, showDetails: true});
    props.onClickOption();
  };

  const onBattle = () => {
    setToggle({...SECTIONS, showBattle: true});
    props.onClickOption();
  };

  const onEdit = () => {
    setToggle({...SECTIONS, showEdit: true});
    props.onClickOption();
  };

  const onDelete = () => {
    setToggle({...SECTIONS, showDelete: true});
    props.onClickOption();
  };

  return (
    <Fragment>
      <section className={classes.buttons}>
        <Button color={color} text='View' onClick={onDetails} />
        <Button color={color} text='Battle' onClick={onBattle} />
        <Button color={color} text={cloneEdit} onClick={onEdit} />
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
