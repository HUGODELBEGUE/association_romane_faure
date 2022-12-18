<template>
    <div class="nav__container">
        <!-- Liens du router -->
        <div class="home">
            <router-link to="/">Présentation</router-link>
        </div>
        <div class="approach">Approche</div>
        <div class="donation">Don</div>
        <div class="contact">
            <router-link to="/contact">Contact</router-link>
        </div>
    </div>
</template>

<style scoped>
    .nav__container {
        display: flex;
        column-gap: 2rem;
    }
</style>