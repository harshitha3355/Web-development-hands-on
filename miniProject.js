document.addEventListener('DOMContentLoaded', () => {
    const ingredientsSection = document.getElementById('ingredientsSection');
    const toggleBtn = document.getElementById('toggleIngredients');
    const startCookingBtn = document.getElementById('startCooking');
    const nextStepBtn = document.getElementById('nextStep');
    const steps = document.querySelectorAll('.step');
    const progressBar = document.querySelector('.progress');
    
    let currentStep = 0;

    toggleBtn.addEventListener('click', () => {
        ingredientsSection.classList.toggle('hidden');
        toggleBtn.textContent = ingredientsSection.classList.contains('hidden') 
            ? 'Show Ingredients' 
            : 'Hide Ingredients';
    });

    startCookingBtn.addEventListener('click', () => {
        startCookingBtn.classList.add('hidden');
        nextStepBtn.classList.remove('hidden');
        currentStep = 0;
        updateSteps();
    });

    nextStepBtn.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateSteps();
        } else {
            nextStepBtn.textContent = 'Finished!';
        }
    });

    function updateSteps() {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === currentStep);
        });
        const progress = (currentStep + 1) / steps.length * 100;
        progressBar.style.width = `${progress}%`;
    }
});