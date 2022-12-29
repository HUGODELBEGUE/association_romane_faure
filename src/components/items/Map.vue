<template>
    <div v-if="$route.name == 'HomePage'" class="map">
        <ul>
            <li><a href="#presentation">Présentation<i class="bi bi-globe-europe-africa"></i></a></li>
            <hr>
            <li><a href="#activity">Activité<i class="bi bi-activity"></i></a></li>
            <hr>
            <li><a href="#donation">Don<i class="bi bi-currency-exchange"></i></a></li>
        </ul>
    </div>
    <div v-if="$route.name == 'ContactPage'" class="map">
        <ul>
            <li><a href="#contact">Contact<i class="bi bi-envelope-fill"></i></a></li>
            <hr>
            <li><a href="#memory">Mémoire<i class="bi bi-balloon-heart-fill"></i></a></li>
        </ul>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '../../scss/variables';

.map {
    padding-left: .8em;
    background: $color__button;
    border-radius: 3px;
}

ul {
    display: flex;
    flex-direction: column;
    text-align: right;
    row-gap: 1em;
    font-size: 14px;

    hr {
        background: $color__typography__dark;
        border: 1px solid $color__typography__dark;
        border-radius: 2px;
        margin-right: 0;
        margin-left: 70%;
        opacity: .2;
    }

    i {
        margin-left: .5rem;
    }
}
</style>