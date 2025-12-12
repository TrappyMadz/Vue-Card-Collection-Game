<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/">Menu</router-link>
        </li>
        <li>
          <router-link to="/boosters">Boosters</router-link>
        </li>
        <li>
          <router-link to="/collection">Collection</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  gap: 50px;
}
a {
  text-decoration: none;
  color: black;
  filter: drop-shadow(0 0 0.5rem black);
}

a:hover {
  color: white;
}
</style>
