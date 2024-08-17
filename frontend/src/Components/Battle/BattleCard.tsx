/* eslint-disable curly */
import {useEffect, useRef, useState} from 'react';
import {Img} from 'react-image';

import versusIcon from '../../img/vs-icon.png';
import FlexSkeleton from '../Skeleton/FlexSkeleton';
import {useStyles} from './BattleCard.styled';
import {playTurn} from './playTurn';
import selectPlayersOrder from './selectPlayersOrder';
import validatePlayerHP from './validatePlayerHP';

function BattleCard({
  playerCard,
  opponentCard,
  onClickVersus,
}: BattleCardProps) {
  const [moves, setMoves] = useState<string[]>([]);
  const loading = opponentCard == null; // only 1st render
  const classes = useStyles({loading});
  const playerCardRef = useRef(playerCard);

  useEffect(() => {
    if (opponentCard) {
      const playersMoves: string[] = [];
      const [player1, player2] = selectPlayersOrder([
        playerCardRef.current,
        opponentCard,
      ]);

      // validates attackable cards
      const isValidP1 = validatePlayerHP(player1, playersMoves);
      const isValidP2 = validatePlayerHP(player2, playersMoves);

      if (isValidP1 || isValidP2) {
        // order attacks by damage
        player1.attacks.sort((a, b) => b.damage - a.damage);
        player2.attacks.sort((a, b) => b.damage - a.damage);

        let played: boolean = true;
        // performs attacks until a player's HP is consumed
        while (played && player1.hp > 0 && player2.hp > 0) {
          // player1 performs the first attack
          played = playTurn(player1, player2, playersMoves);

          if (played && player2.hp > 0) {
            // player1 did not kill player2, then player2 attacks back
            played = playTurn(player2, player1, playersMoves);
          }
        }

        const winner = player1.hp > player2.hp ? player1 : player2;
        playersMoves.push(
          `⚔️ BATTLE ENDED!`,
          `🥇 ${winner.name} wins with ${winner.hp} HP left.`,
        );
      }

      console.info({player1, player2});
      // updates the list of moves
      setMoves(playersMoves);
    }
  }, [opponentCard]);

  return (
    <section className={classes.cardBattle}>
      <h4 className={classes.versusText}> ⚒ V E R S U S </h4>
      <div className={classes.versusImg}>
        <img src={versusIcon} alt='pvp' onClick={onClickVersus} />
      </div>
      <Img
        src={opponentCard?.images.large ?? ''}
        alt={opponentCard?.name}
        loader={<FlexSkeleton count={21} />}
        width='84%'
      />
      <ul className={classes.attacks}>
        {moves.map((move, index) => (
          <li key={`player-move-${index}`}>
            <span>{move}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BattleCard;

export type BattleCardProps = Readonly<{
  playerCard: ICard;
  opponentCard?: ICard;
  onClickVersus?: () => void;
}>;
