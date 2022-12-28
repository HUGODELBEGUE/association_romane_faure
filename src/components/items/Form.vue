<template>
    <form @submit.prevent="sendContact()" class="form" method="post">
        <div class="form__input name">
            <label for="name">Votre nom</label>
            <input v-model="formData.name" type="text" name="name" id="name" placeholder="Ecrivez votre nom ici..">
        </div>
        <div class="form__input email">
            <label for="email">Votre email</label>
            <input v-model="formData.email" type="email" name="email" id="email"
                placeholder="Ecrivez votre email ici..">
        </div>
        <div class="form__input message">
            <label for="message">Votre message</label>
            <textarea v-model="formData.message" name="message" id="message" cols="30" rows="20"
                placeholder="Ecrivez votre demande ici.."></textarea>
        </div>
        <div class="form__input submit">
            <Button font_size="1.2" text="Envoyer" />
            <!-- <input @click="sendContact()" id="submit__button" type="submit" value="Envoyer"> -->
        </div>
        <span>{{ formData.name + " " + formData.email + " " + formData.message }}</span>
        <span v-for="error in errors">{{ error }}</span>
    </form>
</template>

<script>
export default {
    data() {
        return {
            errors: [],
            formData: {
                name: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        sendContact: function () {
            alert('1')
            this.errors = [];
            alert('2')
            if (!this.formData.name) {
                this.errors.push('Not name!!')
                alert('3')
            }
            if (!this.formData.email) {
                this.errors.push('Not email!!')
                alert('4')
            }
            if (!this.formData.message) {
                this.errors.push('Not message!!')
                alert('5')
            }
            alert('6')
            // if (this.errors) {
            //     return false;
            // }
            alert('7')
            console.log(this.formData)
            alert('8')
            this.formData.name = '';
            this.formData.email = '';
            this.formData.message = '';
            this.errors = [];
        }
    }
}


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

.form__input {
    display: flex;
    flex-direction: column;
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
    margin-left: 2em;
}
</style>