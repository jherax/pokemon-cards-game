const CARDS = {
  title: {bg: '#A0A29F', img: '/static/media/Colorless.8f2a7aaa.svg'},
  cards: [
    {
      id: 'xy0-25',
      name: "Farfetch'd",
      nationalPokedexNumber: 83,
      imageUrl: 'https://images.pokemontcg.io/xy0/25.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/xy0/25_hires.png',
      types: ['Colorless'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '70',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '25',
      artist: 'Kagemaru Himeno',
      rarity: '',
      series: 'XY',
      set: 'Kalos Starter Set',
      setCode: 'xy0',
      attacks: [
        {
          cost: ['Colorless'],
          name: 'Slash',
          text: '',
          damage: '30',
          convertedEnergyCost: 1,
        },
      ],
      resistances: [{type: 'Fighting', value: '-20'}],
      weaknesses: [{type: 'Lightning', value: '×2'}],
    },
    {
      id: 'xy0-26',
      name: 'Snorlax',
      nationalPokedexNumber: 143,
      imageUrl: 'https://images.pokemontcg.io/xy0/26.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/xy0/26_hires.png',
      types: ['Colorless'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '120',
      retreatCost: ['Colorless', 'Colorless', 'Colorless', 'Colorless'],
      convertedRetreatCost: 4,
      number: '26',
      artist: 'Naoki Saito',
      rarity: '',
      series: 'XY',
      set: 'Kalos Starter Set',
      setCode: 'xy0',
      attacks: [
        {
          cost: ['Colorless', 'Colorless', 'Colorless'],
          name: 'Rock Smash',
          text: 'Flip a coin. If heads, this attack does 30 more damage.',
          damage: '10+',
          convertedEnergyCost: 3,
        },
        {
          cost: ['Colorless', 'Colorless', 'Colorless', 'Colorless'],
          name: 'Strength',
          text: '',
          damage: '70',
          convertedEnergyCost: 4,
        },
      ],
      weaknesses: [{type: 'Fighting', value: '×2'}],
    },
    {
      id: 'xy7-98',
      name: 'M Rayquaza-EX',
      nationalPokedexNumber: 384,
      imageUrl: 'https://images.pokemontcg.io/xy7/98.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/xy7/98_hires.png',
      types: ['Colorless'],
      supertype: 'Pokémon',
      subtype: 'MEGA',
      evolvesFrom: 'Rayquaza-EX',
      hp: '220',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '98',
      artist: '5ban Graphics',
      rarity: 'Rare Ultra',
      series: 'XY',
      set: 'Ancient Origins',
      setCode: 'xy7',
      text: [
        'When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards.',
        'When 1 of your Pokémon becomes this Pokémon, heal all damage from it.',
        'When 1 of your Pokémon becomes a Mega Evolution Pokémon, your turn ends.',
      ],
      attacks: [
        {
          cost: ['Colorless', 'Colorless', 'Colorless'],
          name: 'Emerald Break',
          text: 'This attack does 30 damage times the number of your Benched Pokémon.',
          damage: '30×',
          convertedEnergyCost: 3,
        },
      ],
      resistances: [{type: 'Fighting', value: '-20'}],
      weaknesses: [{type: 'Lightning', value: '×2'}],
    },
    {
      id: 'ex14-91',
      name: 'Delcatty ex',
      nationalPokedexNumber: 301,
      imageUrl: 'https://images.pokemontcg.io/ex14/91.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/ex14/91_hires.png',
      types: ['Colorless'],
      supertype: 'Pokémon',
      subtype: 'EX',
      evolvesFrom: 'Skitty',
      ability: {
        name: 'Constrain',
        text: "Once during your turn (before your attack), you may use this power. Each player discards cards until that player has 6 cards in his or her hand. (You discard first.) This power can't be used if Delcatty ex is affected by a Special Condition.",
        type: 'Poké-Power',
      },
      hp: '90',
      convertedRetreatCost: 0,
      number: '91',
      artist: 'Shizurow',
      rarity: 'Rare Holo EX',
      series: 'EX',
      set: 'Crystal Guardians',
      setCode: 'ex14',
      text: [
        'When Pokémon-ex has been Knocked Out, your opponent takes 2 Prize cards.',
      ],
      attacks: [
        {
          cost: ['Colorless'],
          name: 'Upstream',
          text: 'Search your discard pile for all Energy cards. This attack does 10 damage times the number of Energy cards you find there. Show them to your opponent, and put them on top of your deck. Shuffle your deck afterward.',
          damage: '10×',
          convertedEnergyCost: 1,
        },
        {
          cost: ['Colorless', 'Colorless', 'Colorless'],
          name: 'Tail Slap',
          text: '',
          damage: '60',
          convertedEnergyCost: 3,
        },
      ],
      weaknesses: [{type: 'Fighting', value: '×2'}],
    },
    {
      id: 'xy0-28',
      name: 'Skitty',
      nationalPokedexNumber: 300,
      imageUrl: 'https://images.pokemontcg.io/xy0/28.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/xy0/28_hires.png',
      types: ['Colorless'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '60',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '28',
      artist: 'Shin Nagasawa',
      rarity: '',
      series: 'XY',
      set: 'Kalos Starter Set',
      setCode: 'xy0',
      attacks: [
        {
          cost: ['Colorless', 'Colorless'],
          name: 'Jump On',
          text: 'Flip a coin. If heads, this attack does 20 more damage.',
          damage: '20+',
          convertedEnergyCost: 2,
        },
      ],
      weaknesses: [{type: 'Fighting', value: '×2'}],
    },
    {
      id: 'xy0-29',
      name: 'Bidoof',
      nationalPokedexNumber: 399,
      imageUrl: 'https://images.pokemontcg.io/xy0/29.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/xy0/29_hires.png',
      types: ['Colorless'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '70',
      retreatCost: ['Colorless', 'Colorless'],
      convertedRetreatCost: 2,
      number: '29',
      artist: 'Kouki Saitou',
      rarity: '',
      series: 'XY',
      set: 'Kalos Starter Set',
      setCode: 'xy0',
      attacks: [
        {
          cost: ['Colorless', 'Colorless', 'Colorless'],
          name: 'Rollout',
          text: '',
          damage: '60',
          convertedEnergyCost: 3,
        },
      ],
      weaknesses: [{type: 'Fighting', value: '×2'}],
    },
    {
      id: 'xy0-30',
      name: 'Bunnelby',
      nationalPokedexNumber: 659,
      imageUrl: 'https://images.pokemontcg.io/xy0/30.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/xy0/30_hires.png',
      types: ['Colorless'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '60',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '30',
      artist: '5ban Graphics',
      rarity: '',
      series: 'XY',
      set: 'Kalos Starter Set',
      setCode: 'xy0',
      attacks: [
        {
          cost: ['Colorless', 'Colorless'],
          name: 'Tackle',
          text: '',
          damage: '20',
          convertedEnergyCost: 2,
        },
      ],
      weaknesses: [{type: 'Fighting', value: '×2'}],
    },
    {
      id: 'xy11-94',
      name: 'Fletchling',
      nationalPokedexNumber: 661,
      imageUrl: 'https://images.pokemontcg.io/xy11/94.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/xy11/94_hires.png',
      types: ['Colorless'],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '94',
      artist: 'TOKIYA',
      rarity: 'Common',
      series: 'XY',
      set: 'Steam Siege',
      setCode: 'xy11',
      attacks: [
        {
          cost: ['Colorless'],
          name: 'Peck',
          text: '',
          damage: '20',
          convertedEnergyCost: 1,
        },
      ],
      resistances: [{type: 'Fighting', value: '-20'}],
      weaknesses: [{type: 'Lightning', value: '×2'}],
    },
    {
      id: 'col1-1',
      name: 'Clefable',
      nationalPokedexNumber: 36,
      imageUrl: 'https://images.pokemontcg.io/col1/1.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/col1/1_hires.png',
      types: ['Colorless'],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Clefairy',
      hp: '80',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '1',
      artist: 'sui',
      rarity: 'Rare Holo',
      series: 'HeartGold & SoulSilver',
      set: 'Call of Legends',
      setCode: 'col1',
      attacks: [
        {
          cost: ['Colorless', 'Colorless'],
          name: 'Fairy Power',
          text: 'Return 1 of your Pokémon and all cards attached to it to your hand.',
          damage: '',
          convertedEnergyCost: 2,
        },
        {
          cost: ['Colorless', 'Colorless'],
          name: 'Moon Impact',
          text: '',
          damage: '40',
          convertedEnergyCost: 2,
        },
      ],
      weaknesses: [{type: 'Fighting', value: '×2'}],
    },
    {
      id: 'ex16-41',
      name: 'Vigoroth',
      nationalPokedexNumber: 288,
      imageUrl: 'https://images.pokemontcg.io/ex16/41.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/ex16/41_hires.png',
      types: ['Colorless'],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Slakoth',
      ability: {
        name: 'Strikes Back',
        text: "If Vigoroth is your Active Pokémon and is damaged by an opponent's attack (even if Vigoroth is Knocked Out), put 1 damage counter on the Attacking Pokémon.",
        type: 'Poké-Body',
      },
      hp: '70',
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      number: '41',
      artist: 'Hajime Kusajima',
      rarity: 'Uncommon',
      series: 'EX',
      set: 'Power Keepers',
      setCode: 'ex16',
      attacks: [
        {
          cost: ['Colorless', 'Colorless'],
          name: 'Ambush',
          text: 'Flip a coin. If heads, this attack does 20 damage plus 20 more damage.',
          damage: '20+',
          convertedEnergyCost: 2,
        },
      ],
      weaknesses: [{type: 'Fighting', value: '×2'}],
    },
  ],
  isFinal: false,
  moreLoading: false,
};

export default CARDS;
