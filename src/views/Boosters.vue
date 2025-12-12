<script setup lang="ts">
import Card from '@/components/Card.vue'
import type { CardType } from '@/data/Cards'
import Booster from '../components/Booster.vue'
import { packs, type Pack } from '@/data/Cards'
import { store } from '@/stores/gameStore'

const gameStore = store()
const handleOpenPack = (pack: Pack) => {
  gameStore.openPack(pack)
}

const handleCloseBoosterInterface = () => {
  gameStore.closeBooster()
}

function cardIsNew(card: CardType): boolean {
  if (card.id) {
    return gameStore.lastNewCards.has(card.id)
  }
  return false // Une carte sans id ne peu pas etre nouvelle
}
</script>

<template>
  <div class="boosterPage">
    <div v-for="pack in packs" :key="pack.id" class="booster-container">
      <Booster
        title="Doodlemon"
        :booster-img="pack.img"
        :booster-name="pack.name"
        :color-intensity="pack.colorIntensity"
        :color-variation="pack.colorVariation"
        @click="handleOpenPack(pack)"
      ></Booster>
    </div>

    <div
      v-if="gameStore.currentDraft.length > 0"
      class="opening-zone"
      @click="handleCloseBoosterInterface()"
    >
      <h2>Nouveau tirage :</h2>
      <div class="card-list">
        <div class="card-wrapper" v-for="(card, index) in gameStore.currentDraft" :key="index">
          <Card :card="card" />
          <span v-if="cardIsNew(card)" class="badge">Nouveau</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.booster-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.opening-zone {
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  padding: 0 50px 50px 50px;
  border-radius: 10px;
  animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card-list {
  display: flex;
  gap: 10px;
}

.boosterPage {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-wrapper {
  position: relative;
}

.badge {
  position: absolute;
  top: -20px;
  left: 85%;
  z-index: 300;
  background: #060161;
  background: #060161;
  background: linear-gradient(
    200deg,
    rgba(6, 1, 97, 1) 0%,
    rgba(9, 83, 186, 1) 35%,
    rgba(41, 219, 255, 1) 100%
  );
  padding: 5px;
  border-radius: 8px;
  color: white;
  animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes popIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
