<script setup lang="ts">
import Card from '@/components/Card.vue'
import { cards } from '@/data/Cards'

const testCard = cards[0]
</script>

<template>
  <p>Collection works !</p>
  <div class="a">
    <Card v-for="card in cards" :card="card"></Card>
  </div>
</template>

<style scoped>
.a {
  display: flex;
  gap: 50px;
}
</style>
