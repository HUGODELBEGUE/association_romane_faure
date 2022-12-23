<script setup>
import Button from '../items/Button.vue'
</script>
<template>
    <section class="presentation">
        <div class="presentation__container container width__desktop__down">
            <div class="presentation__img">
                <img src="../../assets/logo.svg" alt="logo association romane faure">
            </div>
            <div class="presentation__description">
                <div class="presentation__title">
                    <h1>Association Romane Faure</h1>
                </div>
                <hr class="line__2">
                <div class="presentation__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique blanditiis, maxime
                        deserunt
                        nobis amet eius nostrum nesciunt est totam iure sapiente explicabo esse fugit nihil
                        quibusdam ut
                        sint id optio.</p>
                </div>
                <Button text="Don maintenant" font_size="1.5" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';

/* Section presentation */
.presentation {
    min-height: 70vh;
    display: flex;
    align-items: center;
}

.presentation__container {
    display: flex;
    justify-content: center;
}

.presentation__img {
    width: 60%;
}

.presentation__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: 40%;
    margin-left: 2rem;

    h1 {
        margin: 0;
    }

    p {
        margin-top: 0;
    }
}

.presentation__text p {
    font-size: 35px;
    line-height: 1.5em;
}
</style>