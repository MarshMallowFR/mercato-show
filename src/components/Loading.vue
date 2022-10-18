<template>
  <div id="loading">
    <img src="src/assets/icons/ball-512x512.png" alt="" />
  </div>
</template>

<style lang="scss" scoped>
#loading {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    bottom: 50%;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    width: 40px;
    height: 40px;
    animation: square 1s infinite ease-in;
  }
}
@keyframes square {
  0% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, -50px) rotate(180deg);
  }
  100% {
    transform: translate(-50%, 0) rotate(360deg);
  }
}
</style>
