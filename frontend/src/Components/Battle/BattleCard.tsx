import {useContext, useEffect, useRef, useState} from 'react';
import {Img} from 'react-image';

import versusIcon from '../../img/vs-icon.png';
import GlobalContext from '../../Providers/GlobalContext';
import {type ICard} from '../../types/pokemon-tcg-v2';
import FlexSkeleton from '../Skeleton/FlexSkeleton';
import {useStyles} from './BattleCard.styled';
import selectPlayersOrder from './selectPlayersOrder';

function BattleCard({
  playerCardId,
  opponentCard,
  show = false,
}: BattleCardProps) {
  const {globalState} = useContext(GlobalContext);
  const [moves, setMoves] = useState<string[]>([]);
  const loading = opponentCard == null; // runs only the first time
  const classes = useStyles({display: show, loading});

  const playerCard = useRef(globalState.cardsById[playerCardId]);

  useEffect(() => {
    if (opponentCard) {
      console.info('playerCard:', playerCard);
      console.info('BattleCard:', opponentCard);
      const [firstPlayer, secondPlayer] = selectPlayersOrder([
        playerCard.current,
        opponentCard,
      ]);

      const player1HP = firstPlayer.hp;
      const player2HP = secondPlayer.hp;

      // performs attacks until a player's HP is consumed
      while (player1HP > 0 || player2HP > 0) {
        // attacker will serach if the opponent has a weakness
        const player2Weakness = secondPlayer.weaknesses;
        break;
      }
    }
  }, [opponentCard]);

  return (
    <section className={classes.cardBattle}>
      <h4 className={classes.versusText}> ⚒ V E R S U S </h4>
      <div className={classes.versusImg}>
        <img src={versusIcon} alt='pvp'></img>
      </div>
      <Img
        src={opponentCard?.images.large ?? ''}
        alt={opponentCard?.name}
        loader={<FlexSkeleton count={21} />}
        width='84%'
      />
      <ul className={classes.attacks}></ul>
    </section>
  );
}

export default BattleCard;

export type BattleCardProps = Readonly<{
  playerCardId: string;
  opponentCard?: ICard;
  show?: boolean;
}>;
