import type {CardPlayer} from './getPlayerAttacks';

export function playTurn(
  player1: CardPlayer,
  player2: CardPlayer,
  playersMoves: string[],
): boolean {
  /**
   * This is a set of custom rules.
   * Only the damage of each attack is calculated.
   * Each attack considers weaknesses and resistances if present in the oponent's card.
   * @see https://www.pokecardhq.com/pokemon-tcg-rules-learn-how-to-play/
   */
  let damage: number;
  const p1Attack = player1.attacks.shift();

  if (!p1Attack) {
    playersMoves.push(`«${player1.name}» has no available attacks.`);
    // no attack was executed
    return false;
  }

  const p2Weakness = player2.weaknesses.find(weak =>
    player1.types.includes(weak.type),
  );

  const p2Resist = player2.resistances.find(resist =>
    player1.types.includes(resist.type),
  );

  if (p2Weakness) {
    damage = p2Weakness.operate(p1Attack.damage);
    player2.hp -= damage;
    playersMoves.push(
      `«${player1.name}» used ${p1Attack.name} causing ${p1Attack.damage} HP damage.`,
      `«${player2.name}» is weak against ${p2Weakness.type} type pokémon.`,
      `«${player2.name}» received ${damage} points of damage. HP now is ${player2.hp}.`,
    );
    return true;
  }

  if (p2Resist) {
    damage = p2Resist.operate(p1Attack.damage);
    player2.hp -= damage;
    playersMoves.push(
      `«${player1.name}» used ${p1Attack.name} causing ${p1Attack.damage} HP damage.`,
      `«${player2.name}» has resistance against ${p2Resist.type} type pokémon.`,
      `«${player2.name}» received ${damage} points of damage. HP now is ${player2.hp}.`,
    );
    return true;
  }

  // default attack
  damage = p1Attack.damage;
  player2.hp -= damage;
  playersMoves.push(
    `«${player1.name}» used ${p1Attack.name}.`,
    `«${player2.name}» received ${damage} points of damage. HP now is ${player2.hp}.`,
  );

  return true;
}
