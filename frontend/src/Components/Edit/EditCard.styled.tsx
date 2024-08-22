import {createUseStyles} from 'react-jss';

type StyleProps = {
  textColor: string;
};

export const useStyles = createUseStyles({
  container: {
    lineHeight: '1em',
    fontSize: '0.96em',
    color: (props: StyleProps) => props.textColor,

    '& fieldset:not(:last-child)': {
      marginBottom: '20px',
    },

    '& form button': {
      '@media (max-width: 767px)': {
        width: '100%',
      },
    },
  },

  textBold: {
    fontWeight: 'bold',
  },

  field: {
    margin: '15px 0',
    // https://cssinjs.org/jss-syntax?v=v10.10.1#property-content
    '& > label:after, & > span:after': {
      content: '" › "',
      fontWeight: 'normal',
    },
  },

  input: {
    boxSizing: 'border-box',
    width: '66px',
    margin: '0 5px',
    padding: '4px 4px 4px 7px',
    outline: 'none',
    borderRadius: '3px',
    border: '1px solid #efefef',
    color: (props: StyleProps) => props.textColor,
    transition: 'box-shadow 0.3s ease-in-out',
    fontFamily: 'inherit',
    fontSize: '0.92em',
    '&:focus': {
      boxShadow: '0 0 3px 0 rgb(83, 157, 223)',
      borderColor: 'transparent',
    },
    '&:invalid': {
      borderColor: 'hsl(0, 50%, 50%)',
      background: 'hsl(0, 50%, 98%)',
    },
  },
});
