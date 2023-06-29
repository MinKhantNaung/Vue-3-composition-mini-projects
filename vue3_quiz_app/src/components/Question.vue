<script setup>
const { question } = defineProps(['question']);
</script>

<template>
    <div>
        <div class="question-container">
            <p class="question">
                {{ question.text }}
            </p>
        </div>
        <div class="option-container">
            <div v-for="option in question.options" :key="option.id" class="option">
                <p class="option-label">{{ option.label }}</p>
                <p class="option-val">
                    {{ option.text }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Question */
.question-container {
    margin-top: 20px;
}

.question {
    font-size: 30px;
    margin-bottom: 20px;
}

.option {
    display: flex;
    margin-bottom: 5px;
    cursor: pointer;
}

.option-label {
    background: bisque;
    width: 50px;
    height: 50px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.option-val {
    background: rgb(222, 219, 215);
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 15px;
}
</style>