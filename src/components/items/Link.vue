<template>
    <div class="link">
        <a :href="href" :style="{ 'color': color }"><img :src="src" :alt="alt">{{ text }}</a>
    </div>
</template>

<script setup>
defineProps({
    href: String,
    color: String,
    src: String,
    alt: String,
    text: String
})
</script>

<style lang="scss" scoped>
.link {
    a {
        display: flex;
        align-items: flex-end;
        font-size: 25px;
        transition: transform .25s;

        &:hover {
            transform: scale(.95);
        }
    }

    img {
        width: auto;
        height: 1.5em;
        margin-right: .4em;
    }
}
</style>