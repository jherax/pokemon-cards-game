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
      // :active + :not(:active) = onClick trick
      '&:active': {
        transform: 'rotate(360deg)',
      },
      '&:not(:active)': {
        overflow: 'hidden',
        transitionDuration: '0.8s',
        transitionProperty: 'transform',
      },
      '@media (max-width: 767px)': {
        display: 'none',
      },
    },
  },

  versusText: {
    display: 'none',
    cursor: 'default',
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

  attacks: {
    boxSizing: 'border-box',
    margin: '20px 0 20px 2.7em',
    fontSize: '0.9em',
    '@media (max-width: 767px)': {
      maxWidth: '400px',
      width: '100%',
      margin: '20px 0',
      fontSize: '1em',
    },
    '& li:nth-child(odd)': {
      background: 'rgba(0, 0, 0, 0.05)',
      borderRadius: '5px',
    },
  },

  /** @see https://cssinjs.org/jss-syntax/?v=v10.10.1 */
  '@keyframes textclip': {
    to: {
      backgroundPosition: '200% center',
    },
  },
});
