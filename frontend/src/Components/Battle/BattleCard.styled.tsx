import {createUseStyles} from 'react-jss';

type StyleProps = {
  loading: boolean;
  display: boolean;
};

export const useStyles = createUseStyles({
  cardBattle: {
    display: ({display}: StyleProps) => (display ? 'flex' : 'none'),
    flexFlow: 'row wrap',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    width: '100%',
    '@media (max-width: 767px)': {
      justifyContent: 'center',
      flexFlow: 'column wrap',
      '& > img': {
        maxWidth: '400px',
        width: '100%',
      },
    },
  },

  versusImg: {
    visibility: ({loading}: StyleProps) => (loading ? 'hidden' : 'visible'),
    alignSelf: 'center',
    height: '100%',
    '& img': {
      width: '64px',
      marginLeft: '-16px',
      '@media (max-width: 767px)': {
        display: 'none',
      },
    },
  },

  versusText: {
    display: 'none',
    '@media (max-width: 767px)': {
      display: 'inline-block',
      alignSelf: 'center',
      margin: '0 auto 20px',
      backgroundImage: `linear-gradient(
         -225deg,
         #231557 0%,
         #44107a 29%,
         #ff1361 67%,
         #fff800 100%
       )`,
      backgroundSize: '200% auto',
      backgroundClip: 'text',
      fontSize: '2rem',
      letterSpacing: '0.45rem',
      textTransform: 'uppercase',
      textFillColor: 'transparent',
      animation: '$textclip 2s linear infinite',
    },
  },

  attacks: {},

  /** @see https://cssinjs.org/jss-syntax/?v=v10.10.1 */
  '@keyframes textclip': {
    to: {
      backgroundPosition: '200% center',
    },
  },
});
