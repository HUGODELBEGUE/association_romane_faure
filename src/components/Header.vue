<template>
    <div id="menu" class="header__container container width__desktop__up">
        <div class="logo__container">
            <Logo />
        </div>
        <nav>
            <NavBar />
        </nav>
    </div>
</template>

<script setup>
import NavBar from './NavBar.vue'
</script>
    
<style scoped>
.header__container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: calc(7vh - 2.8vh);
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
    width: 10em;
}
</style>
