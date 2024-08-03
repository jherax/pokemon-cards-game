import {Img} from 'react-image';
import Skeleton from 'react-loading-skeleton';
import {Navigate, useParams} from 'react-router-dom';

import CardAttacks from '../../Components/Cards/CardAttack';
import CardBoxIcon from '../../Components/Cards/CardBoxIcon';
import CardInfo from '../../Components/Cards/CardInfo';
import Loading from '../../Components/Loader/Loading';
import Icon from '../../Components/Logo/Icon';
import Title from '../../Components/Title/Title';
import usePokemonDetail from '../../Hooks/usePokemonDetail';
import {useStyles} from './styled';

const PokemonCard = () => {
  const {id = 'null'} = useParams();
  const {card, resolved} = usePokemonDetail(id);
  const classes = useStyles();

  if (!card && !resolved) {
    return <Loading middle />;
  }
  if (!card && resolved) {
    return <Navigate to='/error404' replace={true} />;
  }

  const {
    svgImage,
    title,
    subtitle,
    image,
    types,
    ability,
    attacks,
    rules,
    miscellaneous,
  } = card;

  return (
    <div className={classes.container}>
      <Title title={title} subtitle={subtitle}>
        <Icon size='medium' name={svgImage} img={svgImage} />
        {types.map(({index, name, text, img, bg, size}) => (
          <Icon
            key={index}
            name={name}
            text={text}
            img={img}
            bg={bg}
            size={size}
          />
        ))}
      </Title>
      <div className={classes.row}>
        <div className={classes.left}>
          <Img src={image} loader={<Skeleton />} alt={image} />
        </div>
        <div className={classes.right}>
          {ability && <CardInfo data={ability} />}
          {rules && <CardInfo data={rules} />}
          {attacks && <CardAttacks data={attacks} />}
          <CardBoxIcon data={miscellaneous} />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
