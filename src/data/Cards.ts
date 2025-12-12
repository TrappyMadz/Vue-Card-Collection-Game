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
  ELEC: 'Loupiotte',
  MIND: 'Migraine',
  FIGHT: 'Bagarre',
  PLANT: 'Naturel',
  NORMAL: 'Normalité',
  WATA: 'Bulle',
  STEEL: 'Métal',
}

export interface CardType {
  id?: number
  name: string
  type?: string
  hp?: number
  AttackName?: string
  AttackDamage?: number
  description: string
  rarity?: string
  img: string
}

export interface Pack {
  id: number
  name: string
  img: string
  cards: CardType[]
  colorIntensity: number
  colorVariation: number
}

export const defaultCard: CardType = {
  name: 'Inconnue',
  description: 'Ouvrez des boosters pour découvrir cette carte',
  img: '/img/unknownCard.png',
}

// Liste des packs et des cartes
export const packs: Pack[] = [
  {
    id: 1,
    name: 'Pack de Démarrage',
    img: '/img/boosterArts/starterPack.png',
    colorIntensity: 0.5,
    colorVariation: 290,
    cards: [
      {
        id: 1,
        name: 'Trop-Piqueur',
        type: Type.FIGHT,
        hp: 30,
        AttackName: 'Coup de tête',
        AttackDamage: 10,
        description: 'Il vit sous terre et n’aime pas trop être dérangé.',
        rarity: Rarity.COMMON,
        img: '/img/cardArts/TropPiqueur.png',
      },
      {
        id: 2,
        name: 'Mini-fantôme',
        type: Type.MIND,
        hp: 40,
        AttackName: 'Gazage',
        AttackDamage: 20,
        description: "Il est toxique, presqu'autant qu'un ex.",
        rarity: Rarity.COMMON,
        img: 'img/cardArts/MiniFantome.png',
      },
      {
        id: 3,
        name: "Boud'brin",
        type: Type.PLANT,
        hp: 30,
        AttackName: 'Lance-fleur',
        AttackDamage: 30,
        description: 'Il attaque en tirant ses propres plumes.',
        rarity: Rarity.COMMON,
        img: '/img/cardArts/BoudBrin.png',
      },
      {
        id: 4,
        name: 'Métimposteur',
        type: Type.NORMAL,
        hp: 60,
        AttackName: 'Copie',
        AttackDamage: 50,
        description: "L'imposteur est parmi nous.",
        rarity: Rarity.COMMON,
        img: '/img/cardArts/ImposteurMeta.png',
      },
      {
        id: 5,
        name: 'Mort-Pecore',
        type: Type.ELEC,
        hp: 60,
        AttackName: 'Roue Piquante',
        AttackDamage: 20,
        description: 'Il a toujours faim, même quand il est en train de manger.',
        rarity: Rarity.COMMON,
        img: '/img/cardArts/MortPecore.png',
      },
      {
        id: 6,
        name: 'Elec-Boule',
        type: Type.ELEC,
        hp: 50,
        AttackName: 'Explosion',
        AttackDamage: 100,
        description: 'Il a tendance à exploser tout seul.',
        rarity: Rarity.UNCOMMON,
        img: '/img/cardArts/ElecBoule.png',
      },
      {
        id: 7,
        name: 'Pika-What',
        type: Type.ELEC,
        hp: 60,
        AttackName: 'Surprise Rigolotte',
        AttackDamage: 90,
        description: 'Il est surpris, mais par quoi ?',
        rarity: Rarity.UNCOMMON,
        img: '/img/cardArts/PikaWhat.png',
      },
      {
        id: 8,
        name: 'Carrédoudou',
        type: Type.MIND,
        hp: 70,
        AttackName: 'Chant terrifiant',
        AttackDamage: 50,
        description: 'Ses chants reveillent les plus endormis.',
        rarity: Rarity.UNCOMMON,
        img: '/img/cardArts/Carredoudou.png',
      },
      {
        id: 9,
        name: 'Dragon-Feu',
        type: Type.HOT,
        hp: 120,
        AttackName: 'Tremoussechaud',
        AttackDamage: 100,
        description: 'Il peut faire tiédir un café sous son souffle chaud.',
        rarity: Rarity.LEGENDARY,
        img: '/img/cardArts/DragonFeu.png',
      },
      {
        id: 10,
        name: 'Martelina',
        type: Type.MIND,
        hp: 200,
        AttackName: 'Marteler',
        AttackDamage: 110,
        description: 'Elle joue au baseball en utilisant les autres pokémon comme balle.',
        rarity: Rarity.LEGENDARY,
        img: '/img/cardArts/Martelina.png',
      },
    ],
  },
  {
    id: 2,
    name: 'Pixel Perfect',
    img: '/img/boosterArts/PixelPerfect.png',
    colorIntensity: 0.7,
    colorVariation: 100,
    cards: [
      {
        id: 11,
        name: 'Duracel',
        type: Type.ELEC,
        hp: 70,
        AttackName: 'Recharge',
        AttackDamage: 10,
        description: 'Il transforme sa nourriture en éléctricité.',
        rarity: Rarity.COMMON,
        img: '/img/cardArts/Crisapile.png',
      },
      {
        id: 12,
        name: 'Pacheum',
        type: Type.ELEC,
        hp: 50,
        AttackName: 'Fatal-Statique',
        AttackDamage: 20,
        description: 'Rien ne se cache derrière ses grands yeux brillants.',
        rarity: Rarity.COMMON,
        img: '/img/cardArts/Pachirisu.png',
      },
      {
        id: 13,
        name: 'Kokoad',
        type: Type.PLANT,
        hp: 40,
        AttackName: 'Choc métal',
        AttackDamage: 80,
        description: 'Chaque noix à sa propre volonté.',
        rarity: Rarity.COMMON,
        img: '/img/cardArts/Noadcoco.png',
      },
      {
        id: 14,
        name: 'Herbe Mystère',
        type: Type.PLANT,
        hp: 60,
        AttackName: 'Zenith de Paris',
        AttackDamage: 10,
        description: 'Futur chanteur, il se représente déjà au Zenith.',
        rarity: Rarity.COMMON,
        img: '/img/cardArts/Mistherbe.png',
      },
      {
        id: 15,
        name: 'Tung Sahur',
        type: Type.FIGHT,
        hp: 30,
        AttackName: 'Coup de Batte',
        AttackDamage: 100,
        description: 'Le brainrot nous anéantiras.',
        rarity: Rarity.COMMON,
        img: '/img/cardArts/Simularbre.png',
      },
      {
        id: 16,
        name: 'Starlette',
        type: Type.WATA,
        hp: 80,
        AttackName: 'Chant doux',
        AttackDamage: 40,
        description: 'La reine de la chanson, pas très forte en combat.',
        rarity: Rarity.UNCOMMON,
        img: '/img/cardArts/Otarlette.png',
      },
      {
        id: 17,
        name: 'Tritosaure',
        type: Type.FIGHT,
        hp: 90,
        AttackName: 'Vibra-Quoi ?',
        AttackDamage: 60,
        description: "C'est un dinosaure ? Non, c'est une faute de frappe !",
        rarity: Rarity.UNCOMMON,
        img: '/img/cardArts/Tritosaure.png',
      },
      {
        id: 18,
        name: 'Moussaillon',
        type: Type.WATA,
        hp: 70,
        AttackName: 'Cookie-Lame',
        AttackDamage: 70,
        description: 'Moussaillon aime bien les cookies.',
        rarity: Rarity.UNCOMMON,
        img: '/img/cardArts/Moustillon.png',
      },
      {
        id: 19,
        name: 'Jirac',
        type: Type.STEEL,
        hp: 70,
        AttackName: 'Lance-Pomme',
        AttackDamage: 200,
        description: 'Il aime les pommes.',
        rarity: Rarity.LEGENDARY,
        img: '/img/cardArts/Jirachi.png',
      },
      {
        id: 20,
        name: 'Gardeaveugle',
        type: Type.MIND,
        hp: 130,
        AttackName: 'Trou noir',
        AttackDamage: 120,
        description: 'Elle créer des trou noirs pour proteger son dresseur...',
        rarity: Rarity.LEGENDARY,
        img: '/img/cardArts/GardeVoir.png',
      },
    ],
  },
]
