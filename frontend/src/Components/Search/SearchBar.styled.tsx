import {createUseStyles} from 'react-jss';

type StyleProps = {
  color: string;
};

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    marginTop: '5px',
    width: '100%',
    fontSize: '1rem',
    lineHeight: '1.5',
    cursor: 'default',
    color: ({color}: StyleProps) => color,
  },
  input: {
    boxSizing: 'border-box',
    margin: '0 10px',
    padding: '5px',
    outline: 'none',
    borderRadius: '4px',
    border: '1px solid #efefef',
    color: ({color}: StyleProps) => color,
    transition: 'box-shadow 0.3s ease-in-out',
    fontFamily: 'inherit',
    '&:focus': {
      boxShadow: '0 0 3px 0 rgb(83, 157, 223)',
      borderColor: 'transparent',
    },
  },
  search: {
    textTransform: 'lowercase',
    background: `transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgb(123, 129, 136)' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat center right 13px`,
  },
});
