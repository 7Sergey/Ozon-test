const progressWrapper = document.getElementById('progress-wrapper');
const progressBar = document.querySelector('.progress-bar');
const progressValueInput = document.getElementById('progress-value');
const animateCheckbox = document.getElementById('progress-animate');
const hideCheckbox = document.getElementById('progress-hide');

let isAnimating = false;
let animationInterval;

function updateProgress(value) {
  const clampedValue = Math.max(0, Math.min(100, value)); // Restrict to range 0-100
  const offset = 377 - (377 * clampedValue) / 100; // Calculate circle arc length
  progressBar.style.strokeDashoffset = offset;
}

function toggleAnimation(isEnabled) {
  if (isEnabled) {
    if (!isAnimating) {
      isAnimating = true;
      animationInterval = setInterval(() => {
        const currentRotation = parseFloat(
          progressWrapper.style.transform
            .replace('rotate(', '')
            .replace('deg)', '') || 0
        );
        progressWrapper.style.transform = `rotate(${currentRotation + 2}deg)`;
      }, 16);
    }
  } else {
    isAnimating = false;
    clearInterval(animationInterval);
    progressWrapper.style.transform = 'rotate(0deg)';
  }
}

function toggleVisibility(isHidden) {
  progressWrapper.classList.toggle('is-hidden', isHidden);
}

progressValueInput.addEventListener('input', (e) => {
  const value = parseFloat(e.target.value) || 0;
  updateProgress(value);
});

animateCheckbox.addEventListener('change', (e) => {
  toggleAnimation(e.target.checked);
});

hideCheckbox.addEventListener('change', (e) => {
  toggleVisibility(e.target.checked);
});

// Initialize with default value
updateProgress(progressValueInput.value);
