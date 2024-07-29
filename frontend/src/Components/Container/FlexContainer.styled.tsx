import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: (props: {alignItems: string}) => props.alignItems,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
