<template>
    <div class="logo">
        <a href="/"><img src="../../assets/logo.svg" alt="logo association romane faure" /></a>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.logo {
    width: 100%;
    transition: filter 0.15s;
}

.logo:hover {
    /* filter: drop-shadow(0 0 2px gray); */
    filter: brightness(120%);
}
</style>