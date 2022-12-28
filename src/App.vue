<script setup>
import Header from './components/Header.vue'
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Map />
  <header>
    <Header />
  </header>

  <hr class="line__1">

  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->

  <main>
    <!-- <HelloWorld msg="Vite + Vue" /> -->
    <!-- Display of router content -->
    <router-view></router-view>
  </main>

  <hr class="line__1">

  <footer>
    <Footer />
  </footer>
</template>

<style lang="scss" scoped>
@import './scss/variables';

header,
main :deep(.presentation),
main :deep(.contact) {
  background-image: url(https://www.legalplace.fr/wp-content/uploads/2018/08/gestion-association-2300.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

header {
  min-height: 10vh;
  // padding-top: 10em;
}


footer {
  background: $color__background;
  padding-top: 3em;
  padding-bottom: 7em;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
