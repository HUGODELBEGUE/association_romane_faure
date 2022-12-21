<script setup>
import Header from './components/Header.vue'
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header>
    <Header />
  </header>

  <hr>

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

  <hr>

  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
header {
  background: initial;
  padding-top: 10em;
}

hr {
  background: rgb(190, 190, 190);
  border: 3px solid rgb(190, 190, 190);
  margin: 0;
  opacity: .6;
}

footer {
  background: #c8cde5;
  padding-bottom: 10em;
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
