import {useCallback, useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import usePokemonUpdate from '../../Hooks/usePokemonUpdate';
import GlobalContext from '../../Providers/GlobalContext';
import fieldPrefix from '../../utils/fieldPrefix';
import Button from '../Button/Button';
import H3 from '../Headers/H3';
import ShowComponent from '../Toggle/ShowComponent';
import ShowError from '../Toggle/ShowError';
import {isSpecialKey, isValidKey} from './allowedKeys';
import {useStyles} from './EditCard.styled';
import getFieldNames from './getFieldNames';
import TypesIcons from './TypesIcons';
import validations, {MAX_ATTACK, MAX_HP} from './validations';

function EditCard({card, textColor}: EditCardProps) {
  const {globalState} = useContext(GlobalContext);
  const classes = useStyles({textColor});
  const navigate = useNavigate();

  const newCard = JSON.parse(JSON.stringify(card)) as ICard;
  const [fields, setFields] = useState(getFieldNames(newCard));
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [button, setButton] = useState({text: 'Save', disabled: false});
  const {updateCard} = usePokemonUpdate();

  const {ATTACK, WEAKNESS, RESISTANCE} = fieldPrefix;
  const {validateField, getErrors} = validations;
  const pokeTypes = globalState.localTypes;

  // we can use react-hook-form to validate the form
  const onSave = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();

    const errors = getErrors(fields);
    setErrors(errors);
    if (Object.keys(errors).some(key => errors[key])) {
      return;
    }

    updateCard(newCard, fields).then(c => {
      setButton({text: 'Updated!', disabled: true});
      setTimeout(() => navigate('/'), 2000);
    });
  };

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, maxLength} = e.target;
    if (value.length <= maxLength) {
      setFields(prev => ({...prev, [name]: value}));
    } else {
      e.preventDefault();
    }
    const isError = !validateField(name, value);
    setErrors(prev => ({...prev, [name]: isError}));
  }, []);

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    const first = (e.target as HTMLInputElement).value[0];
    if (!isValidKey(e.key) || (isSpecialKey(e.key) && isSpecialKey(first))) {
      e.preventDefault();
    }
  }, []);

  return (
    <section className={classes.container}>
      <form>
        <fieldset>
          <legend id='card_hp'>
            <H3 text='Hit Points' />
          </legend>
          <div className={classes.field}>
            <label htmlFor='hp' className={classes.textBold}>
              {newCard.name}
            </label>
            <span>
              <input
                type='number'
                className={classes.input}
                name='hp'
                id='hp'
                min={1}
                max={MAX_HP}
                maxLength={3}
                value={fields.hp}
                onChange={onChange}
                aria-describedby='card_hp'
                aria-required='true'
                required
              />
              {'HP'}
            </span>
            <ShowError hasError={errors['hp']} message={`Max: ${MAX_HP}`}>
              <TypesIcons
                name='poketype'
                types={newCard.types}
                localTypes={pokeTypes}
              />
            </ShowError>
          </div>
        </fieldset>

        <fieldset>
          <legend id='card_attacks'>
            <H3 text='Attacks' />
          </legend>
          {newCard.attacks?.map(attack => {
            const inputName = `${ATTACK}${attack.name}`;
            const errorMsg = `Max: ${MAX_ATTACK}`;
            return (
              <div className={classes.field} key={attack.name}>
                <label htmlFor={attack.name}>{attack.name}</label>
                <span>
                  <input
                    type='number'
                    className={classes.input}
                    name={inputName}
                    id={attack.name}
                    min={1}
                    max={MAX_ATTACK}
                    maxLength={3}
                    value={fields[inputName]}
                    onChange={onChange}
                    aria-describedby='card_attacks'
                    aria-required='true'
                    required
                  />
                </span>
                <ShowError hasError={errors[inputName]} message={errorMsg}>
                  <TypesIcons
                    name={attack.name}
                    types={attack.cost}
                    localTypes={pokeTypes}
                  />
                </ShowError>
              </div>
            );
          })}
        </fieldset>

        <ShowComponent show={!!newCard.weaknesses?.length}>
          <fieldset>
            <legend id='card_weaknesses'>
              <H3 text='Weaknesses' />
            </legend>
            {newCard.weaknesses?.map(weakness => {
              const inputName = `${WEAKNESS}${weakness.type}`;
              const errorMsg = `Must be > 0`;
              return (
                <div className={classes.field} key={weakness.type}>
                  <label htmlFor={weakness.type}>{weakness.type}</label>
                  <span>
                    <input
                      type='text'
                      className={classes.input}
                      id={weakness.type}
                      name={inputName}
                      maxLength={3}
                      pattern='(x|×|-)?\d{1,2}'
                      value={fields[inputName]}
                      onChange={onChange}
                      onKeyDown={onKeyDown}
                      aria-describedby='card_weaknesses'
                      aria-required='true'
                      required
                    />
                  </span>
                  <ShowError hasError={errors[inputName]} message={errorMsg}>
                    <TypesIcons
                      name={weakness.type}
                      types={[weakness.type]}
                      localTypes={pokeTypes}
                    />
                  </ShowError>
                </div>
              );
            })}
          </fieldset>
        </ShowComponent>

        <ShowComponent show={!!newCard.resistances?.length}>
          <fieldset>
            <legend id='card_resistances'>
              <H3 text='Resistances' />
            </legend>
            {newCard.resistances?.map(resistance => {
              const inputName = `${RESISTANCE}${resistance.type}`;
              const errorMsg = `Must be > 0`;
              return (
                <div className={classes.field} key={resistance.type}>
                  <label htmlFor={resistance.type}>{resistance.type}</label>
                  <span>
                    <input
                      type='text'
                      className={classes.input}
                      id={resistance.type}
                      name={inputName}
                      maxLength={3}
                      pattern='(x|×|-)?\d{1,2}'
                      value={fields[inputName]}
                      onChange={onChange}
                      onKeyDown={onKeyDown}
                      aria-describedby='card_resistances'
                      aria-required='true'
                      required
                    />
                  </span>
                  <ShowError hasError={errors[inputName]} message={errorMsg}>
                    <TypesIcons
                      name={resistance.type}
                      types={[resistance.type]}
                      localTypes={pokeTypes}
                    />
                  </ShowError>
                </div>
              );
            })}
          </fieldset>
        </ShowComponent>

        <Button
          color={textColor}
          text={button.text}
          disabled={button.disabled}
          onClick={onSave}
          align='left'
        />
      </form>
    </section>
  );
}

export default EditCard;

export type EditCardProps = Readonly<{
  card: ICard;
  textColor: string;
}>;
