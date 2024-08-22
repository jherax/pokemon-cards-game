import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import usePokemonDelete from '../../Hooks/usePokemonDelete';
import Button from '../Button/Button';
import BlurLayout from '../Toggle/BlurLayout';
import {useStyles} from './DeleteCard.styled';

function DeleteCard({card, textColor}: DeleteCardProps) {
  const [text, setText] = useState('Pokémon card will be removed, confirm?');
  const [button, setButton] = useState({hide: false});
  const {deleteCard} = usePokemonDelete();
  const {container} = useStyles();
  const navigate = useNavigate();

  const onDelete = () => {
    deleteCard(card).then(() => {
      setButton({hide: true});
      setText('Pokémon deleted!');
      setTimeout(() => navigate('/'), 2000);
    });
  };

  return (
    <div className={container}>
      <p>{text}</p>
      <Button
        text='Delete'
        color={textColor}
        hide={button.hide}
        onClick={onDelete}
        align='left'
      />
      <BlurLayout show={button.hide} />
    </div>
  );
}

export default DeleteCard;

export type DeleteCardProps = Readonly<{
  card: ICard;
  textColor: string;
}>;
