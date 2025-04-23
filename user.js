document.addEventListener('DOMContentLoaded', function() {
    // Get all page elements
    const dashboard = document.getElementById('dashboard');
    const borrowingPage = document.getElementById('borrowingPage');
    const settingsPage = document.getElementById('settingsPage');
    
    // Get all navigation links
    const dashboardLink = document.getElementById('dashboardLink');
    const borrowingLink = document.getElementById('borrowingLink');
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
    
    // Set current date as default for date input
    const checkoutDateInput = document.getElementById('checkoutTime');
    if (checkoutDateInput) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        checkoutDateInput.value = `${year}-${month}-${day}`;
    }
    
    // Set current time as default for time input
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;
    
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
});

// Search functionality for the library system
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const bookCards = document.querySelectorAll('.book-card');
    
    searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.toLowerCase().trim();
      
      // If search is empty, show all books
      if (searchTerm === '') {
        bookCards.forEach(card => {
          card.style.display = 'flex';
          card.classList.remove('highlight');
        });
        return;
      }
      
      let foundMatch = false;
      
      // Loop through all book cards
      bookCards.forEach(card => {
        const bookTitle = card.querySelector('.book-title').textContent.toLowerCase();
        
        if (bookTitle.includes(searchTerm)) {
          // Show and highlight matching books
          card.style.display = 'flex';
          card.classList.add('highlight');
          foundMatch = true;
          
          // Scroll to the first matching book
          if (!window.hasScrolled && foundMatch) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            window.hasScrolled = true;
          }
        } else {
          // Hide non-matching books
          card.style.display = 'none';
          card.classList.remove('highlight');
        }
      });
      
      // Reset scroll flag when search is cleared
      if (searchTerm === '') {
        window.hasScrolled = false;
      }
    });
    
    // Clear search when clicking the search icon
    const searchIcon = document.querySelector('.search-icon');
    searchIcon.addEventListener('click', function() {
      searchInput.value = '';
      searchInput.dispatchEvent(new Event('input'));
      searchInput.focus();
    });
    
    // Add styles for highlighted books
    const style = document.createElement('style');
    style.textContent = `
      .book-card.highlight {
        transform: translateY(-5px);
        box-shadow: 0 5px 20px rgba(144, 28, 28, 0.4);
        border: 2px solid #901C1C;
        position: relative;
        z-index: 10;
      }
      
      .search-input:focus {
        outline: none;
        background-color: rgba(255, 255, 255, 0.3);
      }
      
      .search-icon {
        cursor: pointer;
      }
      
      @keyframes pulse {
        0% { box-shadow: 0 5px 20px rgba(144, 28, 28, 0.4); }
        50% { box-shadow: 0 5px 25px rgba(144, 28, 28, 0.7); }
        100% { box-shadow: 0 5px 20px rgba(144, 28, 28, 0.4); }
      }
      
      .book-card.highlight {
        animation: pulse 2s infinite;
      }
    `;
    document.head.appendChild(style);
  });
  
  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}