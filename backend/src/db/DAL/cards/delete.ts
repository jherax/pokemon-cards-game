import {Card} from '../../models/Card';

export async function deleteCard(cardId: string): Promise<number> {
  const rows = await Card.destroy({
    where: {
      id: cardId,
    },
  });
  return rows;
}
