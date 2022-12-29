<template>
    <div class="button">
        <button :style="{ 'font-size': font_size + 'em' }">{{ text }}</button>
    </div>
</template>

<script setup>
defineProps({
    text: String,
    font_size: String
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
    // border-radius: 5px;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    transition: all .15s;
    box-shadow: 5px 5px 0px transparentize($color__button, .55);
    font-variant-caps: all-small-caps;

    &:hover {
        position: relative;
        top: 3px;
        left: 2.5px;
        filter: brightness(.9);
        box-shadow: 3px 3px 0px transparentize($color__button, .55);
    }

    &:focus,
    &:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
        position: relative;
        top: 5px;
        left: 4px;
        background: $color__valid;
        box-shadow: 0px 0px 10px 5px transparentize($color__valid, .45);
    }
}
</style>