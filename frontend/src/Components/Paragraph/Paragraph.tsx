import {useStyles} from './Paragraph.styled';

const Paragraph = ({text, color = '#7b8188'}: ParagraphProps) => {
  const classes = useStyles({color});
  return <p className={classes.p}>{text}</p>;
};

export default Paragraph;

export type ParagraphProps = Readonly<{
  text: string;
  color?: string;
}>;
