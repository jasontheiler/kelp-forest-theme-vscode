<template>
  <div class="background">
    <div class="floatX-wrapper">
      <div class="floatY-wrapper">
        <g-image
          src="~/images/background.jpg"
          alt="Background"
          immediate="true"
          blur="32"
          quality="5"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background {
  // ! position: fixed; causes problem with viewport height in mobile Google Chrome.
  position: fixed;
  left: 50%;
  top: 50%;
  width: calc(100vw + 64px);
  height: calc(100vh + 64px);
  z-index: -1;
  transform: translate(-50%, -50%);
  user-select: none;
}

.floatX-wrapper,
.floatY-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
}

@media (prefers-reduced-motion: no-preference) {
  .floatX-wrapper {
    animation: floatX 7.5s -1.25s ease-in-out alternate infinite;
  }

  .floatY-wrapper {
    animation: floatY 2.5s ease-in-out alternate infinite;
  }
}

.g-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(32px);
  animation: fade-in 2s;
  will-change: opacity;
}

$floatDistance: 16px;

@keyframes floatX {
  0% {
    transform: translateX($floatDistance);
  }
  100% {
    transform: translateX(-$floatDistance);
  }
}

@keyframes floatY {
  0% {
    transform: translateY($floatDistance);
  }
  100% {
    transform: translateY(-$floatDistance);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
