/* eslint-disable curly */
import React, {useContext, useEffect, useRef, useState} from 'react';
import {Img} from 'react-image';

import versusIcon from '../../img/vs-icon.png';
import GlobalContext from '../../Providers/GlobalContext';
import FlexSkeleton from '../Skeleton/FlexSkeleton';
import {useStyles} from './BattleCard.styled';
import {playTurn} from './playTurn';
import selectPlayersOrder from './selectPlayersOrder';
import validatePlayerHP from './validatePlayerHP';

function BattleCard({
  playerCardId,
  opponentCard,
  show = false,
  onClickVersus,
}: BattleCardProps) {
  const {globalState} = useContext(GlobalContext);
  const [moves, setMoves] = useState<string[]>([]);
  const loading = opponentCard == null; // runs only the first time
  const classes = useStyles({display: show, loading});
  const playerCard = useRef(globalState.cardsById[playerCardId]);

  useEffect(() => {
    if (opponentCard) {
      const playersMoves: string[] = [];
      const [player1, player2] = selectPlayersOrder([
        playerCard.current,
        opponentCard,
      ]);

      // validates attackable cards
      const isValidP1 = validatePlayerHP(player1, playersMoves);
      const isValidP2 = validatePlayerHP(player2, playersMoves);

      if (isValidP1 || isValidP2) {
        // order attacks by damage
        player1.attacks.sort((a, b) => b.damage - a.damage);
        player2.attacks.sort((a, b) => b.damage - a.damage);

        let played: boolean;
        // performs attacks until a player's HP is consumed
        while (player1.hp > 0 && player2.hp > 0) {
          // player1 performs the first attack
          played = playTurn(player1, player2, playersMoves);
          if (!played) break;

          if (player2.hp > 0) {
            // player1 did not kill player2, then player2 attacks back
            played = playTurn(player2, player1, playersMoves);
            if (!played) break;
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
  playerCardId: string;
  opponentCard?: ICard;
  onClickVersus?: () => void;
  show?: boolean;
}>;
