<template>
    <div class="nav__container">
        <!-- Links to router -->
        <div class="home link">
            <router-link to="/"><i class="bi bi-globe-europe-africa"></i>Association</router-link>
        </div>
        <div class="activity link"><a href="#activity"><i class="bi bi-activity"></i>Activité</a></div>
        <div class="donation link"><a href="#donation"><i class="bi bi-currency-exchange"></i>Don</a></div>
        <div class="memory link"><a href="#memory"><i class="bi bi-balloon-heart-fill"></i>Memoire</a></div>
        <div class="contact link">
            <router-link to="/contact"><i class="bi bi-envelope-fill"></i>Contact</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../scss/variables';

.nav__container {
    display: flex;
    column-gap: 3em;
    margin-bottom: .3rem;
}

a:hover {
    color: $color__button;
}
</style>
