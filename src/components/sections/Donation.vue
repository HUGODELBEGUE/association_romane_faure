<script setup>
import Link from '../items/Link.vue'
import Button from '../items/Button.vue'
</script>

<template>
    <section id="donation" class="donation">
        <div class="donation__container container width__desktop__down">
            <div class="donation__box box">
                <div class="donation__description">
                    <div class="donation__text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis officiis quam nam vel
                            doloribus veritatis. Vel ea officiis, quisquam enim mollitia nulla sunt repellat cumque
                            veritatis nemo excepturi assumenda magnam.</p>
                        <hr>
                        <ul>
                            <li>Raison 1</li>
                            <li>Raison 2</li>
                            <li>Raison 3</li>
                            <li>Raison 4</li>
                        </ul>
                    </div>
                    <div class="donation__interaction">
                        <!-- <div class="interaction__img box">
                            <img src="https://media.istockphoto.com/id/839295596/fr/photo/six-amis-pr%C3%A9-ado-ferroutage-dans-un-parc-bouchent-portrait.jpg?s=612x612&w=0&k=20&c=Dbxf02Ne6yvb_G9yJ6WAbMShDSQ5RdbwltDvaqPO1zM="
                                alt="photo enfants">
                        </div> -->
                        <div class="interaction__button box">
                            <span>Lorem ipsum dolor sit amet consectetur!</span>
                            <div class="button__text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sit quod voluptatibus
                                    laudantium vel iusto unde placeat quam obcaecati dolores?</p>
                            </div>
                            <Button text="Faire un don" font_size="2" />
                        </div>
                    </div>
                </div>
                <div class="donation__network box">
                    <div class="network__links">
                        <h2>Pourquoi faire un don ?</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates iusto optio
                            facilis laudantium ratione harum cum ullam sapiente quam omnis, esse fuga laboriosam
                            quod quae quo veniam, rerum quisquam consequatur.</p>
                    </div>
                    <hr>
                    <ul>
                        <li>
                            <Link href="https://www.facebook.com/" color="#4267b2" src="/src/assets/facebook.png"
                                alt="logo facebook" text="Facebook" />
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/" color="#e1306c" src="/src/assets/instagram.png"
                                alt="logo intagram" text="Instagram" />
                        </li>
                        <li>
                            <Link href="https://www.twitter.com/" color="#1da1f2" src="/src/assets/twitter.png"
                                alt="logo twitter" text="Twitter" />
                        </li>
                        <li>
                            <Link href="" color="" src="" alt="" text="Autres" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';

/* Section donation */
.donation {
    background-image: url(https://2323153.fs1.hubspotusercontent-na1.net/hubfs/2323153/factsheet/assets/Differents_types_dassociations.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

.donation__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    padding-left: 1em;
    padding-right: 14rem;
    font-size: 35px;
    line-height: 3rem;
    text-align: left;

    hr {
        background: $color__secondary;
        border: 3px solid $color__secondary;
        margin-left: 0;
        margin-right: 80%;
    }

    li {
        font-size: 25px;

        &::before {
            content: url(../../assets/hourglass-split.svg);
            margin: 0 1em;
        }
    }
}

.donation__network {
    width: 20%;
    position: absolute;
    right: -11%;
}

.donation__network ul {
    display: flex;
    flex-direction: column;
    row-gap: 2.1rem;
}

.donation__interaction {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    height: 20rem;
}

.donation__interaction .box {
    /* height: min-content; */
    /* width: auto; */
}

.interaction__img {
    display: flex;
    padding: 0;
    overflow: hidden;
    width: 30%;
    position: absolute;
    left: -16%;
}

.interaction__button {
    width: 50%;
    position: absolute;
    bottom: -20%;
}
</style>