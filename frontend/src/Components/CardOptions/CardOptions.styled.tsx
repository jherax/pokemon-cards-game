import {createUseStyles} from 'react-jss';

type StyleProps = {
  hideOptions: boolean;
  showDetails: boolean;
  showBattle: boolean;
  showEdit: boolean;
  showDelete: boolean;
};

export const useStyles = createUseStyles({
  buttons: {
    display: ({hideOptions}: StyleProps) => (hideOptions ? 'none' : 'flex'),
    height: '100%',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    padding: '10px',
    gap: '50px',
    '@media (max-width: 767px)': {
      gap: '30px',
    },
    '& > div': {
      padding: '0',
    },
  },
  cardDetails: {
    display: ({showDetails}: StyleProps) => (showDetails ? 'block' : 'none'),
  },
});
