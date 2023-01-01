<template>
    <div class="linkBlock">
        <a :href="href">
            <li>
                <div class="news__link">
                    <span>{{ text__title }}</span>
                    <p>{{ text__description }}</p>
                    <div class="social__network" :style="{ 'color': color }">
                        <img :src="src" :alt="alt">{{ text__logo }}
                    </div>
                </div>
            </li>
            <div class="border"></div>
        </a>
    </div>
</template>

<script setup>
defineProps({
    href: String,
    text__title: String,
    text__description: String,
    color: String,
    src: String,
    alt: String,
    text__logo: String
})
</script>

<style lang="scss" scoped>
@import '../../scss/variables';

.linkBlock {
    width: 45%;
    height: 20rem;
    position: relative;
    z-index: 2;
}

li {
    height: -webkit-fill-available;
    border-radius: 4px;
}

.news__link {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;
    border: 3px solid rgba(51, 51, 51, 0.2);
    border-radius: 4px;
    padding: 1.5em;
    font-size: initial;
    height: inherit;
    background: $color__background__box;

    .social__network {
        display: flex;
        align-items: flex-end;
        font-size: 20px;
        font-variant-caps: all-small-caps;
        // margin-top: 1em;

        img {
            width: auto;
            height: 1.5em;
            margin-right: .4em;
        }
    }
}

li,
a,
.news__link {
    transition: transform .5s, opacity .5s, background .75s, border .75s, box-shadow .5s;
}

li:hover,
a {
    opacity: 1;
    transform: translate(-30px, -30px);
}

li:hover .news__link {
    box-shadow: 2px 2px 6px $color__button;
    background: #e28c295e;
    border: 3px dashed $color__button;

}

.border {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: -0;
    border: 8px solid rgba(51, 51, 51, 0.2);
    border-radius: 4px;
    z-index: -1;
}
</style>