<script setup>
import Form from '../items/Form.vue'
</script>

<template>
    <section id="contact" class="contact">
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
                    <h2>Pourquoi nous contacter ?</h2>
                    <hr class="line__2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero totam similique
                        molestias magnam doloremque dolores nobis aperiam consequuntur excepturi!</p>
                    <h3>Comment nous contacter ?</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, doloribus! Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Perspiciatis, ab?
                    </p>
                </div>
                <div class="description__img box__img">
                    <img src="https://thumbs.dreamstime.com/z/map-world-painted-hands-11992809.jpg" alt="">
                </div>
                <div class="contact__links">
                    <Link href="https://www.facebook.com/" src="/src/assets/facebook.png" alt="logo facebook" />
                    <Link href="https://www.instagram.com/" src="/src/assets/instagram.png" alt="logo instagram" />
                    <Link href="https://www.twitter.com/" src="/src/assets/twitter.png" alt="logo twitter" />
                    <Link href="https://www.perspectiv-immo.net/" src="/src/assets/home.png"
                        alt="logo perspectiv-immo" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';
/* Section contact */

.contact {
    display: flex;
    background: $color__background;
    min-height: 90vh;
}

.contact__container {
    display: flex;
}

.contact__form {
    text-align: left;
    width: 60%;
    padding: 2em;
}

.form__description {
    h1 {
        font-size: 2.2em;
        margin-top: 0;
    }
}

.contact__description {
    display: flex;
    flex-direction: column;
    row-gap: 2em;
    width: 40%;
    padding-left: 4em;
    text-align: left;
}

.description__text {
    color: $color__typography__light;

    h2 {
        margin: 0;
    }

    p {
        margin-top: 0;
    }

    hr {
        margin-top: 2.5em;
        margin-bottom: 2.5em;
    }
}

.contact__links {
    display: flex;
    justify-content: end;
    column-gap: 1em;
}
</style>