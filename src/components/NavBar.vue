<template>
    <div class="nav__container">
        <!-- Links to router -->
        <div class="home link">
            <router-link to="/">Association</router-link>
        </div>
        <div class="contact link">
            <router-link to="/contact">Contact</router-link>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.nav__container {
    display: flex;
    column-gap: 3em;
    margin-bottom: .3rem;
}

a {
    padding: .5em;
    font-weight: 900;
    letter-spacing: 1px;
    transition: all 150ms linear;

    &:hover {
        color: $color__button;
    }
}

a.router-link-active {
    color: $color__button;
    text-decoration: none;
    text-shadow: -1px -1px 0 darken($color__button, 9.5%);
    transition: all 250ms linear;
}
</style>
