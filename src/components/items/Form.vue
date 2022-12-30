<template>
    <form @submit.prevent="sendEmail()" ref="form" class="form" method="post">
        <div class="form__input name">
            <label for="name">Nom</label>
            <input v-model="formData.name" type="text" name="name" id="name" placeholder="Ecrivez votre nom ici..">
        </div>
        <div class="form__input email">
            <label for="email">Email</label>
            <input v-model="formData.email" type="email" name="email" id="email"
                placeholder="Ecrivez votre email ici..">
        </div>
        <div class="form__input message">
            <label for="message">Message</label>
            <textarea v-model="formData.message" name="message" id="message" cols="30" rows="20"
                placeholder="Ecrivez votre demande ici.."></textarea>
        </div>
        <div class="form__input submit">
            <Button font_size="1.2" text="Envoyer" />
        </div>
        <div class="form__input error">
            <div v-if="errors.length" class="error__text">
                <p v-for="error in errors">{{ error }}&nbsp;manquant.</p>
            </div>
        </div>
    </form>
</template>

<script>
import emailjs from '@emailjs/browser'
export default {
    data() {
        return {
            formData: {
                name: null,
                email: null,
                message: null
            },
            errors: []
        }
    },
    methods: {
        // Send form
        sendEmail: function () {
            const serviceId = 'service_kj8g0gs';
            const templateId = 'template_uywc7uk';
            const publicKey = 'qH3WgmDhYRov4CSQq';
            this.errors = [];
            if (!this.formData.name) {
                this.errors.push('Nom')
                alert('Entrer votre nom!!')
            }
            if (!this.formData.email) {
                this.errors.push('Email')
                alert('Entrer votre emai!!')
            }
            if (!this.formData.message) {
                this.errors.push('Message')
                alert('Aucun message!!')
            }
            if (this.errors.length == 0) {
                alert('Erreurs OK')
                // emailjs.sendForm(serviceId, templateId, this.$refs.form, publicKey)
                //     .then((res) => {
                //         console.log('Success.', res.text);
                //     })
                //     .catch((err) => {
                //         console.error('Erreur lors de l\'envoi.', err.text)
                //     })
                alert('envoi OK')
                this.formData.name = '';
                this.formData.email = '';
                this.formData.message = '';
                this.errors = [];
                alert('Reset OK')
            }
            console.log(this.errors)
            console.log(this.formData)
            // this.$refs.form.reset();
        }


    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables';

.error__text {
    // background: hotpink;
    color: $color__valid;
    margin: auto;
    margin-left: 0;

    p {
        margin: auto;
    }
}

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

.error {
    height: 2em;
    margin: auto 0;
    grid-column: 2;
    grid-row: 3;
}
</style>