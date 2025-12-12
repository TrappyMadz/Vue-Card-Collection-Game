<script setup lang="ts">
import Card from '@/components/Card.vue'
import Booster from '../components/Booster.vue'
import { packs, type Pack } from '@/data/Cards'
import { store } from '@/stores/gameStore'

const gameStore = store()
const handleOpenPack = (pack: Pack) => {
  gameStore.openPack(pack)
}
</script>

<template>
  <div v-for="pack in packs" :key="pack.id" class="booster-container">
    <Booster
      title="Doodlemon"
      :booster-img="pack.img"
      :booster-name="pack.name"
      @click="handleOpenPack(pack)"
    ></Booster>
  </div>

  <div v-if="gameStore.currentDraft.length > 0" class="opening-zone">
    <h2>Nouveau tirage :</h2>
    <div class="card-list">
      <Card v-for="(card, index) in gameStore.currentDraft" :key="index" :card="card">
        <span v-if="gameStore.inventory.has(card.id)" class="badge">Nouveau !</span>
      </Card>
    </div>
  </div>
</template>

<style scoped></style>
