<script setup>

const {quiz} = defineProps(['quiz']);

console.log(quiz)
</script>

<template>
    <div>
        <div class="card">
            <img :src="quiz.img">
            <div class="card-text">
                <h2>{{ quiz.name }}</h2>
                <p>{{ quiz.questions.length }} questions</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Card */
.card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    margin: 0 20px 35px 0;
    cursor: pointer;
}

.card img {
    width: 100%;
    height: 190px;
    margin: 0;
}

.card .card-text {
    padding: 0 5px;
}

.card .card-text h2 {
    font-weight: bold;
}
</style>