import {Fragment} from 'react/jsx-runtime';
import {Img} from 'react-image';
import Skeleton from 'react-loading-skeleton';
import {Link, Navigate, useLocation, useParams} from 'react-router-dom';

import Button from '../../Components/Button/Button';
import Loading from '../../Components/Loader/Loading';
import Icon from '../../Components/Logo/Icon';
import Title from '../../Components/Title/Title';
import CardsMock from '../../Mocks/Cards';
import {useStyles} from './styled';

const PokemonCards = () => {
  const {type} = useParams();
  const {pathname} = useLocation();
  const classes = useStyles();
  const {
    title: {bg, img},
    cards,
    isFinal,
    moreLoading,
  } = CardsMock;

  if (!img || !type) {
    return <Navigate to='/error404' replace={true} />;
  }

  const onClickNextPage = () => {
    console.info('Clicked: Load more...');
  };

  return (
    <Fragment>
      <Title
        title={`${type} type Pokémon`}
        text='Select your favorite Pokémon...'
        color={bg}
      >
        <Icon bg={bg} size='medium' name={type} img={img} />
      </Title>

      <ul className={classes.ul}>
        {cards.map(({id, name, imageUrl}) => (
          <Link to={`${pathname}/${id}`} key={id}>
            <li key={name} className={classes.li}>
              <Img
                src={imageUrl}
                loader={<Skeleton />}
                alt={name}
                className={classes.img}
              />
            </li>
          </Link>
        ))}
      </ul>

      {moreLoading && <Loading color={bg} />}
      {!moreLoading && !isFinal && (
        <Button
          color={bg}
          onClick={onClickNextPage}
          text='Load more cards...'
        />
      )}
    </Fragment>
  );
};

export default PokemonCards;
