<template>
  <div class="footer-bar">
    <div class="phoenix-gear__footer">
      <p>© 2023 Mission Phoenix</p>
    </div>
    <div class="doppio-footer">
      <p>Powered by Doppio Web Designs</p>
    </div>
  </div>
</template>

<style>
.doppio-footer {
  position: relative;
  height: 25%;
  width: fit-content;
  left: 75%;
  top: 20%;
}

.footer-bar {
  position: relative;
  bottom: 0%;
  bottom: 0%;
  width: 100vw;
  height: 15vh;
  background-color: rgba(78, 78, 78, 0.805);
  color: whitesmoke;
  display: flex;
  flex-direction: column;
}

.phoenix-gear__footer {
  position: relative;
  height: 25%;
  left: 75%;
  top: 20%;
  width: fit-content;
}

@media (max-width: 870px) {
  .doppio-footer,
  .phoenix-gear__footer {
    width: 100%;
    left: 0%;
    text-align: center;
  }
}
</style>
