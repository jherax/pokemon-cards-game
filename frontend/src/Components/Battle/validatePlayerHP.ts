import type {CardPlayer} from './getPlayerAttacks';

function validatePlayerHP(player: CardPlayer, playersMoves: string[]) {
  // eslint-disable-next-line curly
  if (player.hp > 0) return true;
  const move = `"${player.name}" is not a valid card for attacking.`;
  playersMoves.push(move);
  return false;
}

export default validatePlayerHP;
