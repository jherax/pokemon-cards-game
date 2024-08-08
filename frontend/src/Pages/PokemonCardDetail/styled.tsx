import {createUseStyles} from 'react-jss';

type StyleProps = {
  hideOptions: boolean;
};

export const useStyles = createUseStyles({
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '10px',
    '@media (min-width: 512px) and (max-width: 767px)': {
      '& > div > h2': {
        order: -1,
      },
    },
  },
  row: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'strech',
    justifyContent: 'center',
    alignContent: 'center',
    '@media (max-width: 767px)': {
      flexFlow: 'column wrap',
    },
  },
  left: {
    padding: '1rem',
    flex: '1 0 0',
    '& img': {
      maxWidth: '400px',
      width: '100%',
    },
  },
  leftButtonContainer: {
    display: ({hideOptions}: StyleProps) => (hideOptions ? 'block' : 'none'),
    '& > div': {
      paddingBottom: '0',
      '& button': {
        maxWidth: '390px',
        width: '98%',
      },
    },
  },
  right: {
    flex: '1.2 0 0',
    padding: '1rem',
    textAlign: 'left',
  },
});
