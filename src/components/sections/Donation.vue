<template>
    <section class="donation">
        <div class="donation__container container">
            <div class="donation__box box">
                <div class="donation__description">
                    <div class="donation__text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis officiis quam nam vel
                            doloribus veritatis. Vel ea officiis, quisquam enim mollitia nulla sunt repellat cumque
                            veritatis nemo excepturi assumenda magnam.</p>
                    </div>
                    <div class="donation__interaction">
                        <div class="interaction__img box">
                            <img src="https://media.istockphoto.com/id/839295596/fr/photo/six-amis-pr%C3%A9-ado-ferroutage-dans-un-parc-bouchent-portrait.jpg?s=612x612&w=0&k=20&c=Dbxf02Ne6yvb_G9yJ6WAbMShDSQ5RdbwltDvaqPO1zM="
                                alt="photo enfants">
                        </div>
                        <div class="interaction__button box">
                            <span>Lorem ipsum dolor sit amet consectetur!</span>
                            <div class="button__text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sit quod voluptatibus
                                    laudantium vel iusto unde placeat quam obcaecati dolores?</p>
                            </div>
                            <button>Faire un don</button>
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
                            <div class="link">
                                <a href=""><img src="../../assets/facebook.png" alt="">Facebook</a>
                            </div>
                        </li>
                        <li>
                            <div class="link">
                                <a href=""><img src="../../assets/instagram.png" alt="">Instagram</a>
                            </div>
                        </li>
                        <li>
                            <div class="link">
                                <a href=""><img src="../../assets/twitter.png" alt="">Twitter</a>
                            </div>
                        </li>
                        <li>
                            <div class="link">
                                <a href=""><img src="" alt="">Autres...</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
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
    padding-left: 5rem;
    padding-right: 15rem;
    font-size: 35px;
    line-height: 3rem;
    text-align: left;
}

.donation__network {
    width: 30%;
    position: absolute;
    right: -11%;
}

.donation__network ul {
    display: flex;
    flex-direction: column;
    row-gap: 2.1rem;
}

.donation__network .link a {
    display: flex;
    align-items: center;
}

.donation__network .link img {
    width: auto;
    height: 48px;
    margin-right: 1.5rem;
}

.donation__interaction {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 30rem;
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
    bottom: -12%;
}
</style>