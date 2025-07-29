const inc = document.getElementById('increment-btn');
const dec = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');
const count = document.querySelector('.count');
const changeBy = document.getElementById('change-By');

inc.addEventListener('click', () => {
    const countValue = parseInt(count.innerText);
    const changeByValue = parseInt(changeBy.value);
    count.innerText = countValue + changeByValue;
})

dec.addEventListener('click', () => {
    const countValue = parseInt(count.innerText);
    const changeByValue = parseInt(changeBy.value);
    count.innerText = countValue - changeByValue;
})

resetBtn.addEventListener('click', () => {
    count.innerText = '0';
})