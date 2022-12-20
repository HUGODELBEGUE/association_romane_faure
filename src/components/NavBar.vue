<template>
    <div class="nav__container">
        <!-- Links to router -->
        <div class="home link">
            <router-link to="/"><i class="bi bi-globe-europe-africa"></i>Association</router-link>
        </div>
        <div class="activity link"><a href=""><i class="bi bi-activity"></i>Activité</a></div>
        <div class="donation link"><a href=""><i class="bi bi-balloon-heart-fill"></i>Don</a></div>
        <div class="contact link">
            <router-link to="/contact"><i class="bi bi-envelope-fill"></i>Contact</router-link>
        </div>
    </div>
</template>

<style scoped>
.nav__container {
    display: flex;
    column-gap: 3rem;
    margin-bottom: .3rem;
}

a:hover {
    color: #e28d29;
}
</style>
