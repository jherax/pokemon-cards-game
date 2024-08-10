import {useStyles} from './Button.styled';

const Button = ({text, onClick, ...props}: ButtonProps) => {
  const {color = '#ed1d25', hide = false, align = 'center'} = props;
  const classes = useStyles({color, hide, align});
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
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  color?: string;
  hide?: boolean;
  align?: 'center' | 'left' | 'right';
}>;
