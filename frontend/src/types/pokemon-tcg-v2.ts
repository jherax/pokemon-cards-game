/**
 * @see https://github.com/PokemonTCG/pokemon-tcg-sdk-typescript
 */

declare global {
  export interface ICard {
    id: string;
    name: string;
    custom?: boolean;
    types: PokemonTypes[];
    images: ICardImage;
    supertype: string;
    subtypes: string[];
    hp: string; // Number with symbols
    level?: string; // Number
    evolvesFrom?: string;
    evolvesTo?: string[];
    rules?: string[];
    ancientTrait?: IAncientTrait;
    abilities?: IAbility[];
    attacks?: IAttack[];
    weaknesses?: IResistWeak[];
    resistances?: IResistWeak[];
    retreatCost?: PokemonTypes[];
    convertedRetreatCost?: number;
    set: ISet;
    number: string;
    artist?: string;
    rarity: string;
    flavorText?: string;
    nationalPokedexNumbers?: number[];
    legalities: ILegality;
    regulationMark?: string;
    tcgplayer?: ITCGPlayer;
    cardmarket?: ICardmarket;
  }

  export interface IAbility {
    name: string;
    text: string;
    type: string;
  }

  export interface IAttack {
    cost: PokemonTypes[];
    name: string;
    text: string;
    damage: string; // '10+', '30×', '| 60', '| 10×'
    convertedEnergyCost: number;
  }

  export interface IResistWeak {
    type: PokemonTypes;
    value: string; // '×2', '-20'
  }

  export interface ISet {
    id: string;
    name: string;
    series: string;
    images: ISetImage;
    printedTotal: number;
    total: number;
    legalities: ILegality;
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
  }

  export interface IAncientTrait {
    name: string;
    text: string;
  }

  export enum Legality {
    LEGAL = 'Legal',
    BANNED = 'Banned',
  }

  export interface ILegality {
    expanded?: Legality;
    standard?: Legality;
    unlimited?: Legality;
  }

  export interface ISetImage {
    symbol: string;
    logo: string;
  }

  export interface ICardImage {
    small: string;
    large: string;
  }

  export interface ITCGPlayer {
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
  }

  export interface IPrice {
    low: number | null;
    mid: number | null;
    high: number | null;
    market: number | null;
    directLow: number | null;
  }

  export interface ICardmarket {
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
  }
}

// THIS IS NECESSARY
export {};
