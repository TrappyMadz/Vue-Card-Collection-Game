// Définition des constantes
// Rareté d'une carte
export const Rarity = {
  COMMON: 'Commune',
  UNCOMMON: 'Peu-Commune',
  LEGENDARY: 'Légendaire',
}

// Types
export const Type = {
  HOT: 'Chaud',
  ELEC: 'Coup de Jus',
  MIND: 'Mal de Tête',
}

// Liste des cartes
export const cards = [
  {
    id: 1,
    name: 'Dragon-feu',
    type: Type.HOT,
    hp: 120,
    AttackName: 'Tremoussechaud',
    AttackDamage: 100,
    AttackEffect: '',
    description:
      "Il peut faire tiédir un café sous son souffle chaud. Il est souvent la cause d'une légère montée en température chez son propriètaire.",
    rarity: Rarity.LEGENDARY,
    img: '/img/cardArts/DragonFeu.png',
  },
  {
    id: 2,
    name: 'Mort-Pecore',
    type: Type.ELEC,
    hp: 70,
    AttackName: 'Roue Piquante',
    AttackDamage: 70,
    AttackEffect: '',
    description: 'Il a toujours faim, même quand il est en train de manger.',
    rarity: Rarity.COMMON,
    img: '/img/cardArts/MortPecore.png',
  },
  {
    id: 3,
    name: 'Carrédoudou',
    type: Type.MIND,
    hp: 70,
    AttackName: 'Chant terrifiant',
    AttackDamage: 10,
    AttackEffect: 'Le pokémon adverse est maintenant confus.',
    description:
      'Quand ses petit yeux luisent, il se met à chanter un solo de metal, reveillant même les gens aux sommeil le plus lourd.',
    rarity: Rarity.UNCOMMON,
    img: '/img/cardArts/Carredoudou.png',
  },
]
