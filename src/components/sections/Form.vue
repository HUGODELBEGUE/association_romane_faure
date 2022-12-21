<template>
    <section class="contact">
        <div class="contact__container container">
            <div class="contact__form">
                <div class="form__description">
                    <h1>Nous contacter..</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ut ipsum maiores recusandae
                        at veniam eos sunt, dolores inventore repellendus!</p>
                </div>
                <form class="form" action="">
                    <div class="form__input">
                        <label for="name">Votre nom</label>
                        <input type="text" name="name" id="name">
                    </div>
                    <div class="form__input">
                        <label for="email">Votre email</label>
                        <input type="email" name="email" id="email">
                    </div>
                    <div class="form__input">
                        <label for="object">L'objet de votre demande</label>
                        <input type="text" name="object" id="object">
                    </div>
                    <div class="form__input">
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <div class="form__input">
                        <input type="submit" value="Envoyer">
                    </div>
                </form>
            </div>
            <div class="contact__description">
                <div class="description__text">
                    <h2>Pourquoi nous contacter?</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tempora voluptatum in at incidunt
                        porro perferendis excepturi consequuntur nobis rem deserunt provident cupiditate, doloribus quos
                        sunt. Debitis mollitia cupiditate unde.</p>
                </div>
                <div class="description__img box__img">
                    <img src="https://thumbs.dreamstime.com/z/map-world-painted-hands-11992809.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact {
    background: #c8cde5;
}

.contact__container {
    display: flex;
}

.contact__form {
    text-align: left;
}

.form {
    display: flex;
    flex-direction: column;
    row-gap: 2em;
}
</style>