import {Img} from 'react-image';
import Skeleton from 'react-loading-skeleton';
import {Navigate, useParams} from 'react-router-dom';

import CardAttacks, {
  type CardAttackProps,
} from '../../Components/Cards/CardAttack';
import CardBoxIcon, {
  type CardBoxIconProps,
} from '../../Components/Cards/CardBoxIcon';
import CardInfo from '../../Components/Cards/CardInfo';
import Loading from '../../Components/Loader/Loading';
import Icon from '../../Components/Logo/Icon';
import {type IconSize} from '../../Components/Logo/Icon.styled';
import Title from '../../Components/Title/Title';
import CardDataMock from '../../Mocks/Card';
import {useStyles} from './styled';

const PokemonCard = () => {
  const {id} = useParams();
  const classes = useStyles();
  const {card} = CardDataMock;

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

  if (!card) {
    return <Loading middle />;
  }
  // TODO: Validate the type when error occurs
  if ((card as unknown as string) === 'Error') {
    return <Navigate to='/error404' replace={true} />;
  }

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
            size={size as IconSize}
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
          {attacks && <CardAttacks data={attacks as CardAttackProps['data']} />}

          <CardBoxIcon data={miscellaneous as CardBoxIconProps['data']} />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
