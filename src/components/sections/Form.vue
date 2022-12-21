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
                    <div class="form__input name">
                        <label for="name">Votre nom</label>
                        <input type="text" name="name" id="name" placeholder="Ecrivez votre nom ici..">
                    </div>
                    <div class="form__input email">
                        <label for="email">Votre email</label>
                        <input type="email" name="email" id="email" placeholder="Ecrivez votre email ici..">
                    </div>
                    <div class="form__input message">
                        <label for="message">Votre message</label>
                        <textarea name="message" id="message" cols="30" rows="20"
                            placeholder="Ecrivez votre demande ici.."></textarea>
                    </div>
                    <div class="form__input submit">
                        <input type="submit" value="Envoyer">
                    </div>
                </form>
            </div>
            <div class="contact__description box">
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
    width: 60%;
    padding: 2em;
}

.form {
    /* display: flex;
    flex-direction: column;
    row-gap: 2em; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    grid-auto-columns: 50%;
    grid-auto-rows: minmax(100px, auto);
}

.form label {
    margin-right: 1rem;
    font-variant-caps: all-small-caps;
}

.form input,
textarea {
    padding: 1em;
    border-radius: 5px;
}

.name {
    grid-column: 1;
    grid-row: 1;
}

.email {
    grid-column: 2;
    grid-row: 1;
}

.message {
    grid-column: 1 / 3;
    grid-row: 2;
}

.submit {
    margin: auto 0;
    grid-column: 1;
    grid-row: 3;
}

.form__input {
    display: flex;
    flex-direction: column;
}

.contact__description {
    width: 40%;
}
</style>