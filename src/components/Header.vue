<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/boosters">Boosters</a>
        </li>
        <li>
          <a href="/collection">Collection</a>
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
