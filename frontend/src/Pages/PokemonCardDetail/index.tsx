import {useState} from 'react';
import {Img} from 'react-image';
import Skeleton from 'react-loading-skeleton';
import {Navigate, useParams} from 'react-router-dom';

import Button from '../../Components/Button/Button';
import CardOptions from '../../Components/CardOptions/CardOptions';
import Loading from '../../Components/Loader/Loading';
import Icon from '../../Components/Logo/Icon';
import Title from '../../Components/Title/Title';
import usePokemonDetail from '../../Hooks/usePokemonDetail';
import {useStyles} from './styled';

const PokemonCardDetail = () => {
  const {id = 'null'} = useParams();
  const {card, resolved} = usePokemonDetail(id);
  const [hideOptions, setHideOptions] = useState(false);
  const classes = useStyles();

  if (!card && !resolved) {
    return <Loading middle />;
  }
  if (!card && resolved) {
    return <Navigate to='/error404' replace={true} />;
  }

  const {svgImage, title, subtitle, image, types} = card;
  const color = '#4e5761';

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
          <Button
            color={color}
            text='View Options'
            hide={!hideOptions}
            onClick={() => setHideOptions(!hideOptions)}
          />
        </div>
        <div className={classes.right}>
          <CardOptions
            card={card}
            edit={false}
            color={color}
            hideOptions={hideOptions}
            onClickOption={() => setHideOptions(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonCardDetail;
