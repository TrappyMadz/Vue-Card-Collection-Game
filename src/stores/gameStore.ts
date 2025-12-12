import { defineStore } from 'pinia'
import { cards, Rarity } from '../data/Cards'
import { reactive } from 'vue'
import type { Card } from '../data/Cards'

const pick = (array: Card[]): Card => {
  const randomIndex = Math.floor(Math.random() * array.length)
  const pickedCard = array[randomIndex]
  if (!pickedCard) {
    throw new Error('Impossible de piocher, le tableau est vide !')
  }
  return pickedCard
}

export const store = defineStore('gameManager', () => {
  const inventory = reactive(new Set<number>())

  function unlockCard(cardId: number) {
    if (inventory.has(cardId)) {
      return false
    }

    inventory.add(cardId)
    return true
  }

  function generateBooster() {
    const commons = cards.filter((card) => card.rarity === Rarity.COMMON)
    const uncommons = cards.filter((card) => card.rarity === Rarity.UNCOMMON)
    const legendaries = cards.filter((card) => card.rarity === Rarity.LEGENDARY)

    return [pick(commons), pick(commons), pick(commons), pick(uncommons), pick(legendaries)]
  }

  return {
    inventory,
    unlockCard,
    generateBooster,
  }
})
