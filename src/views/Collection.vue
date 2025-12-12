<script setup lang="ts">
import Card from '@/components/Card.vue'
import { defaultCard, packs, type CardType } from '@/data/Cards'
import { store } from '@/stores/gameStore'

const gameStore = store()

function cardIsObtained(card: CardType): boolean {
  if (card.id) {
    return gameStore.inventory.has(card.id)
  }
  return false
}
</script>

<template>
  <div v-for="pack in packs" :key="pack.id" class="boosterBlock">
    <div class="boosterInfos">
      <img :src="pack.img" alt="pack illustration" />
      <p class="packName">{{ pack.name }} :</p>
    </div>
    <div class="cardBlock">
      <div v-for="card in pack.cards">
        <Card :key="card.id" class="card" :card="card" v-if="cardIsObtained(card)"></Card>
        <Card class="card" :card="defaultCard" v-else></Card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.boosterBlock {
  width: 100%;
  margin: 50px;
}

.cardBlock {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.boosterInfos {
  display: flex;
  margin-bottom: 20px;
  height: 75px;
  width: auto;
}
.packName {
  font-weight: bold;
  font-size: 1.5em;
}
</style>
