<script setup>
import Form from '../items/Form.vue'
</script>

<template>
    <section class="contact">
        <div class="contact__container container width__desktop__down">
            <div class="contact__form box">
                <div class="form__description">
                    <h1>Nous contacter..</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ut ipsum maiores
                        recusandae
                        at veniam eos sunt, dolores inventore repellendus!</p>
                </div>
                <Form />
            </div>
            <div class="contact__description">
                <div class="description__text">
                    <h2>Pourquoi nous contacter?</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tempora voluptatum in at
                        incidunt
                        porro perferendis excepturi consequuntur nobis rem deserunt provident cupiditate, doloribus
                        quos
                        sunt. Debitis mollitia cupiditate unde.</p>
                </div>
                <div class="description__img box__img">
                    <img src="https://thumbs.dreamstime.com/z/map-world-painted-hands-11992809.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';

.contact {
    display: flex;
    background: $color__primary;
}

.contact__container {
    display: flex;
}

.contact__form {
    text-align: left;
    width: 60%;
    padding: 2em;
}

.contact__description {
    width: 40%;
    padding: 2em;
    /* align-self: center; */
}
</style>