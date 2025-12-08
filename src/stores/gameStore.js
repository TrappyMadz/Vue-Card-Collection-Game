import { defineStore } from 'pinia'
import { cards, Rarity } from '../data/Cards'
import { reactive } from 'vue'

const pick = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

export const store = defineStore('gameManager', () => {
  const inventory = reactive(new Set())

  function unlockCard(cardId) {
    if (this.inventory.has(cardId)) {
      return false
    }

    this.inventory.add(cardId)
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
