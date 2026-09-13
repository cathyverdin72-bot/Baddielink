/* ============================================
   BADDIELINK
   Main JavaScript
============================================ */

document.addEventListener("DOMContentLoaded", () => {
  /* --------------------------------------------
     MOBILE MENU
  -------------------------------------------- */

  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuLinks = document.querySelectorAll(".mobile-menu a");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("active");

      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", isOpen);
      document.body.classList.toggle("menu-open", isOpen);
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    });
  }

  /* --------------------------------------------
     AGE GATE
  -------------------------------------------- */

  const ageGate = document.getElementById("ageGate");
  const enterButton = document.getElementById("enterSite");
  const leaveButton = document.getElementById("leaveSite");

  const ageVerified = localStorage.getItem("baddielinkAgeVerified");

  if (ageGate && ageVerified === "true") {
    ageGate.classList.add("hidden");
  }

  if (enterButton && ageGate) {
    enterButton.addEventListener("click", () => {
      localStorage.setItem("baddielinkAgeVerified", "true");

      ageGate.classList.add("hidden");
      document.body.classList.remove("age-locked");
    });
  }

  if (leaveButton) {
    leaveButton.addEventListener("click", () => {
      window.location.href = "https://www.google.com/";
    });
  }

  /* --------------------------------------------
     PROFILE / CTA BUTTONS
  -------------------------------------------- */

  const actionButtons = document.querySelectorAll("[data-action]");

  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;

      if (action === "signup") {
        showMessage(
          "Create your BaddieLink profile to get started."
        );
      }

      if (action === "login") {
        showMessage(
          "Login will be available when the account system is connected."
        );
      }

      if (action === "discover") {
        const discoverSection =
          document.getElementById("discover");

        if (discoverSection) {
          discoverSection.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    });
  });

  /* --------------------------------------------
     LIKE BUTTONS
  -------------------------------------------- */

  const likeButtons = document.querySelectorAll(".like-btn");

  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const liked = button.classList.toggle("liked");

      button.textContent = liked ? "♥" : "♡";
      button.setAttribute(
        "aria-label",
        liked ? "Unlike profile" : "Like profile"
      );
    });
  });

  /* --------------------------------------------
     PROFILE CARDS
  -------------------------------------------- */

  const profileCards = document.querySelectorAll(
    ".profile-card"
  );

  profileCards.forEach((card) => {
    card.addEventListener("click", (event) => {
      if (
        event.target.closest(".like-btn") ||
        event.target.closest("button") ||
        event.target.closest("a")
      ) {
        return;
      }

      const name =
        card.querySelector(".profile-name")?.textContent ||
        "This profile";

      showMessage(
        `${name} — profile details will be available soon.`
      );
    });
  });

  /* --------------------------------------------
     NAVBAR SCROLL EFFECT
  -------------------------------------------- */

  const navbar = document.querySelector(".navbar");

  if (navbar) {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 30) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      },
      { passive: true }
    );
  }

  /* --------------------------------------------
     REVEAL ANIMATIONS
  -------------------------------------------- */

  const revealElements =
    document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }

  /* --------------------------------------------
     ESC KEY
  -------------------------------------------- */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (mobileMenu) {
        mobileMenu.classList.remove("active");
      }

      if (menuToggle) {
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }

      document.body.classList.remove("menu-open");
    }
  });
});


/* ============================================
   TOAST / MESSAGE
============================================ */

function showMessage(message) {
  let toast = document.querySelector(".baddielink-toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "baddielink-toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.baddieToastTimer);

  window.baddieToastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
