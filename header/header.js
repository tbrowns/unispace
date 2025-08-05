// Load and inject header component
fetch("header/header.html")
  .then((response) => response.text())
  .then((data) => {
    const temp = document.createElement("div");
    temp.innerHTML = data;
    const template = temp.querySelector("#header-template");

    if (template) {
      const headerContainer = document.getElementById("header");
      if (headerContainer) {
        headerContainer.appendChild(template.content.cloneNode(true));

        // Initialize component functionality after injection
        initializeHeaderComponent();
      }
    }
  })
  .catch((error) => {
    console.error("Error loading header component:", error);
  });

// Initialize all header functionality
function initializeHeaderComponent() {
  // Highlight active link
  highlightActiveLink();

  // Initialize mobile menu
  initializeMobileMenu();

  // Handle window resize
  handleWindowResize();
}

// Highlight the active navigation link
function highlightActiveLink() {
  const links = document.querySelectorAll("#navbar a");
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split("/").pop() || "dashboard.html";

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href) {
      // Remove any existing active class
      link.classList.remove("active");

      // Check if this link matches current page
      if (
        (href === "dashboard.html" &&
          (currentPage === "" ||
            currentPage === "index.html" ||
            currentPage === "dashboard.html")) ||
        (href !== "dashboard.html" && href === currentPage)
      ) {
        link.classList.add("active");
      }
    }
  });
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
  const bar = document.getElementById("bar");
  const navbar = document.getElementById("navbar");
  const closeBtn = document.getElementById("close");
  const mobileBtn = document.getElementById("mobile");

  // Fix: Show/hide icons correctly
  if (bar && navbar && closeBtn && mobileBtn) {
    // Open mobile menu
    mobileBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      openMobileMenu();
      bar.style.display = "none";
      closeBtn.style.display = "flex";
    });

    // Close mobile menu
    closeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeMobileMenu();
      bar.style.display = "inline-block";
      closeBtn.style.display = "none";
    });

    // Close menu when clicking on navigation links (mobile only)
    navbar.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 900) {
          closeMobileMenu();
          bar.style.display = "inline-block";
          closeBtn.style.display = "none";
        }
      });
    });

    // Close menu when clicking outside (mobile only)
    document.addEventListener("click", function (e) {
      if (
        window.innerWidth <= 900 &&
        navbar.classList.contains("open") &&
        !navbar.contains(e.target) &&
        !mobileBtn.contains(e.target)
      ) {
        closeMobileMenu();
        bar.style.display = "inline-block";
        closeBtn.style.display = "none";
      }
    });

    // Handle dropdown behavior on mobile
    initializeMobileDropdown();

    // Handle escape key to close menu
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navbar.classList.contains("open")) {
        closeMobileMenu();
        bar.style.display = "inline-block";
        closeBtn.style.display = "none";
      }
    });
  }
}

// Handle dropdown on mobile devices
function initializeMobileDropdown() {
  const dropdown = document.querySelector(".dropdown");
  const dropdownLink = dropdown?.querySelector("a");

  if (dropdown && dropdownLink) {
    dropdownLink.addEventListener("click", function (e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        dropdown.classList.toggle("open");

        // Update ARIA attributes for accessibility
        const isOpen = dropdown.classList.contains("open");
        dropdownLink.setAttribute("aria-expanded", isOpen);
      }
    });
  }
}

// Open mobile menu
function openMobileMenu() {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    navbar.classList.add("open");
    document.body.style.overflow = "hidden"; // Prevent background scroll

    // Focus management for accessibility
    const firstLink = navbar.querySelector("a");
    if (firstLink) {
      setTimeout(() => firstLink.focus(), 100);
    }
  }
}

// Close mobile menu
function closeMobileMenu() {
  const navbar = document.getElementById("navbar");
  const dropdown = document.querySelector(".dropdown");

  if (navbar) {
    navbar.classList.remove("open");
    document.body.style.overflow = ""; // Restore scroll

    // Close any open dropdowns
    if (dropdown) {
      dropdown.classList.remove("open");
    }
  }
}

// Handle window resize events
function handleWindowResize() {
  let resizeTimer;

  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      const navbar = document.getElementById("navbar");

      // Close mobile menu if window becomes wide enough
      if (window.innerWidth > 900 && navbar) {
        navbar.classList.remove("open");
        document.body.style.overflow = "";

        // Close any open dropdowns
        const dropdown = document.querySelector(".dropdown");
        if (dropdown) {
          dropdown.classList.remove("open");
        }
      }
    }, 250);
  });
}

// Optional: Add smooth scroll behavior for anchor links
document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scrolling to anchor links within the same page
  document.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    if (link && link.getAttribute("href")?.startsWith("#")) {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Close mobile menu if open
        closeMobileMenu();
      }
    }
  });
});

// Export functions for external use if needed
window.headerComponent = {
  openMobileMenu,
  closeMobileMenu,
  highlightActiveLink,
  initializeHeaderComponent,
};
