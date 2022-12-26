<script setup>
import NavBar from './NavBar.vue'
</script>

<template>
    <div class="header__container container width__desktop__up">
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
    padding-top: calc(10vh - 2.8vh);
    padding-bottom: 0;
    height: 100%;

}

.nav__fixed {
    position: fixed;
    z-index: 2;
    background: aquamarine;
    padding-top: 0;
    border-radius: 30px;
    align-items: center;
    column-gap: 3rem;
}

.logo__container {
    width: 2em;
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
    filter: brightness(120%);
}
</style>
