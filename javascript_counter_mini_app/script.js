let count = 0;
let countValue = document.querySelector('#countValue');

function minusFunction() {
    count--;
    countValue.textContent = count;
}

function plusFunction() {
    count++;
    countValue.textContent = count;
}