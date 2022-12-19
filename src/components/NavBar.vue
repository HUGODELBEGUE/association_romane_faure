<template>
    <div class="nav__container">
        <!-- Links to router -->
        <div class="home link">
            <router-link to="/"><i class="bi bi-image"></i>Présentation</router-link>
        </div>
        <div class="activity link"><i class="bi bi-activity"></i>Activité</div>
        <div class="donation link"><i class="bi bi-balloon-heart-fill"></i>Don</div>
        <div class="contact link">
            <router-link to="/contact"><i class="bi bi-envelope-fill"></i>Contact</router-link>
        </div>
    </div>
</template>

<style scoped>
.nav__container {
    display: flex;
    column-gap: 3rem;
    margin-bottom: .5rem;
}
</style>
