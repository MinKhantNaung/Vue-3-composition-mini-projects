<script setup>
import { ref } from 'vue';

let count = ref(0);

// minus 
const countMinus = () => {
  count.value--;
}

// plus
const countPlus = () => {
  count.value++;
}
</script>


<template>
  <div>
    <h2>The current count is...</h2>
    <h1>{{ count }}</h1>
    <button @click="countMinus">-</button>
    <button @click="countPlus">+</button>
  </div>
</template>

<style scoped>
  div {
    background: aliceblue;
    width: 100vw;
    height: 100vh;
    text-align: center;
    padding-top: 20px;
  }

  button {
    padding: 10px 20px;
    margin-right: 10px;
    border-radius: 5px;
    background: black;
    color: white;
  }
</style>