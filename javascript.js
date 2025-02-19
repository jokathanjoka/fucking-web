
// Get elements
const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const mainContent = document.getElementById('main-content');

// Open sidebar when clicking the open button
openBtn.addEventListener('click', () => {
    sidebar.style.left = '0';
    mainContent.style.marginLeft = '250px';
});

// Close sidebar when clicking the close button
closeBtn.addEventListener('click', () => {
    sidebar.style.left = '-250px';
    mainContent.style.marginLeft = '0';
});

// Close sidebar if click outside the sidebar
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && event.target !== openBtn) {
        sidebar.style.left = '-250px';
        mainContent.style.marginLeft = '0';
    }
});

