<template>
    <div class="strip">
        <div class="strip__container container width__desktop__up">
            <div class="strip__text">
                <span>32</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis illo odit facere laboriosam
                    assumenda
                    nisi
                    aliquid, sint maxime ullam repellat.</p>
            </div>
            <div class="strip__text">
                <span>54</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis illo odit facere laboriosam
                    assumenda
                    nisi
                    aliquid, sint maxime ullam repellat.</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../../scss/variables';

.strip {
    background: $color__strip;
}

.strip__container {
    display: flex;
    justify-content: center;
    column-gap: 10em;
    padding: 10em;

    p {
        margin: 0;
        text-align: left;
    }

    span {
        margin-right: 20px;
        font-size: 10rem;
        font-weight: bold;
    }
}

.strip__text {
    display: flex;
    align-items: center;
    height: 140px;
}
</style>