<template>
  <header>
    <h1 id="header-title" data-testid="header-title">Mercato Show</h1>
    <p id="header-description" data-testid="header-description">
      Last twitter news on the mercato
    </p>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 32px auto;

  #header-title,
  #header-description {
    color: $white-color;
  }
}
</style>
