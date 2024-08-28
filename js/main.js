let scrl = document.getElementById('scrl');

scrl.addEventListener('click' , function() {
    window.scrollTo ({
        top:0 , 
        behavior: 'smooth'
    })
})


const toggleButton = document.getElementById('darkModeToggle');

function updateButtonText(isDarkMode) {
    toggleButton.textContent = isDarkMode ? 'Light' : 'Dark';
}

toggleButton.addEventListener('click', () => {

    const isDarkMode = document.body.classList.toggle('dark-mode');

    localStorage.setItem('darkMode', isDarkMode);

    updateButtonText(isDarkMode);
});

const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    document.body.classList.add('dark-mode');
}

updateButtonText(isDarkMode);