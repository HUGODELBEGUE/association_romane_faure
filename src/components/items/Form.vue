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

//     function sendData() {
//         var XHR = new XMLHttpRequest();

//         // Liez l'objet FormData et l'élément form
//         var FD = new FormData(form);

//         // Définissez ce qui se passe si la soumission s'est opérée avec succès
//         XHR.addEventListener("load", function (event) {
//             alert(event.target.responseText);
//         });

//         // Definissez ce qui se passe en cas d'erreur
//         XHR.addEventListener("error", function (event) {
//             alert('Oups! Quelque chose s\'est mal passé.');
//         });

//         // Configurez la requête
//         XHR.open("POST", "https://example.com/cors.php");

//         // Les données envoyées sont ce que l'utilisateur a mis dans le formulaire
//         XHR.send(FD);
//     }

//     // Accédez à l'élément form …
//     var form = document.getElementById("myForm");

//     // … et prenez en charge l'événement submit.
//     form.addEventListener("submit", function (event) {
//         event.preventDefault();

//         sendData();
//     });
// });

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
    background: $color__button;
    transition: filter .25s;
    font-weight: 800;
    width: 50%;
    margin-left: 2em;
    border-radius: 5px;

    &:hover {
        filter: brightness(.92);
    }
}

.form__input {
    display: flex;
    flex-direction: column;
}
</style>