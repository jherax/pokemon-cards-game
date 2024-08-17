import {createUseStyles} from 'react-jss';

type StyleProps = {
  hideOptions: boolean;
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
    '@media (min-width: 768px)': {
      // div: button container
      '& > div button': {
        width: '70%',
      },
    },
    // div: button container
    '& > div': {
      padding: '0',
    },
  },
});
