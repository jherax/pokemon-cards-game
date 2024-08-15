import {initialGlobalState} from '../Providers/initialGlobalState';

declare global {
  export type GobalState = {
    localTypes: {
      [key in keyof (typeof initialGlobalState)['localTypes']]: {
        bg: string;
        img: string;
      };
    };
    cardsByName: PokeCardsByName;
    cardsByType: Record<PokemonTypes, PokeCardsByType>;
    cardsById: Record<string, ICard>;
  };

  export type AppGlobalContext = Readonly<{
    globalState: GobalState;
    setGlobalState: (data: Partial<GobalState>) => void;
  }>;

  export type IconSize = 'small' | 'xsmall' | 'medium' | 'big';

  export type PokemonTypes = Exclude<keyof GobalState['localTypes'], 'Unknown'>;

  export type ApiResponse<T> = {
    data: T[];
    page: number;
    pageSize: number;
    count: number;
    totalCount: number;
  };

  export type PokeCardsByType = {
    id: PokemonTypes;
    title: GobalState['localTypes']['Unknown'];
    cards: ICard[];
    page: number;
    pageSize: number;
    isFinal: boolean;
    isLoading?: boolean;
    lastPageFetched?: number;
  };

  export interface PokeCardsByName extends Omit<PokeCardsByType, 'id'> {
    matchName: string;
  }

  export type PokeCardDetail = {
    card: ICard;
    name: string;
    title: string;
    subtitle: string;
    svgImage: string;
    image: string;
    types: PokeCardDetailType[];
    miscellaneous: PokeCardDetailMisc[];
    ability?: {
      title: string;
      type: string;
      color: string;
      text: string[];
    };
    rules?: {
      title: string;
      text: string[];
    };
    attacks?: {
      title: string;
      attacks: PokeCardDetailAttack[];
    };
  };

  export type PokeCardDetailType = {
    index: string;
    name: PokemonTypes;
    img: string;
    bg: string;
    size: IconSize;
    text?: string;
  };

  export interface PokeCardDetailAttack extends IAttack {
    cost: PokeCardDetailType[];
  }

  export type PokeCardDetailMisc = {
    title: string;
    boxes: [
      {
        index: string;
        name?: string;
        text?: string;
        img?: string;
        bg: string;
        size: IconSize;
      },
    ];
  };
}

// THIS IS NECESSARY
export {};
