<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import quizes from '../data/quizes.json'
import QuizHeader from '../components/QuizHeader.vue'
import Question from '../components/Question.vue';

const route = useRoute();

const quiz = quizes.find(quiz => quiz.id === parseInt(route.params.id));

const currentQuestionIndex = ref(0);
</script>

<template>
    <div>
        <QuizHeader />
        <Question :question="quiz.questions[currentQuestionIndex]" />
    </div>
</template>