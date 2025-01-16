const progressCircle = document.getElementById('progressCircle');
const progressBlock = document.getElementById('progressBlock');
const progressValue = document.getElementById('progressValue');
const animateToggle = document.getElementById('animateToggle');
const hideToggle = document.getElementById('hideToggle');
let animationInterval = null;

// Обновление прогресса
progressValue.addEventListener('input', () => {
  const value = Math.min(100, Math.max(0, progressValue.value));
  progressCircle.style.background = `conic-gradient(#007bff 0% ${value}%, #e5e8ed ${value}% 100%)`;
});

// Переключение анимации
animateToggle.addEventListener('change', () => {
  if (animateToggle.checked) {
    let angle = 0;
    animationInterval = setInterval(() => {
      angle = (angle + 1) % 360;
      progressBlock.style.transform = `rotate(${angle}deg)`;
    }, 20);
  } else {
    clearInterval(animationInterval);
    progressBlock.style.transform = 'rotate(0deg)';
  }
});

// Переключение видимости
hideToggle.addEventListener('change', () => {
  if (hideToggle.checked) {
    progressBlock.classList.add('hidden');
  } else {
    progressBlock.classList.remove('hidden');
  }
});
