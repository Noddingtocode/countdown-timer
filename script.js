const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const countdownDisplay = document.getElementById('countdown-display');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

let countdown;
let timeRemaining;

function startCountdown() {
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    
    timeRemaining = (hours * 3600) + (minutes * 60) + seconds;
    
    if (timeRemaining <= 0) return;
    
    clearInterval(countdown);
    countdown = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    if (timeRemaining <= 0) {
        clearInterval(countdown);
        alert('Time is up!');
        return;
    }
    
    timeRemaining--;
    
    const hrs = Math.floor(timeRemaining / 3600);
    const mins = Math.floor((timeRemaining % 3600) / 60);
    const secs = timeRemaining % 60;
    
    countdownDisplay.textContent = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function resetTimer() {
    clearInterval(countdown);
    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';
    countdownDisplay.textContent = '00:00:00';
}

startButton.addEventListener('click', startCountdown);
resetButton.addEventListener('click', resetTimer);
