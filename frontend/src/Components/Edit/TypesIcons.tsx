import getKeyName from '../../utils/getKeyName';
import Icon from '../Logo/Icon';

function TypesIcons({name, types, localTypes}: TypesIconsProps) {
  return (
    <>
      {types.map((type, i) => {
        const key = getKeyName(name, i);
        const {img, bg} = localTypes[type];
        return <Icon key={key} name={type} img={img} bg={bg} size='xsmall' />;
      })}
    </>
  );
}

export default TypesIcons;

export type TypesIconsProps = Readonly<{
  name: string;
  types: PokemonTypes[];
  localTypes: GobalState['localTypes'];
}>;
