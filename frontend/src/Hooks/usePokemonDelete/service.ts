import {backendService} from '../../services/axios.backend-api';

type PokeCardData = {data: {deleted: boolean}};

const deletePokemonCard = async (cardId: string): Promise<boolean> => {
  return backendService
    .delete<PokeCardData>(`/cards/delete/${cardId}`)
    .then(({data}) => data.data.deleted)
    .catch(error => {
      console.error(error);
      return false;
    });
};

export default deletePokemonCard;
