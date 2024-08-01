import {initialGlobalState} from '../Providers/initialGlobalState';

declare global {
  export type GobalState = {
    localTypes: {
      [key in keyof (typeof initialGlobalState)['localTypes']]: {
        bg: string;
        img: string;
      };
    };
    cardsByType: Record<PokeTypesName, PokeCardsByType>;
    cardsById: Record<string, PokeCard>;
  };

  export type AppGlobalContext = Readonly<{
    globalState: GobalState;
    setGlobalState: (data: Partial<GobalState>) => void;
  }>;

  export type IconSize = 'small' | 'xsmall' | 'medium' | 'big';

  export type PokeTypesName = keyof GobalState['localTypes'];

  export type PokeCardsByType = {
    id: string;
    title: GobalState['localTypes']['Unknown'];
    cards: PokeCard[];
    page: number;
    pageSize: number;
    isFinal: boolean;
    moreLoading?: boolean;
  };

  export type PokeCard = {
    id: string;
    name: string;
    nationalPokedexNumber: number;
    imageUrl: string;
    imageUrlHiRes: string;
    types: PokeTypesName[];
    supertype: string;
    subtype: string;
    evolvesFrom?: string;
    ability?: PokeAbility;
    ancientTrait?: {
      name: string;
      text: string;
    };
    hp: string; // Number with symbols
    retreatCost?: PokeTypesName[];
    convertedRetreatCost: number;
    number: string;
    artist: string;
    rarity: string;
    series: string;
    set: string;
    setCode: string;
    text?: string[];
    attacks: PokeAttack[];
    resistances?: PokeWeakResist[];
    weaknesses?: PokeWeakResist[];
  };

  export type PokeAbility = {
    name: string;
    text: string;
    type: string;
  };

  export type PokeAttack = {
    cost: PokeTypesName[];
    name: string;
    text: string;
    damage: string; // '10+', '30×', '| 60', '| 10×'
    convertedEnergyCost: number;
  };

  export type PokeWeakResist = {
    type: string;
    value: string; // '×2', '-20'
  };

  export type PokeCardDetailType = {
    index: string;
    name: PokeTypesName;
    img: string;
    bg: string;
    size: IconSize;
    text?: string;
  };

  export interface PokeCardDetailAttack extends PokeAttack {
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

  export type PokeCardDetail = {
    svgImage: string;
    title: string;
    subtitle: string;
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
}

// THIS IS NECESSARY
export {};
