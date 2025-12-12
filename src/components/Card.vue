<script setup lang="ts">
import { Type, type CardType, Rarity } from '@/data/Cards'

const props = defineProps<{
  card: CardType
}>()
function getCardColor(card: CardType): string {
  switch (card.type) {
    case Type.ELEC:
      return 'yellow-bg'
    case Type.HOT:
      return 'red-bg'
    case Type.MIND:
      return 'purple-bg'
    case Type.FIGHT:
      return 'brown-bg'
    case Type.PLANT:
      return 'green-bg'
    case Type.NORMAL:
      return 'white-bg'
    case Type.WATA:
      return 'blue-bg'
    case Type.STEEL:
      return 'lightgray-bg'
    default:
      return 'gray-bg'
  }
}

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000

  return x - Math.floor(x)
}

function randomPxValue(offset: number) {
  let seed
  if (props.card.id) {
    seed = props.card.id + offset
  } else {
    seed = offset
  }
  return Math.floor(seededRandom(seed) * 25) + 2 + 'px'
}

function randomBorder() {
  return `${randomPxValue(1)} ${randomPxValue(2)} ${randomPxValue(3)} ${randomPxValue(4)} / ${randomPxValue(5)} ${randomPxValue(6)} ${randomPxValue(7)} ${randomPxValue(8)}`
}

function randomOrientation() {
  let seed
  if (props.card.id) {
    seed = props.card.id + 100
  } else {
    seed = 100
  }
  return `${(seededRandom(seed) - 0.5) * 12}deg`
}

function isUncommon(): boolean {
  return props.card.rarity === Rarity.UNCOMMON
}

function isLegendary(): boolean {
  return props.card.rarity === Rarity.LEGENDARY
}
</script>

<template>
  <div
    class="card permanent-marker-regular"
    :class="[
      getCardColor(props.card),
      { 'uncommon-artifice': isUncommon() },
      { 'legendary-artifice': isLegendary() },
    ]"
    :style="{ borderRadius: randomBorder() }"
  >
    <slot></slot>
    <div class="cardHeader">
      <p v-if="props.card.type">{{ props.card.type }}</p>
      <p class="name">{{ props.card.name }}</p>
      <p v-if="props.card.hp">PV : {{ props.card.hp }}</p>
    </div>
    <img
      :src="props.card.img"
      :alt="props.card.name"
      :style="{ transform: `rotate(${randomOrientation()})` }"
    />
    <div class="attackBlock" v-if="props.card.AttackName">
      <div class="attackTitle">
        <p>{{ props.card.AttackName }}</p>
        <p>{{ props.card.AttackDamage }}</p>
      </div>
    </div>
    <div class="bot">
      <div class="cardInfo">
        <p v-if="props.card.id">{{ props.card.id }}</p>
        <p v-if="props.card.rarity">{{ props.card.rarity[0] }}</p>
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

.brown-bg {
  background-color: brown;
}

.green-bg {
  background-color: green;
}

.white-bg {
  background-color: white;
}
.blue-bg {
  background-color: aqua;
}

.lightgray-bg {
  background-color: lightgray;
}

.gray-bg {
  background-color: gray;
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
  background-color: white;
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

.uncommon-artifice::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  right: 0;
  bottom: 0;
  width: 200%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
  background: linear-gradient(
    115deg,
    transparent 20%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0.6) 45%,
    rgba(255, 255, 255, 0) 55%,
    transparent 80%
  );

  mix-blend-mode: overlay;
  animation: irregularShine 6s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
}

.legendary-artifice {
  z-index: 1;
}

.legendary-artifice::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
  background-image: url('/img/sparkles.gif');
  mix-blend-mode: soft-light;
}

.name {
  font-size: 1.2em;
}

@keyframes irregularShine {
  0% {
    left: -100%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  40% {
    left: 100%;
    opacity: 0;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}
</style>
