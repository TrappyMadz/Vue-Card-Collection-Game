<script setup lang="ts">
import Card from '@/components/Card.vue'
import { defaultCard, packs } from '@/data/Cards'
import { store } from '@/stores/gameStore'

const gameStore = store()
</script>

<template>
  <div v-for="pack in packs" :key="pack.id">
    <p>{{ pack.name }} :</p>
    <div v-for="card in pack.cards">
      <Card :key="card.id" class="card" :card="card" v-if="gameStore.inventory.has(card.id)"></Card>
      <Card class="card" :card="defaultCard" v-else></Card>
    </div>
  </div>
</template>

<style scoped>
.a {
  display: flex;
  gap: 50px;
}
</style>
