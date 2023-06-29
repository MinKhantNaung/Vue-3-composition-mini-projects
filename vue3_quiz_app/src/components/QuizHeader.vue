<script setup>
const { questionStatus, barPercentage } = defineProps(['questionStatus', 'barPercentage']);
</script>

<template>
    <div>
        <header>
            <h2>Question {{ questionStatus }}</h2>
            <div class="bar">
                <div :style="{ width: barPercentage }" class="completion"></div>
            </div>
        </header>
    </div>
</template>

<style scoped>
header {
    margin-top: 50px;
}

header h2 {
    font-weight: bold;
}

.bar {
    width: 300px;
    height: 50px;
    border: 3px solid bisque;
}

.bar .completion {
    height: 100%;
    width: 0%;
    background: bisque;
}
</style>