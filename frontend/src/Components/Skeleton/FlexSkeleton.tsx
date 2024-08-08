import 'react-loading-skeleton/dist/skeleton.css';

import {createUseStyles} from 'react-jss';
import Skeleton, {type SkeletonProps} from 'react-loading-skeleton';

const useStyles = createUseStyles({
  container: {
    flex: 1,
  },
});

const FlexSkeleton = (props: SkeletonProps) => {
  const classes = useStyles();
  return <Skeleton {...props} containerClassName={classes.container} />;
};

export default FlexSkeleton;
