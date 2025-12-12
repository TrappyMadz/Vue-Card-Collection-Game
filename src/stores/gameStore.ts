import { defineStore } from 'pinia'
import { type Pack, Rarity } from '../data/Cards'
import { reactive, ref } from 'vue'
import type { CardType } from '../data/Cards'

const pick = (array: CardType[]): CardType => {
  const randomIndex = Math.floor(Math.random() * array.length)
  const pickedCard = array[randomIndex]
  if (!pickedCard) {
    throw new Error('Impossible de piocher, le tableau est vide !')
  }
  return pickedCard
}

export const store = defineStore('gameManager', () => {
  const inventory = reactive(new Set<number>())
  const currentDraft = ref<CardType[]>([])
  const lastNewCards = ref(new Set<number>())

  function unlockCard(cardId: number) {
    if (inventory.has(cardId)) {
      return false
    }

    inventory.add(cardId)
    return true
  }

  function generateBooster(pack: Pack) {
    const cards = pack.cards
    const commons = cards.filter((card) => card.rarity === Rarity.COMMON)
    const uncommons = cards.filter((card) => card.rarity === Rarity.UNCOMMON)
    const legendaries = cards.filter((card) => card.rarity === Rarity.LEGENDARY)

    return [pick(commons), pick(uncommons), pick(legendaries)]
  }

  function openPack(pack: Pack) {
    const newCards = generateBooster(pack)
    lastNewCards.value.clear()
    currentDraft.value = newCards
    newCards.forEach((card) => {
      if (!card.id) {
        return // Les cartes que le joueur peu obtenir ont toujours un id !
      }
      if (!inventory.has(card.id)) {
        lastNewCards.value.add(card.id)
      }
      unlockCard(card.id)
    })
  }

  function closeBooster() {
    currentDraft.value = []
  }

  return {
    inventory,
    currentDraft,
    lastNewCards,
    openPack,
    closeBooster,
  }
})
