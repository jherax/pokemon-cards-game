import {useCallback} from 'react';
import {Img} from 'react-image';
import {useNavigate} from 'react-router-dom';

import Button from '../../Components/Button/Button';
import Snorlax from '../../img/Snorlax.svg';
import {useStyles} from './styled';

const Error404 = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleBack = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div>
      <h1 className={classes.h1}>
        4<Img src={Snorlax} className={classes.img} alt='404' />4
      </h1>
      <p className={classes.p}>
        <span className={classes.span}>Opps!</span> A wild Snorlax has blocked
        your path!
      </p>
      <Button color={'#025554'} onClick={handleBack} text='GO HOME' />
    </div>
  );
};

export default Error404;
