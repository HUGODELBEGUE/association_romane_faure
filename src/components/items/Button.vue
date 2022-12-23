<template>
    <div class="button">
        <button :style="{ 'font-size': font_size + 'em' }">{{ text }}</button>
    </div>
</template>

<script setup>
defineProps({
    text: String,
    font_size: Number
})
</script>

<style lang="scss" scoped>
@import '../../scss/variables';

.button {
    text-align: inherit;
}

button {
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto;
    width: 50%;
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: all .15s;
    box-shadow: 5px 5px 0px transparentize($color__secondary, .45);
    font-variant-caps: all-small-caps;

    &:hover {
        position: relative;
        top: 5px;
        left: 4px;
        box-shadow: 0px 0px 0px transparentize($color__secondary, .45);
    }

    &:focus,
    &:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
        position: relative;
        top: 5px;
        left: 4px;
        box-shadow: 0px 0px 0px transparentize($color__secondary, .45);
    }
}
</style>