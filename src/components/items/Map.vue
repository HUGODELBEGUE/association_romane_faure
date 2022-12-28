<template>
    <TransitionGroup name="menu">
        <div v-if="$route.name == 'HomePage'" class="map">
            <ul>
                <li><a href="#presentation">Présentation<i class="bi bi-globe-europe-africa"></i></a></li>
                <li><a href="#activity">Activité<i class="bi bi-activity"></i></a></li>
                <li><a href="#donation">Don<i class="bi bi-currency-exchange"></i></a></li>
            </ul>
        </div>
        <div v-if="$route.name == 'ContactPage'" class="map">
            <ul>
                <li><a href="#contact">Contact<i class="bi bi-envelope-fill"></i></a></li>
                <li><a href="#memory">Mémoire<i class="bi bi-balloon-heart-fill"></i></a></li>
            </ul>
        </div>
        <!-- <div>{{ $route.name }}</div> -->
    </TransitionGroup>
</template>

<script>
console.log(document.getElementsByClassName('map'))
export default {
    data() {
        this.$router.afterEach((to, from) => {
            console.log(to)
            console.log(this.$router.getRoutes())
        })
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables';

.map {
    position: fixed;
    right: 0;
    top: calc(179px + 6px);
    padding: 1em;
    background: $color__button;
    border-radius: 10%;
    z-index: 3;
}

ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    row-gap: 1em;
    font-size: 14px;

    i {
        margin-left: .5rem;
    }
}

// Transitions
.menu-enter-active,
.menu-leave-active {
    transition: transform 0.5s ease;
}

.menu-enter-from,
.menu-leave-to {
    transform: translateX(200px);
}

.menu-enter-to,
.menu-leave-from {
    transform: translateX(0px);
}
</style>