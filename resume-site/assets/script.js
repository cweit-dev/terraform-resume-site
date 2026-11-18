// assets/script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- DARK MODE LOGIC ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // 1. Check for saved user preference, if not, check system preference
    if (localStorage.getItem('color-theme') === 'dark' || 
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    // 2. Handle button click
    themeToggleBtn.addEventListener('click', () => {
        // Toggle the class
        htmlElement.classList.toggle('dark');

        // Save preference to LocalStorage
        if (htmlElement.classList.contains('dark')) {
            localStorage.setItem('color-theme', 'dark');
        } else {
            localStorage.setItem('color-theme', 'light');
        }
    });


    // --- TYPING EFFECT FOR NAME ---
    // This looks for the element with id="typed" and types the text out
    const textElement = document.getElementById('typed');
    if (textElement) {
        const textToType = "Carl Weitzel";
        let index = 0;
        
        // Clear existing text just in case
        textElement.textContent = "";

        function typeWriter() {
            if (index < textToType.length) {
                textElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(typeWriter, 100); // Speed of typing (ms)
            }
        }
        
        // Start typing after a small delay
        setTimeout(typeWriter, 500);
    }

    // --- DEPLOY TIME (Optional) ---
    // Displays the current time as the "Last Deployed" time for a dynamic feel
    const deployTime = document.getElementById('deploy-time');
    if (deployTime) {
        const now = new Date();
        deployTime.textContent = now.toUTCString();
    }
});

// --- VISITOR COUNTER ---
    const counterElement = document.getElementById('visitor-count');
    
    // ⚠️ REPLACE THIS URL WITH YOUR OWN AWS API GATEWAY URL ⚠️
    // Example format: https://abc12345.execute-api.us-east-1.amazonaws.com/updateVisitorCount
    const apiUrl = "https://46ml85m8zb.execute-api.us-east-1.amazonaws.com/updateVisitorCount";

    if (counterElement) {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Update the number in the HTML
                counterElement.textContent = data.count;
            })
            .catch(error => {
                console.error('Error fetching visitor count:', error);
                counterElement.textContent = "Error";
            });
    }