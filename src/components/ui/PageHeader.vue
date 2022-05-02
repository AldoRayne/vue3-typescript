<template>
  <header>
    <div class="title-wrapper">
      <div class="title">
        <img
          src="@/assets/heart.svg"
          width="60"
          height="64"
          loading="lazy"
          alt="site logo"
        />
        <h1><slot name="title" /></h1>
      </div>
      <div class="buttons"><slot name="buttons"></slot></div>
    </div>
  </header>
</template>

<style scoped>
header {
  text-align: center;
}
.buttons {
  margin-top: 20px;
}
.title-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-family: "Hylia Serif", serif;
  font-size: 3em;
}
img {
  width: 60px;
  margin-right: 20px;
}
</style>
