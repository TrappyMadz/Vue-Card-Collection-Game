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

export interface Card {
  id: number
  name: string
  type: string
  hp: number
  AttackName: string
  AttackDamage: number
  AttackEffect?: string
  description: string
  rarity: string
  img: string
}

export interface Pack {
  id: number
  name: string
  img: string
  cards: Card[]
}

export const defaultCard: Card = {
  id: 0,
  name: '',
  type: '',
  hp: 0,
  AttackName: '',
  AttackDamage: 0,
  description: '',
  img: '',
  rarity: '',
}

// Liste des packs et des cartes
export const packs: Pack[] = [
  {
    id: 1,
    name: 'Pack de Démarrage',
    img: '/img/boosterArts/starterPack.png',
    cards: [
      {
        id: 1,
        name: 'Dragon-feu',
        type: Type.HOT,
        hp: 120,
        AttackName: 'Tremoussechaud',
        AttackDamage: 100,
        description: 'Il peut faire tiédir un café sous son souffle chaud',
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
        description: 'Il a toujours faim, même quand il est en train de manger',
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
        AttackEffect: 'Provoque confusion',
        description: 'Ses chants reveillent les plus endormis',
        rarity: Rarity.UNCOMMON,
        img: '/img/cardArts/Carredoudou.png',
      },
    ],
  },
]
