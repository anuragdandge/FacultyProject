const navItems = document.querySelectorAll('.nav-item');
const tabContent = document.querySelectorAll('.tab');
let selectedTab = null;

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const tabId = item.getAttribute('data-tab');

        // Reset the background color and text color of the previously selected tab
        if (selectedTab) {
            selectedTab.style.backgroundColor = '';
            selectedTab.style.color = '';
        }

        // Set the background color and text color of the clicked tab
        item.style.backgroundColor = '#fe451b';
        item.style.color = 'white';

        // Hide all tab content
        tabContent.forEach(tab => {
            tab.style.display = 'none';
        });

        // Show the corresponding tab content
        document.getElementById(tabId).style.display = 'block';

        // Update the selectedTab variable to the current tab
        selectedTab = item;
    });
});

