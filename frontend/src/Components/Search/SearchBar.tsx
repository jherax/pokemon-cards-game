import {useCallback, useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import GlobalContext from '../../Providers/GlobalContext';
import {useStyles} from './SearchBar.styled';

const DEFAULT_TYPE = 'Type';

function SearchBar({color = '#7b8188'}: SearchBarProps) {
  const {type: pokeType = DEFAULT_TYPE} = useParams();
  const {globalState} = useContext(GlobalContext);
  const navigate = useNavigate();
  const classes = useStyles({color});

  const options = [DEFAULT_TYPE].concat(
    Object.keys(globalState.localTypes).filter(
      key => key !== ('Unknown' as PokeTypesName),
    ),
  );

  const onChangeType = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const pokeType = e.target.value;
      if (pokeType !== DEFAULT_TYPE) {
        navigate(`/${pokeType}`);
      }
    },
    [navigate],
  );

  const onPressEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const pokeName = (e.target as HTMLInputElement).value.trim();
      if (pokeName.length > 2 && e.key === 'Enter') {
        navigate(`/name/${pokeName.toLowerCase()}`);
      }
    },
    [navigate],
  );

  return (
    <div className={classes.container}>
      <span>Search by</span>
      <span>
        <select
          className={classes.input}
          onChange={onChangeType}
          value={pokeType}
        >
          {options.map((type, i) => (
            <option key={`type-${i}`} value={type}>
              {type}
            </option>
          ))}
        </select>
      </span>
      <span>or </span>
      <span>
        <input
          type='text'
          className={`${classes.input} ${classes.search}`}
          placeholder='search by name'
          onKeyUp={onPressEnter}
        />
      </span>
    </div>
  );
}

export default SearchBar;

export type SearchBarProps = Readonly<{
  color?: string;
}>;
