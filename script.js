/* =========================================================
   BADDIELINK — PREMIUM DARK SOCIAL APP
========================================================= */
:root {
  --bg: #09070d;
  --bg-soft: #110d17;
  --card: #15101d;
  --card-2: #1b1424;
  --text: #ffffff;
  --muted: #a9a1b3;
  --pink: #ff3d8d;
  --pink-light: #ff72ad;
  --purple: #9b5cff;
  --border: rgba(255,255,255,.09);
  --success: #39d98a;
  --danger: #ff5577;
  --gold: #ffc857;
  --radius: 22px;
  --shadow: 0 20px 60px rgba(0,0,0,.4);
}
/* =========================================================
   RESET
========================================================= */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
}
body {
  min-height: 100vh;
  background:
    radial-gradient(circle at top right, rgba(155,92,255,.13), transparent 35%),
    radial-gradient(circle at bottom left, rgba(255,61,141,.10), transparent 35%),
    var(--bg);
  color: var(--text);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
button,
input,
textarea,
select {
  font: inherit;
}
button {
  border: 0;
  cursor: pointer;
}
input,
textarea,
select {
  width: 100%;
  outline: none;
}
a {
  color: inherit;
  text-decoration: none;
}
/* =========================================================
   CRITICAL SCREEN SYSTEM
   THIS FIXES THE NAVIGATION PROBLEM
========================================================= */
.screen {
  display: none !important;
  min-height: 100vh;
  width: 100%;
}
.screen.active {
  display: flex !important;
}
/* =========================================================
   WELCOME / LANDING
========================================================= */
#welcomeScreen {
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 24px;
}
.welcome-container {
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}
.welcome-content {
  position: relative;
  z-index: 2;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 25px;
  font-weight: 800;
  margin-bottom: 30px;
}
.logo-heart {
  color: var(--pink);
  font-size: 34px;
}
.logo span:last-child {
  background: linear-gradient(90deg, #fff, #ff72ad);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.welcome-content h1 {
  font-size: clamp(45px, 8vw, 78px);
  line-height: .95;
  letter-spacing: -3px;
  margin-bottom: 22px;
}
.welcome-content h1 span {
  background: linear-gradient(135deg, #fff, #ff72ad, #9b5cff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.welcome-content p {
  color: var(--muted);
  font-size: 18px;
  line-height: 1.6;
  max-width: 520px;
  margin-bottom: 30px;
}
.welcome-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.welcome-image {
  position: relative;
  height: 620px;
  border-radius: 34px;
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
}
.welcome-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.welcome-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 45%,
    rgba(9,7,13,.8)
  );
}
.age-note {
  margin-top: 18px;
  color: #82798b;
  font-size: 13px;
}
/* =========================================================
   BUTTONS
========================================================= */
.primary-btn,
.secondary-btn,
.danger-btn {
  min-height: 52px;
  padding: 0 24px;
  border-radius: 15px;
  font-weight: 750;
  transition: .2s ease;
}
.primary-btn {
  color: white;
  background: linear-gradient(135deg, var(--pink), var(--purple));
  box-shadow: 0 10px 30px rgba(255,61,141,.2);
}
.primary-btn:hover {
  transform: translateY(-2px);
}
.secondary-btn {
  color: white;
  background: rgba(255,255,255,.06);
  border: 1px solid var(--border);
}
.secondary-btn:hover {
  background: rgba(255,255,255,.1);
}
.danger-btn {
  background: rgba(255,85,119,.12);
  color: #ff7893;
  border: 1px solid rgba(255,85,119,.2);
}
/* =========================================================
   AUTH SCREENS
========================================================= */
.auth-screen {
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.auth-card {
  width: 100%;
  max-width: 470px;
  background: rgba(21,16,29,.88);
  border: 1px solid var(--border);
  border-radius: 28px;
  padding: 32px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(20px);
}
.back-btn {
  background: transparent;
  color: var(--muted);
  margin-bottom: 25px;
  font-size: 14px;
}
.auth-card h2 {
  font-size: 32px;
  margin-bottom: 8px;
}
.auth-card > p {
  color: var(--muted);
  line-height: 1.5;
  margin-bottom: 26px;
}
.form-group {
  margin-bottom: 18px;
}
.form-group label {
  display: block;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #ddd5e5;
}
.form-group input,
.form-group textarea,
.form-group select {
  min-height: 50px;
  padding: 14px 15px;
  border-radius: 14px;
  color: white;
  background: #0d0a12;
  border: 1px solid var(--border);
}
.form-group textarea {
  min-height: 120px;
  resize: vertical;
}
.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: rgba(255,61,141,.55);
  box-shadow: 0 0 0 3px rgba(255,61,141,.08);
}
.password-wrap {
  position: relative;
}
.password-wrap input {
  padding-right: 55px;
}
.password-toggle {
  position: absolute;
  right: 13px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  color: var(--muted);
}
.auth-submit {
  width: 100%;
  margin-top: 8px;
}
.auth-footer {
  margin-top: 20px;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
}
.auth-footer button {
  background: transparent;
  color: var(--pink-light);
  font-weight: 700;
}
/* =========================================================
   AGE GATE
========================================================= */
.age-screen {
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.age-card {
  max-width: 460px;
  width: 100%;
  text-align: center;
  padding: 38px 30px;
  background: rgba(21,16,29,.92);
  border: 1px solid var(--border);
  border-radius: 28px;
  box-shadow: var(--shadow);
}
.age-icon {
  width: 75px;
  height: 75px;
  display: grid;
  place-items: center;
  margin: 0 auto 22px;
  border-radius: 50%;
  background: rgba(255,61,141,.12);
  color: var(--pink);
  font-size: 30px;
}
.age-card h2 {
  font-size: 30px;
  margin-bottom: 12px;
}
.age-card p {
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 25px;
}
.age-check {
  padding: 15px;
  border-radius: 14px;
  background: rgba(255,255,255,.05);
  color: #ddd5e5;
  margin-bottom: 18px;
}
/* =========================================================
   PROFILE SETUP
========================================================= */
.profile-setup {
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.profile-setup-card {
  width: 100%;
  max-width: 620px;
  padding: 32px;
  border-radius: 28px;
  background: rgba(21,16,29,.9);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}
.photo-placeholder {
  width: 110px;
  height: 110px;
  margin: 0 auto 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #25172e, #17101e);
  border: 2px dashed rgba(255,255,255,.18);
  color: var(--muted);
  font-size: 35px;
}
.interests {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}
.interest-btn {
  padding: 10px 15px;
  border-radius: 999px;
  background: rgba(255,255,255,.05);
  color: #d8d1df;
  border: 1px solid var(--border);
}
.interest-btn.selected {
  background: rgba(255,61,141,.15);
  border-color: var(--pink);
  color: #fff;
}
/* =========================================================
   MAIN APP
========================================================= */
#appScreen {
  display: none !important;
  flex-direction: column;
  min-height: 100vh;
}
#appScreen.active {
  display: flex !important;
}
.app-header {
  position: sticky;
  top: 0;
  z-index: 20;
  padding: 18px 20px;
  background: rgba(9,7,13,.82);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--border);
}
.app-header-inner {
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.coin-display {
  padding: 9px 13px;
  border-radius: 999px;
  background: rgba(255,200,87,.08);
  color: var(--gold);
  font-weight: 750;
}
.app-main {
  width: 100%;
  max-width: 1100px;
  margin: auto;
  padding: 25px 20px 100px;
}
.app-view {
  display: none;
}
.app-view.active {
  display: block;
}
/* =========================================================
   DISCOVER
========================================================= */
.discover-header {
  margin-bottom: 22px;
}
.discover-header h2 {
  font-size: 32px;
}
.discover-header p {
  color: var(--muted);
  margin-top: 5px;
}
.profile-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.profile-card {
  position: relative;
  overflow: hidden;
  min-height: 400px;
  border-radius: 24px;
  background: var(--card);
  border: 1px solid var(--border);
}
.profile-card img {
  width: 100%;
  height: 100%;
  min-height: 400px;
  object-fit: cover;
}
.profile-info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 22px;
  background: linear-gradient(transparent, rgba(0,0,0,.9));
}
.profile-info h3 {
  font-size: 22px;
}
.profile-info p {
  color: #ddd;
  font-size: 14px;
  margin-top: 4px;
}
.like-btn {
  margin-top: 12px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: var(--pink);
  color: white;
}
/* =========================================================
   MESSAGES
========================================================= */
.message-list {
  display: grid;
  gap: 10px;
}
.message-item {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 15px;
  border-radius: 18px;
  background: var(--card);
  border: 1px solid var(--border);
}
.message-avatar {
  width: 52px;
  height: 52px;
  flex: 0 0 52px;
  border-radius: 50%;
  overflow: hidden;
}
.message-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.message-content {
  flex: 1;
}
.message-content p {
  color: var(--muted);
  font-size: 13px;
  margin-top: 4px;
}
/* =========================================================
   WALLET / GIFTS
========================================================= */
.wallet-card,
.gift-card {
  padding: 25px;
  border-radius: 24px;
  background: var(--card);
  border: 1px solid var(--border);
  margin-bottom: 18px;
}
.balance {
  font-size: 42px;
  font-weight: 850;
  margin: 10px 0 20px;
}
.recharge-grid,
.gift-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.recharge-option,
.gift-option {
  padding: 18px;
  border-radius: 16px;
  background: rgba(255,255,255,.05);
  border: 1px solid var(--border);
  color: white;
}
.recharge-option:hover,
.gift-option:hover {
  border-color: var(--pink);
}
/* =========================================================
   PROFILE
========================================================= */
.profile-box {
  padding: 30px;
  border-radius: 25px;
  background: var(--card);
  border: 1px solid var(--border);
}
.profile-top {
  display: flex;
  align-items: center;
  gap: 18px;
}
.profile-photo {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
}
/* =========================================================
   BOTTOM NAV
========================================================= */
.bottom-nav {
  position: fixed;
  left: 50%;
  bottom: 15px;
  transform: translateX(-50%);
  z-index: 50;
  width: min(650px, calc(100% - 24px));
  display: flex;
  justify-content: space-around;
  padding: 9px;
  border-radius: 22px;
  background: rgba(20,15,27,.94);
  border: 1px solid var(--border);
  box-shadow: 0 15px 50px rgba(0,0,0,.5);
  backdrop-filter: blur(20px);
}
.nav-btn {
  min-width: 70px;
  padding: 9px 8px;
  border-radius: 15px;
  background: transparent;
  color: var(--muted);
}
.nav-btn.active {
  color: white;
  background: rgba(255,61,141,.13);
}
.nav-icon {
  display: block;
  font-size: 20px;
  margin-bottom: 3px;
}
/* =========================================================
   MODALS
========================================================= */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(0,0,0,.72);
  backdrop-filter: blur(8px);
}
.modal-overlay.active {
  display: flex;
}
.modal {
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 25px;
  border-radius: 25px;
  background: #17111e;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}
.close-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255,255,255,.06);
  color: white;
}
/* =========================================================
   CHAT
========================================================= */
.chat-messages {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 15px;
}
.chat-message {
  max-width: 78%;
  padding: 11px 14px;
  border-radius: 17px;
  background: rgba(255,255,255,.07);
  color: #eee;
}
.chat-message.sent {
  align-self: flex-end;
  background: linear-gradient(135deg, var(--pink), var(--purple));
}
.chat-input-row {
  display: flex;
  gap: 8px;
}
.chat-input-row input {
  min-height: 48px;
  padding: 12px 14px;
  border-radius: 14px;
  background: #0d0a12;
  color: white;
  border: 1px solid var(--border);
}
.chat-input-row button {
  width: 50px;
  border-radius: 14px;
  background: var(--pink);
  color: white;
}
/* =========================================================
   TOAST
========================================================= */
.toast {
  position: fixed;
  left: 50%;
  bottom: 95px;
  z-index: 200;
  transform: translateX(-50%) translateY(20px);
  padding: 13px 18px;
  border-radius: 14px;
  background: #211827;
  border: 1px solid var(--border);
  color: white;
  opacity: 0;
  pointer-events: none;
  transition: .25s ease;
}
.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
/* =========================================================
   HIDDEN UTILITY
========================================================= */
.hidden-view {
  display: none !important;
}
/* =========================================================
   MOBILE
========================================================= */
@media (max-width: 800px) {
  .welcome-container {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  .welcome-image {
    height: 420px;
    order: -1;
  }
  .welcome-content h1 {
    font-size: 50px;
  }
  .profile-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .recharge-grid,
  .gift-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  #welcomeScreen {
    padding: 18px;
  }
  .welcome-image {
    height: 330px;
    border-radius: 25px;
  }
  .welcome-content h1 {
    font-size: 43px;
    letter-spacing: -2px;
  }
  .welcome-content p {
    font-size: 16px;
  }
  .welcome-actions {
    flex-direction: column;
  }
  .welcome-actions button {
    width: 100%;
  }
  .auth-card,
  .age-card,
  .profile-setup-card {
    padding: 24px 20px;
  }
  .profile-grid {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .profile-card,
  .profile-card img {
    min-height: 300px;
  }
  .recharge-grid,
  .gift-grid {
    grid-template-columns: 1fr 1fr;
  }
  .bottom-nav {
    bottom: 9px;
  }
  .nav-btn {
    min-width: 55px;
    font-size: 11px;
  }
}
