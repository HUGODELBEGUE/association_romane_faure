<script setup>
</script>

<template>
    <section id="activity" class="activity">
        <div class="activity__container container width__desktop__down">
            <div class="activity__text important__text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptas.</p>
            </div>
            <div class="activity__box">
                <div class="activity__missions box box__divise">
                    <div class="missions__icon">
                        <img src="../../assets/leadership.png" alt="missions image">
                    </div>
                    <div class="missions__title">
                        <h2>Missions</h2>
                    </div>
                    <div class="missions__text">
                        <span>Lorem ipsum dolor sit, amet consectetur.</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam natus neque dolor aliquid
                            distinctio aut ad voluptas quidem reprehenderit, est impedit ut corporis non quia
                            mollitia
                            harum a nulla beatae?</p>
                        <hr class="line__3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aut quisquam voluptas!
                            Reiciendis atque iure nobis nemo, aliquid quia. Hic, ad eveniet. Voluptatem fugit
                            corporis,
                            suscipit placeat natus nesciunt dolorum impedit unde architecto aliquam eligendi? Cum
                            dignissimos eveniet suscipit facilis dolorem? Inventore unde facilis laboriosam itaque
                            rem.
                            Corporis quae, aspernatur minima molestiae numquam deserunt omnis adipisci, error
                            eveniet
                            deleniti suscipit.</p>
                    </div>
                </div>
                <div class="activity__actions box box__divise">
                    <div class="actions__icon">
                        <img src="../../assets/rinse.png" alt="actions image">
                    </div>
                    <div class="actions__title">
                        <h2>Actions</h2>
                    </div>
                    <div class="actions__text">
                        <span>Lorem ipsum dolor sit, amet consectetur.</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ea est sequi a
                            voluptate,
                            aspernatur distinctio beatae similique sed illum ab consequatur? Deserunt accusantium
                            nostrum unde repellat in. Quas, sunt.</p>
                        <hr class="line__3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid dignissimos
                            sunt
                            earum suscipit cum! Sequi ea reprehenderit, eius quis consequuntur, culpa inventore ex
                            animi
                            ducimus soluta eveniet voluptatem assumenda nisi iusto nulla numquam tempore unde
                            voluptatibus provident</p>
                        <hr class="line__3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus odit,
                            eligendi culpa quidem, debitis repudiandae, optio nihil minima inventore maiores?</p>
                    </div>
                </div>
            </div>
            <div class="activity__news box">
                <div class="news__title">
                    <h2>Actualit??s</h2>
                </div>
                <div class="news__text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis error totam animi veniam.
                        Temporibus laboriosam modi incidunt nemo. Explicabo!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam natus neque dolor aliquid
                        distinctio aut ad voluptas quidem reprehenderit, est impedit ut corporis non quia
                        mollitia
                        harum a nulla beatae?</p>
                    <hr class="line__3">
                    <ul>
                        <LinkBlock href="https://www.facebook.com/" text__title="Actualit?? facebook" text__description="sam modi incidunt nemo. Explicabo!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam natus neque dolor aliquid
                        distinctio aut ad voluptas quidem reprehenderit, est impedit ut corporis non qu"
                            color="#4267b2" src="/src/assets/facebook.png" alt="logo facebook" text__logo="Facebook" />
                        <LinkBlock href="https://www.instagram.com/" text__title="Actualit?? instagram"
                            text__description="di incidunt nemo. Explicabo!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit." color="#e1306c"
                            src="/src/assets/instagram.png" alt="logo intagram" text__logo="Instagram" />
                        <LinkBlock href="https://www.twitter.com/" text__title="Actualit?? twitter" text__description="ipsum dolor sit amet consectetur adipisicing elit. Quo facilis error totam animi veniam.
                        Temporibus laboriosam modi incidunt nemo. Explicabo!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam natus neque dolor aliquid
                        distinctio aut ad vo" color="#1da1f2" src="/src/assets/twitter.png" alt="logo twitter"
                            text__logo="Twitter" />
                        <LinkBlock href="https://www.perspectiv-immo.net/" text__title="Site perspectiv'immo"
                            text__description="psum dolor sit amet consectetur, adipisicing elit. Totam natus neque dolor aliquid
                        distinctio aut ad voluptas quidem reprehenderit, est impedit ut corporis non quia
                        mollitia
                        harum a nulla beatae?" color="#bd4032" src="/src/assets/home.png" alt="logo perspectiv-immo"
                            text__logo="Perspectiv'immo" />
                    </ul>
                </div>
            </div>
            <div class="activity__img box__img">
                <img src="https://media.istockphoto.com/id/950605046/fr/photo/enfants-multiethniques-dans-un-cercle.jpg?s=612x612&w=0&k=20&c=tSit8ZnKfJ7joJ6AMUVYAkThiM6semAAsQUWHY_bpOc="
                    alt="">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../scss/variables';

/* Section activity */
.activity {
    background: $color__background;
}

.activity__container {
    // padding-top: calc(15em - 6em);
}

.activity__text {
    padding-bottom: 3em;
}

.activity__box {
    display: flex;
    justify-content: space-around;
    column-gap: 3rem;

    h2 {
        margin-top: .5em;
        margin-bottom: 0;
    }
}

.missions__icon,
.actions__icon {
    width: 35%;
    margin: 0 auto;
}

.activity__news {
    width: 80%;
    margin: 3rem auto;
    row-gap: 0;
}

.news__text {
    ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 4em 0;
        gap: 2em;
    }
}

.activity__img {
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 0;
}
</style>