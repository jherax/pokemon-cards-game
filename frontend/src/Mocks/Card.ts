const CARD = {
  data: {
    id: 'ex13-1',
    name: 'Armaldo δ',
    supertype: 'Pokémon',
    subtypes: ['Stage 2'],
    hp: '110',
    types: ['Fighting', 'Metal'],
    evolvesFrom: 'Anorith',
    rules: ['This Pokémon is both Fighting Metal type.'],
    attacks: [
      {
        name: 'Delta Edge',
        cost: ['Metal', 'Colorless'],
        convertedEnergyCost: 2,
        damage: '70',
        text: "If you have any Supporter cards in play, this attack's base damage is 20 instead of 70.",
      },
      {
        name: 'Fossil Charge',
        cost: ['Fighting', 'Colorless', 'Colorless'],
        convertedEnergyCost: 3,
        damage: '50',
        text: "You may discard a Claw Fossil, Mysterious Fossil, Root Fossil, or Holon Fossil from your hand. If you do, choose 1 of your opponent's Benched Pokémon and do 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
      },
    ],
    weaknesses: [
      {
        type: 'Grass',
        value: '×2',
      },
    ],
    retreatCost: ['Colorless', 'Colorless', 'Colorless'],
    convertedRetreatCost: 3,
    set: {
      id: 'ex13',
      name: 'Holon Phantoms',
      series: 'EX',
      printedTotal: 110,
      total: 111,
      legalities: {
        unlimited: 'Legal',
      },
      ptcgoCode: 'HP',
      releaseDate: '2006/05/01',
      updatedAt: '2018/03/04 10:35:00',
      images: {
        symbol: 'https://images.pokemontcg.io/ex13/symbol.png',
        logo: 'https://images.pokemontcg.io/ex13/logo.png',
      },
    },
    number: '1',
    artist: 'Masakazu Fukuda',
    rarity: 'Rare Holo',
    nationalPokedexNumbers: [348],
    legalities: {
      unlimited: 'Legal',
    },
    images: {
      small: 'https://images.pokemontcg.io/ex13/1.png',
      large: 'https://images.pokemontcg.io/ex13/1_hires.png',
    },
    tcgplayer: {
      url: 'https://prices.pokemontcg.io/tcgplayer/ex13-1',
      updatedAt: '2024/08/15',
      prices: {
        holofoil: {
          low: 5.49,
          mid: 8.5,
          high: 11.89,
          market: 8.43,
          directLow: 5.82,
        },
        reverseHolofoil: {
          low: 4.5,
          mid: 12.74,
          high: 15.12,
          market: 11.2,
          directLow: null,
        },
      },
    },
    cardmarket: {
      url: 'https://prices.pokemontcg.io/cardmarket/ex13-1',
      updatedAt: '2024/08/15',
      prices: {
        averageSellPrice: 12.12,
        lowPrice: 1.5,
        trendPrice: 8.52,
        germanProLow: 0.0,
        suggestedPrice: 0.0,
        reverseHoloSell: 40.75,
        reverseHoloLow: 3.0,
        reverseHoloTrend: 20.33,
        lowPriceExPlus: 4.5,
        avg1: 9.99,
        avg7: 10.66,
        avg30: 7.81,
        reverseHoloAvg1: 10.0,
        reverseHoloAvg7: 28.38,
        reverseHoloAvg30: 15.23,
      },
    },
  },
};

export default CARD;
