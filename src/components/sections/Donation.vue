<script setup>

</script>

<template>
    <section id="donation" class="donation">
        <div class="donation__container container width__desktop__down">
            <div class="donation__box box">
                <div class="donation__description">
                    <div class="donation__text important__text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis officiis quam nam vel
                            doloribus veritatis. Vel ea officiis, quisquam enim mollitia nulla sunt repellat cumque
                            veritatis nemo excepturi assumenda magnam.</p>
                        <hr class="line__2">
                        <span>Vous voulez faire un don, suivez les instructions:</span>
                        <ol>
                            <li>Appuyer sur le bouton orange en dessous "Faire un don".</li>
                            <li>Sur la page officielle de la trésorerie de l'association Romane Faure, entrez vos
                                coordonnées.
                            </li>
                            <li>Ensuite rentrez vos coordonnées banquaires (site sécurisé bla bla bla !!)</li>
                            <li>Cliquez sur valider ! Et voilà vous avez sauvé une vie !!!! </li>
                        </ol>
                    </div>
                    <div class="donation__interaction">
                        <div class="interaction__button box">
                            <span>Lorem ipsum dolor sit amet consectetur!</span>
                            <div class="button__text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sit quod voluptatibus
                                    laudantium vel iusto unde placeat quam obcaecati dolores?</p>
                            </div>
                            <Button text="Faire un don" font_size="1.5" />
                        </div>
                    </div>
                </div>
                <div class="donation__annexe box">
                    <div class="annexe__text">
                        <h2>Pourquoi faire un don ?</h2>
                        <span>Lorem ipsum, dolor sit amet consectetur.</span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates iusto optio
                            facilis laudantium ratione harum cum ullam sapiente quam omnis, esse fuga laboriosam
                            quod quae quo veniam, rerum quisquam consequatur.</p>
                    </div>
                    <hr class="line__3">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt laboriosam distinctio quia qui
                        omnis dolorum vero reprehenderit labore quod voluptatum.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';

/* Section donation */
.donation {
    background-image: url(https://cap.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2019.2F01.2F10.2F20ce34e6-1fc1-4a29-9329-178a1c917574.2Ejpeg/1200x630/background-color/ffffff/quality/70/cr/wqkgR2V0dHkgLyBDQVBJVEFM/creation-dune-association-choisir-le-bon-statut-1322815.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

.donation__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 12em;
}

.donation__box {
    width: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.donation__description {
    display: flex;
    flex-direction: column;
}

.donation__text {
    padding-right: 14rem;
    text-align: left;

    p {
        margin-bottom: 0;
    }

    hr {
        margin-top: 1.5em;
        margin-bottom: 1.5em;
    }

    span {
        font-size: 25px;
    }

    ol {
        font-size: 20px;
    }
}

.donation__annexe {
    width: 20%;
    padding-top: 1em;
    padding-bottom: 1em;
    position: absolute;
    right: -10em;
}

.annexe__text {
    h2 {
        font-size: 1.7em;
    }
}

.donation__interaction {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    height: 20rem;
}

.interaction__button {
    width: 50%;
    position: absolute;
    bottom: -10em;
}
</style>