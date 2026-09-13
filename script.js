/* ============================================
   BADDIELINK
   Main Application JavaScript
============================================ */
/* ============================================
   SCREEN NAVIGATION
============================================ */
function showScreen(screenId) {
  const screens = document.querySelectorAll(".screen");
  screens.forEach((screen) => {
    screen.classList.remove("active");
  });
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add("active");
  }
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
/* ============================================
   SIGNUP → PROFILE SETUP
============================================ */
function goToProfileSetup(event) {
  event.preventDefault();
  const nameInput = document.getElementById("signupName");
  if (nameInput && nameInput.value.trim() !== "") {
    const profileName =
      document.querySelector(".my-profile-header h2");
    if (profileName) {
      profileName.innerHTML =
        `${escapeHTML(nameInput.value.trim())} <span class="verified">✓</span>`;
    }
  }
  showScreen("profileSetupScreen");
  showToast("Account details saved ✓");
}
/* ============================================
   FINISH PROFILE
============================================ */
function enterApp() {
  showScreen("appScreen");
  switchTab("discover");
  showToast("Welcome to BaddieLink ❤️");
}
/* ============================================
   APP TAB NAVIGATION
============================================ */
function switchTab(tabName) {
  const views = {
    discover: "discoverView",
    messages: "messagesView",
    gifts: "giftsView",
    wallet: "walletView",
    profile: "profileView"
  };
  Object.values(views).forEach((viewId) => {
    const view = document.getElementById(viewId);
    if (view) {
      view.classList.add("hidden-view");
    }
  });
  const selectedView = document.getElementById(
    views[tabName]
  );
  if (selectedView) {
    selectedView.classList.remove("hidden-view");
  }
  const navItems =
    document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.classList.remove("active");
  });
  const tabOrder = [
    "discover",
    "messages",
    "gifts",
    "wallet",
    "profile"
  ];
  const index = tabOrder.indexOf(tabName);
  if (index !== -1 && navItems[index]) {
    navItems[index].classList.add("active");
  }
}
/* ============================================
   PASSWORD TOGGLE
============================================ */
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const button = input.parentElement.querySelector("button");
  if (input.type === "password") {
    input.type = "text";
    if (button) {
      button.textContent = "Hide";
    }
  } else {
    input.type = "password";
    if (button) {
      button.textContent = "Show";
    }
  }
}
/* ============================================
   DEMO LOGIN
============================================ */
function demoLogin(event) {
  event.preventDefault();
  showToast("Login system coming next.");
  setTimeout(() => {
    showScreen("appScreen");
    switchTab("discover");
  }, 700);
}
/* ============================================
   PROFILE INTERESTS
============================================ */
document.addEventListener("DOMContentLoaded", () => {
  const interestButtons =
    document.querySelectorAll(".interest-list button");
  interestButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("selected");
    });
  });
  /* ------------------------------------------
     SIGNUP INTEREST SELECTION
  ------------------------------------------ */
  const lookingFor =
    document.querySelectorAll(
      'input[name="lookingFor"]'
    );
  lookingFor.forEach((input) => {
    input.addEventListener("change", () => {
      const card =
        input.closest(".choice-card");
      if (card) {
        card.classList.toggle(
          "selected",
          input.checked
        );
      }
    });
  });
  /* ------------------------------------------
     GENERIC MODAL CLOSE ON BACKDROP
  ------------------------------------------ */
  document.querySelectorAll(".modal-overlay")
    .forEach((modal) => {
      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.classList.remove("active");
        }
      });
    });
  /* ------------------------------------------
     ESCAPE KEY
  ------------------------------------------ */
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeChat();
      closeGift();
      closeRecharge();
    }
  });
});
/* ============================================
   LIKE PROFILE
============================================ */
function likeProfile() {
  showToast("It's a match vibe! ❤️");
}
/* ============================================
   CHAT
============================================ */
function openChat() {
  const modal =
    document.getElementById("chatModal");
  if (modal) {
    modal.classList.add("active");
  }
}
function closeChat() {
  const modal =
    document.getElementById("chatModal");
  if (modal) {
    modal.classList.remove("active");
  }
}
/* ============================================
   SEND MESSAGE
============================================ */
function sendMessage() {
  const input =
    document.getElementById("chatInput");
  const chatBody =
    document.querySelector(".chat-body");
  if (!input || !chatBody) return;
  const message =
    input.value.trim();
  if (!message) return;
  const messageElement =
    document.createElement("div");
  messageElement.className =
    "message sent";
  messageElement.innerHTML = `
    <p>${escapeHTML(message)}</p>
    <small>Now</small>
  `;
  chatBody.appendChild(messageElement);
  input.value = "";
  chatBody.scrollTop =
    chatBody.scrollHeight;
}
/* ============================================
   GIFT SYSTEM
============================================ */
let coinBalance = 120;
function openGiftFromChat() {
  closeChat();
  const modal =
    document.getElementById("giftModal");
  if (modal) {
    modal.classList.add("active");
  }
}
function openWallet() {
  switchTab("wallet");
}
function sendGift(giftName, cost) {
  if (coinBalance < cost) {
    showToast(
      "Not enough BaddieCoins. Recharge your wallet."
    );
    return;
  }
  coinBalance -= cost;
  updateCoinDisplays();
  closeGift();
  showToast(
    `${giftName} sent successfully! 🎁`
  );
}
function closeGift() {
  const modal =
    document.getElementById("giftModal");
  if (modal) {
    modal.classList.remove("active");
  }
}
/* ============================================
   WALLET
============================================ */
function showRecharge() {
  const modal =
    document.getElementById("rechargeModal");
  if (modal) {
    modal.classList.add("active");
  }
}
function closeRecharge() {
  const modal =
    document.getElementById("rechargeModal");
  if (modal) {
    modal.classList.remove("active");
  }
}
function purchaseCoins(amount, price) {
  coinBalance += amount;
  updateCoinDisplays();
  closeRecharge();
  showToast(
    `${amount.toLocaleString()} BaddieCoins added.`
  );
}
function updateCoinDisplays() {
  const balances = [
    "coinBalance",
    "walletBalance",
    "giftBalance"
  ];
  balances.forEach((id) => {
    const element =
      document.getElementById(id);
    if (element) {
      element.textContent =
        coinBalance.toLocaleString();
    }
  });
}
/* ============================================
   TOAST
============================================ */
function showToast(message) {
  const toast =
    document.getElementById("toast");
  const toastMessage =
    document.getElementById("toastMessage");
  if (!toast || !toastMessage) return;
  toastMessage.textContent = message;
  toast.classList.add("active");
  clearTimeout(window.baddieToastTimer);
  window.baddieToastTimer =
    setTimeout(() => {
      toast.classList.remove("active");
    }, 3000);
}
/* ============================================
   SAFE TEXT
============================================ */
function escapeHTML(value) {
  const div =
    document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}
/* ============================================
   INITIAL STATE
============================================ */
document.addEventListener("DOMContentLoaded", () => {
  updateCoinDisplays();
  const firstScreen =
    document.querySelector(".screen");
  if (firstScreen) {
    firstScreen.classList.add("active");
  }
});
