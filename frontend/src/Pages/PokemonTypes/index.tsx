import {Fragment} from 'react';
import {Link, useLocation} from 'react-router-dom';

import Loading from '../../Components/Loader/Loading';
import Icon from '../../Components/Logo/Icon';
import Title from '../../Components/Title/Title';
import usePokemonTypes from '../../Hooks/usePokemonTypes';
import PokemonLogo from '../../img/logo.png';
import {useStyles} from './styled';

const PokemonTypes = () => {
  const classes = useStyles();
  const {pathname} = useLocation();
  const {pokeTypes} = usePokemonTypes();

  if (!pokeTypes.length) {
    return <Loading middle />;
  }

  return (
    <Fragment>
      <Title text='Select your favorite type...'>
        <img src={PokemonLogo} alt='Pokémon Logo' className={classes.img} />
      </Title>

      <ul className={classes.ul}>
        {pokeTypes.map(({bg, img, name}) => (
          <Link to={`${pathname}${name}`} key={name}>
            <li
              key={name}
              className={classes.li}
              style={{background: '#fafafa'}}
            >
              <Icon
                bg={bg}
                size='big'
                name={name}
                img={img}
                key={name}
                text={name}
                skeleton
                hover
              />
            </li>
          </Link>
        ))}
      </ul>
    </Fragment>
  );
};

export default PokemonTypes;
