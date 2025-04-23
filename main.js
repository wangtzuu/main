document.addEventListener('DOMContentLoaded', function() {
    // Get all page elements
    const dashboard = document.getElementById('dashboard');
    const borrowingPage = document.getElementById('borrowingPage');
    const usersPage = document.getElementById('usersPage');
    const booksRequestedPage = document.getElementById('booksRequestedPage');
    const settingsPage = document.getElementById('settingsPage');
    
    // Get all navigation links
    const dashboardLink = document.getElementById('dashboardLink');
    const borrowingLink = document.getElementById('borrowingLink');
    const usersLink = document.getElementById('usersLink');
    const booksRequestedLink = document.getElementById('booksRequestedLink');
    const settingsLink = document.getElementById('settingsLink');
    const logoutLink = document.getElementById('logoutLink');
    
    // Get logout modal elements
    const logoutModal = document.getElementById('logoutModal');
    const cancelLogout = document.getElementById('cancelLogout');
    const confirmLogout = document.getElementById('confirmLogout');
    
    // Function to hide all pages
    function hideAllPages() {
        dashboard.style.display = 'none';
        borrowingPage.style.display = 'none';
        usersPage.style.display = 'none';
        booksRequestedPage.style.display = 'none';
        settingsPage.style.display = 'none';
    }
    
    // Function to update active link
    function updateActiveLink(activeLink) {
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        // Add active class to clicked link
        activeLink.classList.add('active');
    }
    
    // Dashboard navigation
    dashboardLink.addEventListener('click', function(e) {
        e.preventDefault();
        hideAllPages();
        dashboard.style.display = 'block';
        updateActiveLink(dashboardLink);
    });
    
    // Borrowing navigation
    borrowingLink.addEventListener('click', function(e) {
        e.preventDefault();
        hideAllPages();
        borrowingPage.style.display = 'block';
        updateActiveLink(borrowingLink);
    });
    
    // Users navigation
    usersLink.addEventListener('click', function(e) {
        e.preventDefault();
        hideAllPages();
        usersPage.style.display = 'block';
        updateActiveLink(usersLink);
    });
    
    // Books Requested navigation
    booksRequestedLink.addEventListener('click', function(e) {
        e.preventDefault();
        hideAllPages();
        booksRequestedPage.style.display = 'block';
        updateActiveLink(booksRequestedLink);
    });
    
    // Settings navigation
    settingsLink.addEventListener('click', function(e) {
        e.preventDefault();
        hideAllPages();
        settingsPage.style.display = 'block';
        updateActiveLink(settingsLink);
    });
    
    // Logout button click
    logoutLink.addEventListener('click', function(e) {
        e.preventDefault();
        logoutModal.style.display = 'flex';
    });
    
    // Cancel logout
    cancelLogout.addEventListener('click', function() {
        logoutModal.style.display = 'none';
    });
    
    // Confirm logout
    confirmLogout.addEventListener('click', function() {
        // Here you would typically redirect to login page
        alert('Logging out...');
        window.location.href = 'home.html'; // Redirect to login page
    });
    
    // Close modal if clicked outside of content
    logoutModal.addEventListener('click', function(e) {
        if (e.target === logoutModal) {
            logoutModal.style.display = 'none';
        }
    });
    
    // Set dashboard as active by default
    dashboardLink.classList.add('active');
});
 // Set current date as default for date input
 const checkoutDateInput = document.getElementById('checkoutTime');
    if (checkoutDateInput) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        checkoutDateInput.value = `${year}-${month}-${day}`; // Fixed template literal syntax
    }
    
    // Set current time as default for time input
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}`; // Fixed template literal syntax
    
    const returnTimeInput = document.getElementById('returnTime');
    if (returnTimeInput) returnTimeInput.value = currentTime;
    
    // Book selection functionality
    const bookCovers = document.querySelectorAll('.book-cover');
    const bookCodeInput = document.getElementById('bookCodeInput');
    const checkoutBookImage = document.getElementById('checkoutBookImage');
    
    bookCovers.forEach(bookCover => {
        bookCover.addEventListener('click', function() {
            // Get book code from data attribute
            const bookCode = this.getAttribute('data-book-code');
            const bookImgSrc = this.querySelector('img').getAttribute('data-book-src');
            
            // Switch to borrowing page
            dashboard.style.display = 'none';
            borrowingPage.style.display = 'block';
            usersPage.style.display = 'none'; // Also hide users page when selecting a book
            updateActiveLink(borrowingLink);
            
            // Update book code input
            bookCodeInput.value = bookCode;
            
            // Update book image in checkout section
            checkoutBookImage.src = bookImgSrc;
            
            // Visual feedback - add selected class to all book covers
            bookCovers.forEach(cover => {
                cover.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });