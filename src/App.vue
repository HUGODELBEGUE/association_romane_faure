<script setup>
import Header from './components/Header.vue'
import NavBar from './components/NavBar.vue'
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header>
    <Header />
    <nav>
      <NavBar />
    </nav>
  </header>

  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <main>
    <HelloWorld msg="Vite + Vue" />
    <!-- Affichage du contenu router -->
    <router-view></router-view>
  </main>

  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
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

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgb(190, 190, 190);
}
</style>
