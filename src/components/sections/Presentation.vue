<template>
    <section class="presentation">
        <div class="presentation__container container">
            <div class="presentation__img">
                <img src="../../assets/logo.svg" alt="logo association romane faure">
            </div>
            <div class="presentation__description">
                <div class="presentation__title">
                    <h1>Association Romane Faure</h1>
                </div>
                <div class="presentation__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique blanditiis, maxime
                        deserunt
                        nobis amet eius nostrum nesciunt est totam iure sapiente explicabo esse fugit nihil
                        quibusdam ut
                        sint id optio.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Section presentation */
.presentation {
    background-image: url(https://img.freepik.com/premium-vector/painted-background-multicoloured-palette_23-2148427592.jpg?w=2000);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    min-height: 70vh;
    display: flex;
    align-items: center;
}

.presentation__container {
    display: flex;
    justify-content: center;
}

.presentation__img {
    width: 60%;
}

.presentation__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    margin-left: 2rem;
}

.presentation__title,
.presentation__text {
    text-align: left;
}

.presentation__title h1 {
    margin-top: 1rem;
    margin-bottom: .5rem;
}

.presentation__text p {
    font-size: 35px;
    line-height: 1.5em;
}
</style>