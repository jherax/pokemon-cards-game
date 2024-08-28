/**
 * @see https://github.com/PokemonTCG/pokemon-tcg-sdk-typescript
 */

export interface PokemonCard {
  id: string;
  name: string;
  custom?: boolean;
  types: string[]; // PokemonTypes

  images: {
    small: string;
    large: string;
  };

  supertype: string;
  subtypes: string[];
  hp: string; // Number with symbols
  level?: string; // Number
  evolvesFrom?: string;
  evolvesTo?: string[];
  rules?: string[];

  ancientTrait?: {
    name: string;
    text: string;
  };

  abilities?: Array<{
    name: string;
    text: string;
    type: string;
  }>;

  attacks?: Array<{
    cost: string[]; // PokemonTypes
    name: string;
    text: string;
    damage: string; // '10+', '30×', '| 60', '| 10×'
    convertedEnergyCost: number;
  }>;

  weaknesses?: IResistWeak[];
  resistances?: IResistWeak[];
  retreatCost?: string[]; // PokemonTypes
  convertedRetreatCost?: number;

  set: {
    id: string;
    name: string;
    series: string;
    images: {
      symbol: string;
      logo: string;
    };
    printedTotal: number;
    total: number;
    legalities: ILegality;
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
  };

  number: string;
  artist?: string;
  rarity: string;
  flavorText?: string;
  nationalPokedexNumbers?: number[];
  legalities: ILegality;
  regulationMark?: string;

  tcgplayer?: {
    url: string;
    updatedAt: string;
    prices: {
      normal?: IPrice;
      holofoil?: IPrice;
      reverseHolofoil?: IPrice;
      unlimitedHolofoil?: IPrice;
      '1stEditionNormal'?: IPrice;
      '1stEditionHolofoil'?: IPrice;
    };
  };

  cardmarket?: {
    url: string;
    updatedAt: string;
    prices: {
      averageSellPrice: number | null;
      lowPrice: number | null;
      trendPrice: number | null;
      germanProLow: number | null;
      suggestedPrice: number | null;
      reverseHoloSell: number | null;
      reverseHoloLow: number | null;
      reverseHoloTrend: number | null;
      lowPriceExPlus: number | null;
      avg1: number | null;
      avg7: number | null;
      avg30: number | null;
      reverseHoloAvg1: number | null;
      reverseHoloAvg7: number | null;
      reverseHoloAvg30: number | null;
    };
  };
}

interface IResistWeak {
  type: string; // PokemonTypes
  value: string; // '×2', '-20'
}

interface ILegality {
  expanded?: 'Legal' | 'Banned';
  standard?: 'Legal' | 'Banned';
  unlimited?: 'Legal' | 'Banned';
}

interface IPrice {
  low: number | null;
  mid: number | null;
  high: number | null;
  market: number | null;
  directLow: number | null;
}
