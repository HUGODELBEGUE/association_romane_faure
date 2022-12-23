<template>
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
            <input id="submit__button" type="submit" value="Envoyer">
        </div>
    </form>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../../scss/variables';

.form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    grid-auto-columns: 50%;
    grid-auto-rows: minmax(100px, auto);
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

#submit__button {
    background: radial-gradient($color__background -20%, $color__secondary);
    box-shadow: 0 1px 5px gray;
    transition: transform .25s;

    &:hover {
        transform: scale(1.1);
    }
}

.form__input {
    display: flex;
    flex-direction: column;
}
</style>