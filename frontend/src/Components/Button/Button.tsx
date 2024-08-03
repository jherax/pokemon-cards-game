import {useStyles} from './Button.styled';

const Button = (props: ButtonProps) => {
  const {text, onClick, color = '#ed1d25', hide = false} = props;
  const classes = useStyles({color, hide});

  return (
    <div className={classes.container}>
      <button className={classes.button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;

export type ButtonProps = Readonly<{
  text: string;
  onClick: () => void;
  color?: string;
  hide?: boolean;
}>;
