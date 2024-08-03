import {Fragment} from 'react/jsx-runtime';
import {Img} from 'react-image';
import Skeleton from 'react-loading-skeleton';
import {Link, Navigate, useParams} from 'react-router-dom';

import Button from '../../Components/Button/Button';
import Loading from '../../Components/Loader/Loading';
import Icon from '../../Components/Logo/Icon';
import Title from '../../Components/Title/Title';
import usePokemonCardsName from '../../Hooks/usePokemonCardsName';
import {useStyles} from './styled';

const PokemonCardsName = () => {
  const {name = 'null'} = useParams();
  const classes = useStyles();

  const {
    title: {bg, img},
    cards,
    isFinal,
    isLoading,
    loadNextPage,
  } = usePokemonCardsName(name);

  if (name === 'null') {
    return <Navigate to='/error404' replace={true} />;
  }
  if (!cards.length) {
    return <Loading color={bg} middle />;
  }

  return (
    <Fragment>
      <Title
        title={`Matched Pokémons`}
        text='Select your favorite Pokémon...'
        color={bg}
      >
        {img && <Icon name='' img={img} bg={bg} size='medium' />}
      </Title>

      <ul className={classes.ul}>
        {cards.map(({id, name, imageUrl}) => (
          <li key={id} className={classes.li}>
            <Link to={`/cards/${id}`}>
              <Img
                src={imageUrl}
                loader={<Skeleton />}
                className={classes.img}
                alt={name}
              />
            </Link>
          </li>
        ))}
      </ul>

      {isLoading && <Loading color={bg} />}
      <Button
        color={bg}
        onClick={loadNextPage}
        hide={isLoading || isFinal}
        text='Load more cards...'
      />
    </Fragment>
  );
};

export default PokemonCardsName;