<template>
    <div v-if="$route.name == 'HomePage'" class="map">
        <ul>
            <li @mousemove="onMousemove()">
                <a ref="presentation" href="#presentation">
                    <span>Présentation</span>
                    <i class="bi bi-globe-europe-africa"></i>
                </a>
            </li>
            <hr>
            <li>
                <a ref="activity" href="#activity">
                    <span>Activité</span>
                    <i class="bi bi-activity"></i>
                </a>
            </li>
            <hr>
            <li>
                <a ref="donation" href="#donation">
                    <span>Don</span>
                    <i class="bi bi-currency-exchange"></i>
                </a>
            </li>
            <hr>
            <li>
                <a ref="return__top" href="#menu">
                    <span>Retour au menu</span>
                    <i class="bi bi-arrow-up-circle-fill"></i>
                </a>
            </li>
        </ul>
    </div>
    <div v-if="$route.name == 'ContactPage'" class="map">
        <ul>
            <li>
                <a ref="contact" href="#contact">
                    <span>Contact</span>
                    <i class="bi bi-envelope-fill"></i>
                </a>
            </li>
            <hr>
            <li>
                <a ref="memory" href="#memory">
                    <span>Mémoire</span>
                    <i class="bi bi-balloon-heart-fill"></i>
                </a>
            </li>
            <hr>
            <li>
                <a ref="return__top" href="#menu">
                    <span>Retour au menu</span>
                    <i class="bi bi-arrow-up-circle-fill"></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$refs);
    },
    methods: {
        onMousemove() {
            console.log('hello')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables';

.map {
    padding: .5em .8em;
    background: $color__button;
    border-radius: 3px;
}

ul {
    display: flex;
    flex-direction: column;
    text-align: right;
    font-size: 14px;
    margin: 0;

    &:hover span {
        display: flex;
        animation: fade .5s;
    }

    li {
        padding: 1em 0;

        &:hover span {
            color: $color__typography__light;
            transform: scale(1.2);
        }
    }

    a {
        display: flex;
        justify-content: space-between;
    }

    hr {
        background: $color__typography__dark;
        border: 1px solid $color__typography__dark;
        border-radius: 2px;
        margin-right: 0;
        margin-left: 0;
        opacity: .2;
    }

    i {
        margin: 0;
    }

    span {
        display: none;
        color: $color__typography__dark;
        font-variant-caps: small-caps;
        padding-right: 2em;
        padding-left: .5em;
        transition: transform .25s, color .5s;
    }

    @keyframes fade {
        0% {
            transform: translateX(10em);
            opacity: 0;
        }

        35% {
            opacity: 0;
        }

        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
}
</style>