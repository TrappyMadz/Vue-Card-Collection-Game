<script setup lang="ts">
const props = defineProps<{
  title: string
  boosterName: string
  boosterImg: string
}>()
</script>

<template>
  <div class="booster">
    <img src="/img/booster.png" alt="booster background" class="booster-bg" />
    <div class="boosterInfos permanent-marker-regular">
      <img :src="boosterImg" alt="booster art" class="center-icon" />
      <svg viewBox="0 0 300 300" class="text-overlay">
        <defs>
          <path id="curveTop" d="M 30,140 Q 150,40 270,140" fill="transparent" />
          <path id="curveBottom" d="M 30,160 Q 150,260 270,160" fill="transparent" />
        </defs>
        <text width="300">
          <textPath href="#curveTop" startOffset="50%" text-anchor="middle" class="svg-text">
            {{ title }}
          </textPath>
        </text>
        <text width="300">
          <textPath href="#curveBottom" startOffset="50%" text-anchor="middle" class="svg-text">
            {{ boosterName }}
          </textPath>
        </text>
      </svg>
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
.booster {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: fit-content;
}

.booster-bg {
  max-height: 500px;
  width: auto;
}

img {
  max-height: 500px;
}

.boosterInfos {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 400px;
  display: flex;
  justify-content: center;
  text-align: center;
}

.center-icon {
  align-self: center;
  width: 100px;
  height: 100px;
  object-fit: contain;
  z-index: 1;
}

.text-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: visible;
}

.svg-text {
  fill: black;
  font-family: 'Permanent Marker', cursive;
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
}
</style>
