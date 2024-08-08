import {randomInt} from '../../utils/randomizer';
import getPlayerAttacks from './getPlayerAttacks';

export default function selectPlayersOrder(players: Array<PokeCard | ICard>) {
  const challenger1 = getPlayerAttacks(players[0]);
  const challenger2 = getPlayerAttacks(players[1]);

  const orderAttack = [
    {dice: randomInt(1, 99), player: challenger1},
    {dice: randomInt(1, 99), player: challenger2},
  ];

  // sets the higher number as the first attack
  orderAttack.sort((a, b) => b.dice - a.dice);
  return [orderAttack[0].player, orderAttack[1].player];
}
