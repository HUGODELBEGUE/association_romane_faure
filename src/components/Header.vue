<script setup>
import NavBar from './NavBar.vue'
</script>

<template>
    <div class="header__container container">
        <div class="logo__container">
            <a href="/"><img class="logo" src="../assets/moon_icon.png" alt="logo romane faure" /></a>
        </div>
        <nav>
            <NavBar />
        </nav>
    </div>
</template>

<style scoped>
.header__container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 1440px;
}

.logo__container {
    width: 2rem;
}

.logo__container a {
    display: flex;
    opacity: 1;
    margin: .5rem 0;
}

.logo {
    width: 100%;
    transition: filter 0.15s;
}

.logo:hover {
    /* filter: drop-shadow(0 0 2px gray); */
}
</style>
