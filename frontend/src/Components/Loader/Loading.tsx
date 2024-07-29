import {useStyles} from './Loading.styled';

const Loading = ({color = '#ed1d25', middle = false}: LoadingProps) => {
  const classes = useStyles({color});
  return (
    <div className={middle ? classes.container : ''}>
      <div className={classes.div}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loading;

export type LoadingProps = Readonly<{
  color?: string;
  middle?: boolean;
}>;
