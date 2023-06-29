<script setup>
import { useRoute, useRouter, RouterView } from 'vue-router'; 
import cars from '../data/cars.json' 

const route = useRoute();   // route is for get route information

const router = useRouter(); // router is for changing or mutating route

const showContact = () => {
    if (car.id === 4) return;
    return router.push(`/cars/${car.id}/contact`);
}

const car = cars.find(car => car.id === parseInt(route.params.id));
</script>

<template>
    <main>
        <div v-if="car">
            <h1>Car View</h1>
            <p>{{ car.name }}</p>
            <p>{{ car.price }}</p>
            <p>{{ car.year }}</p>

            <button @click="showContact" type="button">Click For Contact</button>

            <RouterView />
        </div>
        <div v-else>
            <h1>No Car found...</h1>
        </div>
    </main>
</template>