<script setup>
import { useRoute } from 'vue-router';
import cars from '../data/cars.json';

const route = useRoute();

const car = cars.find(car => car.id === parseInt(route.params.id));
</script>

<template>
    <div>
        <hr>
        <h2>Contact Info</h2>
        <h5>{{ car.contact.dealer }}</h5>
        <h5>{{ car.contact.number }}</h5>
    </div>
</template>
