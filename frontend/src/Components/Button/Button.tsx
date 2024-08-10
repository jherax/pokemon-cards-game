import {useStyles} from './Button.styled';

const Button = (props: ButtonProps) => {
  const {text, onClick, color = '#ed1d25', hide = false} = props;
  const classes = useStyles({color, hide});
  const disabled = props.disabled || false;

  return (
    <div className={classes.container}>
      <button className={classes.button} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

export default Button;

export type ButtonProps = Readonly<{
  text: string;
  onClick: () => void;
  disabled?: boolean;
  color?: string;
  hide?: boolean;
}>;
