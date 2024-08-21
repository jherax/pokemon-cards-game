import {useState} from 'react';
import {Img} from 'react-image';
import {Navigate, useParams} from 'react-router-dom';

import Button from '../../Components/Button/Button';
import CardOptions from '../../Components/CardOptions/CardOptions';
import Loading from '../../Components/Loader/Loading';
import Icon from '../../Components/Logo/Icon';
import FlexSkeleton from '../../Components/Skeleton/FlexSkeleton';
import Title from '../../Components/Title/Title';
import usePokemonDetail from '../../Hooks/usePokemonDetail';
import customBorder from '../../utils/customBorder';
import {useStyles} from './styled';

const PokemonCardDetail = () => {
  const {id = 'null'} = useParams();
  const {cardDetail, resolved} = usePokemonDetail(id);
  const [hideOptions, setHideOptions] = useState(true);
  const classes = useStyles({hideOptions});

  if (!cardDetail && !resolved) {
    return <Loading middle />;
  }
  if (!cardDetail && resolved) {
    return <Navigate to='/error404' replace={true} />;
  }

  const {svgImage, name, title, subtitle, image, types} = cardDetail;
  const customCard = cardDetail.card.custom;
  const textColor = '#4e5761';

  return (
    <div className={classes.container}>
      <Title title={title} subtitle={subtitle}>
        <Icon name={name} img={svgImage} size='medium' boxShadow />
        {types.map(({index, name, text, img, bg, size}) => (
          <Icon
            key={index}
            name={name}
            text={text}
            size={size}
            img={img}
            bg={bg}
          />
        ))}
      </Title>
      <div className={classes.row}>
        <div className={classes.left}>
          <Img
            src={image}
            alt={image}
            className={customBorder(customCard)}
            loader={<FlexSkeleton count={21} />}
          />
          <div className={classes.leftButtonContainer}>
            <Button
              color={textColor}
              text='View Options'
              onClick={() => setHideOptions(false)}
            />
          </div>
        </div>
        <div className={classes.right}>
          <CardOptions
            edit={false}
            cardDetail={cardDetail}
            textColor={textColor}
            hideOptions={hideOptions}
            onClickOption={() => setHideOptions(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonCardDetail;
