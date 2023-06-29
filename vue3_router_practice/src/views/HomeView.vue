<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import carsList from '../data/cars.json'

const cars = ref(carsList);
</script>

<template>
  <main>
    <h1>Hello From Home Page</h1>
    <div class="cars">
      <RouterLink :to="`/cars/${car.id}`" v-for="car in cars" :key="car.id" class="anchor">
        {{ car.name }}
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
  .cars {
    display: flex;
    flex-wrap: wrap;
  }

  .cars .anchor {
    width: 100%;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    margin-top: 5px;
    margin-right: 10px;
    text-align: center;
  }
</style>
