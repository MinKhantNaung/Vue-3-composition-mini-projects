<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import quizes from '../data/quizes.json'
import QuizHeader from '../components/QuizHeader.vue'
import Question from '../components/Question.vue';

const route = useRoute();

const quiz = quizes.find(quiz => quiz.id === parseInt(route.params.id));

const currentQuestionIndex = ref(0);

const questionStatus = computed(() => {
    return `${currentQuestionIndex.value}/${quiz.questions.length}`;
})

const barPercentage = computed(() => {
    return `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`;
})

// get option result from Question.vue(child component) with emit
const numberOfCorrectAnswers = ref(0);

const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
        numberOfCorrectAnswers.value++;
    }
    currentQuestionIndex.value++;
}
</script>

<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
        <Question @selectOption="onOptionSelected" :question="quiz.questions[currentQuestionIndex]" />
        <button @click="currentQuestionIndex++">Next Question >></button>
    </div>
</template>