import {Fragment} from 'react/jsx-runtime';
import {Img} from 'react-image';
import {Link, Navigate, useLocation, useParams} from 'react-router-dom';

import Button from '../../Components/Button/Button';
import Loading from '../../Components/Loader/Loading';
import Icon from '../../Components/Logo/Icon';
import FlexSkeleton from '../../Components/Skeleton/FlexSkeleton';
import Title from '../../Components/Title/Title';
import usePokemonCardsType from '../../Hooks/usePokemonCardsType';
import {useStyles} from './styled';

const PokemonCardsType = () => {
  const {type = 'null'} = useParams();
  const {pathname} = useLocation();
  const classes = useStyles();

  const {
    title: {bg, img},
    cards,
    isFinal,
    isLoading,
    loadNextPage,
  } = usePokemonCardsType(type as PokeTypesName);

  if (!img || type === 'null') {
    return <Navigate to='/' replace={true} />;
  }
  if (!cards.length) {
    return <Loading color={bg} middle />;
  }

  return (
    <Fragment>
      <Title
        showSearchBar
        title={`${type} type Pokémon`}
        text='Select your favorite Pokémon...'
        color={bg}
      >
        <Icon name={type} img={img} bg={bg} size='medium' />
      </Title>

      <ul className={classes.ul}>
        {cards.map(({id, name, imageUrl}) => (
          <li key={id} className={classes.li}>
            <Link to={`${pathname}/${id}`}>
              <Img
                src={imageUrl}
                loader={<FlexSkeleton count={10} />}
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

export default PokemonCardsType;
