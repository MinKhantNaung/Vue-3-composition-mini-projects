<template>
    <div>
        <header>
            <h2>Question 1/3</h2>
            <div class="bar">
                <div class="completion"></div>
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