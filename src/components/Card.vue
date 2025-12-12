<script setup lang="ts">
import { cards, Type, type Card } from '@/data/Cards'

const props = defineProps<{
  card: Card
}>()
function getCardColor(card: Card): string {
  switch (card.type) {
    case Type.ELEC:
      return 'yellow-bg'
    case Type.HOT:
      return 'red-bg'
    case Type.MIND:
      return 'purple-bg'
    default:
      return 'gray-bg'
  }
}

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000

  return x - Math.floor(x)
}

function randomPxValue(offset: number) {
  const seed = props.card.id + offset
  return Math.floor(seededRandom(seed) * 25) + 2 + 'px'
}

function randomBorder() {
  return `${randomPxValue(1)} ${randomPxValue(2)} ${randomPxValue(3)} ${randomPxValue(4)} / ${randomPxValue(5)} ${randomPxValue(6)} ${randomPxValue(7)} ${randomPxValue(8)}`
}

function randomOrientation() {
  const seed = props.card.id + 100
  return `${(seededRandom(seed) - 0.5) * 12}deg`
}

const customOrientation = randomOrientation
</script>

<template>
  <div
    class="card permanent-marker-regular"
    :class="getCardColor(props.card)"
    :style="{ borderRadius: randomBorder() }"
  >
    <div class="cardHeader">
      <p>{{ props.card.type }}</p>
      <p>{{ props.card.name }}</p>
      <p>PV : {{ props.card.hp }}</p>
    </div>
    <img
      :src="props.card.img"
      :alt="props.card.name"
      :style="{ transform: `rotate(${randomOrientation()})` }"
    />
    <div class="attackBlock">
      <div class="attackTitle">
        <p>{{ props.card.AttackName }}</p>
        <p>{{ props.card.AttackDamage }}</p>
      </div>
      <p class="attackEffect">{{ props.card.AttackEffect }}</p>
    </div>
    <div class="bot">
      <div class="cardInfo">
        <p>{{ props.card.id }}</p>
        <p>{{ props.card.rarity[0] }}</p>
      </div>

      <p>{{ props.card.description }}</p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.permanent-marker-regular {
  font-family: 'Permanent Marker', cursive;
  font-weight: 400;
  font-style: normal;
}

.yellow-bg {
  background-color: yellow;
}

.red-bg {
  background-color: red;
}

.purple-bg {
  background-color: purple;
}

.gray-bg {
  background-color: lightgray;
}

.card {
  background-image: url('/img/textured-paper.png');
  box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.5);
  background-blend-mode: normal;
  border: 10px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  position: relative;
  overflow: hidden;
}
.cardHeader {
  display: flex;
  width: 95%;
  justify-content: space-between;
}
img {
  width: 200px;
  border: 1px solid #ccc;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
}
.attackBlock {
  width: 70%;
}
.attackEffect {
  margin: 0;
  margin-top: -10px;
  padding-left: 25px;
}
.attackTitle {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.bot {
  width: 95%;
  display: flex;
  gap: 50px;
  align-items: flex-end;

  position: absolute;
  bottom: 0;
  right: 0;
}

.cardInfo {
  display: flex;
  gap: 5px;
}
</style>
