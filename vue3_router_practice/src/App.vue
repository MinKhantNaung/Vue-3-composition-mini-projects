<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/" class="anchor">Home</RouterLink>
          <RouterLink to="/about" class="anchor">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </main>
</template>

<style scoped>
  .anchor {
    padding: 10px;
  }
</style>
