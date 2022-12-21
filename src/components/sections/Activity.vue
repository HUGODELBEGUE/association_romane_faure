<template>
    <section class="activity">
        <div class="activity__container container">
            <div class="activity__text">
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
                        <hr>
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
                <div class="activity__img box box__divise">
                    <img src="https://media.istockphoto.com/id/950605046/fr/photo/enfants-multiethniques-dans-un-cercle.jpg?s=612x612&w=0&k=20&c=tSit8ZnKfJ7joJ6AMUVYAkThiM6semAAsQUWHY_bpOc="
                        alt="">
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
                        <hr>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid dignissimos
                            sunt
                            earum suscipit cum! Sequi ea reprehenderit, eius quis consequuntur, culpa inventore ex
                            animi
                            ducimus soluta eveniet voluptatem assumenda nisi iusto nulla numquam tempore unde
                            voluptatibus provident? Cum, ut nesciunt? Soluta illum porro nam sapiente repellat
                            quidem
                            debitis quibusdam a. Distinctio, odio, qui saepe quas esse numquam iste aliquid laborum
                            soluta ea fugit velit animi sunt, dolorem quaerat. Quasi.</p>
                        <hr>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus odit,
                            eligendi culpa quidem, debitis repudiandae, optio nihil minima inventore maiores? Minus
                            accusamus eveniet nisi cum, officia delectus pariatur maiores eum ipsum! Amet incidunt
                            omnis
                            unde! Et molestiae facilis odio.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Section activity */
.activity {
    background: #c8cde5;
}

.activity__text {
    padding-bottom: 4rem;
    font-size: 35px;
}

.activity__box {
    display: flex;
    align-items: start;
    justify-content: space-between;
    column-gap: 3rem;
    position: relative;
}

.activity__missions,
.activity__actions {
    /* text-align: left; */
}

.missions__icon,
.actions__icon {
    width: 35%;
    margin: 0 auto;
}

.activity__img {
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 38%;
    left: 31%;
    top: 3%;
}
</style>